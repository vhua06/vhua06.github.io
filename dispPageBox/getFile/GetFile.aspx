<%@ Page Language="C#" %>
<%@ Import Namespace='System' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.IO' %>
<%@ Import Namespace='uTRUST.DBAccess' %>
<script language="c#" runat="server">
      public void Page_Load(Object sender, EventArgs e)
      {
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
		//判斷檔案是否存在
		if(File.Exists(strFileUploadPath + FileLocation + FileName))
		{
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
			//
				/*
					原有寫法Response.WriteFile(file.FullName);會遇到檔案過大無法執行下載，改用以下寫法，但以下寫法會有續存不支援的問題。
					詳細資料網址http://blog.miniasp.com/post/2008/03/11/Caution-about-ASPNET-Response-a-Large-File.aspx
					edited by Lawrence
				-------------------------------------------------------------------------------------------------------------------------------*/
				Response.TransmitFile(file.FullName);
			//------------------------------------------------------------------
				Response.End();
			} else {
				uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案下載失敗，請與系統管理人員聯繫","B");
			}
		}else{
			uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案下載失敗，請與系統管理人員聯繫","B");
		};
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
	/*private void INSERT_DownloadLog(string strSource, string strSourceDBID, string strMbrShpDBID)
	{
		string strSQL = "INSERT INTO DownloadLog (DownloadLogSource,DownloadLogSourceDBID,DownloadLogMbrShpDBID)VALUES('" + strSource + "'," + strSourceDBID + "," + strMbrShpDBID + ")";
		DbData.InsertDataBase(strSQL);
	}*/
</script>
