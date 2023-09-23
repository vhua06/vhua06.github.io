<%@ Page Language="C#" %>
<%@ Import Namespace='System' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.IO' %>
<%@ Import Namespace='System.Web' %>

<%@ Import Namespace='uTRUST.DBAccess' %>
<%@ Import Namespace='uTRUST.ReturnFunction' %>

<script language="c#" runat="server">
      public void Page_Load(Object sender, EventArgs e) 
      {
		//************登入檢核    開始****************
		//if(Session["MbrRecID"]==null && Session["MbrShpDBID"]==null && Session["CmpRecDBID"]==null)
				//uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"請先登入會員，如果您不是我們的會員，請先加入會員，謝謝！","B");
		//************登入檢核    結束****************
	
	
	//設定下載檔案夾位置，可以與網站「不同目錄或不同硬碟」或為「網路芳鄰路徑」，如"\\\\Workstation\\文件備分\\"
		string strFileUploadPath=ConfigurationSettings.AppSettings["strFileUploadPath"];
	//設定檔案名稱，建議該檔名勿使用中文，純英文及數字組合最佳
		string FileLocation	= filter_path(Request.QueryString.GetValues( "FileLocation" )[0].ToString());
		string FileName		= filter_download(Request.QueryString.GetValues( "FileName" )[0].ToString(),"doc,docx,zip,rar,xls,xlsx,pdf,ppt,pptx");
//建立檔案物件，取得檔案資訊，如檔名
		System.IO.FileInfo file= new System.IO.FileInfo(strFileUploadPath + "blank.txt" ) ;
		if(FileName.Length>0){
			file= new System.IO.FileInfo(strFileUploadPath + FileLocation + FileName );
		} else {
			if(Directory.Exists(strFileUploadPath + FileLocation)){
				string [] fileEntries = Directory.GetFiles(strFileUploadPath + FileLocation);
				FileInfo myFileInfo;
				foreach(string fileName in fileEntries){
					myFileInfo=new FileInfo(fileName);
					file= new System.IO.FileInfo(strFileUploadPath + FileLocation + myFileInfo.Name );
				}
			 }
		}
		if(file.Name != null){
		//------------------------------------------------------------------
		//先清空緩衝區
			Response.Clear();
		//建立 MINE 資料型態宣告，說明本內容是無法被 瀏覽器直接讀取且必須直接下載存檔的內容
			Response.ContentType="application/octec-stream";
		//建立 HTTP 表頭- 存檔預設檔名及長度
			Response.AddHeader ("Content-Disposition"
								,"attachment;filename=" + file.Name);	
			Response.AddHeader ("Content-Length",file.Length.ToString());
		//寫出檔案，亦可使用 FilePath + FileName 取代 file.FullName
			Response.WriteFile(file.FullName);
		//------------------------------------------------------------------
		if(ConfigurationSettings.AppSettings.Get("setLogRecord").ToString()=="Y") SetClkLog(this,"DW",FileName,"0", FileLocation );

			Response.End();
		} else {
			uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案下載失敗，請與系統管理人員聯繫","B");
		}
      }
	public void SetClkLog(Page PagObj,string ClkLogCat,string ClkLogObjID,string ClkLogObjDBID,string ClkLogRemark){
		//--------------------------------------------------
		// 如果設定要進行前台記錄
		if ( "Y" == ConfigurationSettings.AppSettings.Get("setLogRecord").ToString() )
		{
//			if(Session["InpRecDBID"]==null)
//				PagObj.Session["InpRecDBID"]=SET_InpRec(PagObj);
			Hashtable  htReqValue=new  Hashtable();
			
			if(PagObj.Session["TgrRecDBID"]!=null){
				htReqValue.Add("ClkLogTgrRecDBID", Convert.ToInt32(PagObj.Session["TgrRecDBID"]));
			} else {
				htReqValue.Add("ClkLogTgrRecDBID", 0 );
			}
			if(PagObj.Session["InpRecDBID"]!=null){
				htReqValue.Add("ClkLogInpRecDBID", Convert.ToInt32(PagObj.Session["InpRecDBID"]));
			} else {
				htReqValue.Add("ClkLogInpRecDBID", 0 );
			}
			htReqValue.Add("ClkLogCat", ClkLogCat );
			htReqValue.Add("ClkLogObjID", ClkLogObjID );
			htReqValue.Add("ClkLogObjDBID", Convert.ToInt64(ClkLogObjDBID) );
			htReqValue.Add("ClkLogRemark", ClkLogRemark );
			htReqValue.Add("ClkLogTime", ReturnFn.ReturnTimeFormat(DateTime.Now,3));
			
			DbData.InsertDataBase(htReqValue,"ClkLog","N","strCnnLog");
		};
	}
	private string SET_InpRec(Page PagObj){
		Hashtable  htReqValueInp=new  Hashtable();
		htReqValueInp.Add("InpRecTime", ReturnFn.ReturnTimeFormat(DateTime.Now,3));
		htReqValueInp.Add("InpRecIP", PagObj.Request.UserHostAddress);
		if(PagObj.Session["TgrRecDBID"]==null){
			htReqValueInp.Add("InpRecTgrRecDBID", 0);
		} else {
			htReqValueInp.Add("InpRecTgrRecDBID", Convert.ToInt32(PagObj.Session["TgrRecDBID"]) );
		}
		htReqValueInp.Add("InpRecLocation", PagObj.Request.Url.PathAndQuery);
		//------------------------------------------------------------
		HttpBrowserCapabilities Bs = PagObj.Request.Browser;
		htReqValueInp.Add("InpRecBsType", (Bs.Type.ToUpper()=="UNKNOWN"?"":Bs.Type) );
		htReqValueInp.Add("InpRecBsName", (Bs.Browser.ToUpper()=="UNKNOWN"?"":Bs.Browser) );
		htReqValueInp.Add("InpRecBsVersion",(Bs.Version=="0.0"?"":Bs.Version) );
		htReqValueInp.Add("InpRecBsPlatform", (Bs.Platform.ToUpper()=="UNKNOWN"?"":Bs.Platform) );
		htReqValueInp.Add("InpRecServerVariables", (PagObj.Request.ServerVariables["HTTP_USER_AGENT"].ToString().Length>300?PagObj.Request.ServerVariables["HTTP_USER_AGENT"].ToString().Substring(0,300):PagObj.Request.ServerVariables["HTTP_USER_AGENT"].ToString()) );
		//------------------------------------------------------------
		return DbData.InsertDataBase(htReqValueInp,"InpRec","Y","strCnnLog");
	}
	
	/* 過濾字元 filter_download(string 字串)
	-------------------------------------------------*/
	public string filter_download( string rSource, string rLimits )
	{
		// 參數設定
		bool _proc			= false;
		string[] _limits	= rLimits.Split(',');
		string[] _files		= filter_path(rSource).ToLower().Split('.');
		if ( _files.Length < 1 ) uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案命名問題不允許存取，請與系統管理人員聯繫","B");
		string _type		= _files[_files.Length-1];
		// 資料過濾
		rSource = rSource.Replace("\\","");
		rSource = rSource.Replace("/","");
		rSource = rSource.Replace("..","");
		// 檔案驗證
		foreach ( string value in _limits )
		{
			if ( value == _type )
			{
				_proc = true;
				break;
			};
		};
		if ( _proc == false ) uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案不允許存取，請與系統管理人員聯繫","B");
		return rSource;
	}
	
	/* 過濾字元 filter_path(string 字串)
	-------------------------------------------------*/
	public string filter_path( string rPath )
	{
		rPath = rPath.Replace("../","");
		rPath = rPath.Replace("..\\","");
		return rPath;
	}
</script>
