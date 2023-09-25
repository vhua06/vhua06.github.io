<%@ Page Language="C#" %>
<%@ Import Namespace='System' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.IO' %>
<script language="c#" runat="server">
      public void Page_Load(Object sender, EventArgs e) 
      {
		//************登入檢核    開始****************
		//if(Session["MbrRecID"]==null)
			//uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"請先登入！","B");
		//************登入檢核    結束****************
		//程式實際存放位置
		string FileLocation= Server.MapPath( filter_path(Request.QueryString.GetValues( "FileLocation" )[0].ToString()) );
//建立檔案物件，取得檔案資訊，如檔名
		System.IO.FileInfo file= new System.IO.FileInfo( FileLocation ) ;
//		if(System.IO.File.Exists(ConfigurationSettings.AppSettings["strFileUploadPath"]+FileLocation))
//			file= new System.IO.FileInfo(ConfigurationSettings.AppSettings["strFileUploadPath"]+FileLocation );
		if(file.Name != null){
		//------------------------------------------------------------------
		//先清空緩衝區
			Response.Clear();
		//建立 MINE 資料型態宣告，說明本內容是無法被 瀏覽器直接讀取且必須直接下載存檔的內容
			Response.ContentType="application/octec-stream";
		//建立 HTTP 表頭- 存檔預設檔名及長度
			Response.AddHeader ("Content-Disposition"
								,"attachment;filename=UI.txt");	
			Response.AddHeader ("Content-Length",file.Length.ToString());
		//寫出檔案，亦可使用 FilePath + FileName 取代 file.FullName
			Response.WriteFile(file.FullName);
		//------------------------------------------------------------------
			Response.End();
		} else {
			uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,"檔案下載失敗，請與系統管理人員聯繫","B");
		}
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

