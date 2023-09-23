<%@ Page Language="C#" %>
<%@ Import Namespace='System' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.Drawing' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.Drawing.Imaging' %>
<%@ Import Namespace='System.Drawing.Drawing2D' %>
<%@ Import Namespace='System.IO' %>
<%@ Import Namespace='System.Drawing.Text' %>
<%@ Import Namespace='uTRUST.ReturnFunction' %>
<script language="c#" runat="server">
	 private string strContentType="";
	 private ImageFormat IF=ImageFormat.Gif;
      public void Page_Load(Object sender, EventArgs e)
      {
		//設定下載檔案夾位置，可以與網站「不同目錄或不同硬碟」或為「網路芳鄰路徑」，如"\\\\Workstation\\文件備分\\"
			string strFileUploadPath=ConfigurationSettings.AppSettings["strFileUploadPath"];
		//設定檔案名稱，建議該檔名勿使用中文，純英文及數字組合最佳
			string FileLocation	= filter_path(Request.QueryString.GetValues( "FileLocation" )[0].ToString());
		//---------------------------------------------------------------
			string W="",H="";
			if(Request.Params["W"]!=null)W=Request.Params["W"].ToString();
			if(Request.Params["H"]!=null)H=Request.Params["H"].ToString();
			//------------------------------------
			FileInfo myFileInfo=new FileInfo(FileLocation);
			string Extension=myFileInfo.Extension.ToUpper();
		  	string DirPath=strFileUploadPath + FileLocation ;
			//------------------------------------
			if(Extension==".GIF"){
				strContentType="image/gif";
			} else if(Extension==".JPG"){
				strContentType="image/jpeg";
				IF=ImageFormat.Jpeg;
			} else if(Extension==".PNG"){
				strContentType="image/png";
				IF=ImageFormat.Png;
			}
			//------------------------------------
			if(File.Exists(DirPath)){
				Bitmap imageFile;
				if(W.Length>0 && H.Length>0){
					imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(W),Convert.ToInt16(H),false);
				} else if(W.Length>0 && H.Length==0){
					imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(W),Convert.ToInt16(0),false);
				} else if(W.Length==0 && H.Length>0){
					imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(0),Convert.ToInt16(H),false);
				} else {
				    imageFile = new Bitmap(DirPath);
				}
				Response.Clear();
				Response.ContentType=strContentType;
				// 如果是PNG要另外處理存檔程序
				if ( ".PNG" == Extension )
				{
					using (MemoryStream ms = new MemoryStream())
					{
					　　imageFile.Save(ms,IF);
					　　Response.OutputStream.Write(ms.GetBuffer(), 0, (int)ms.Length);
					};
				}
				// 預設存檔程序
				else
				{
					imageFile.Save(Response.OutputStream,IF);
				};
				imageFile.Dispose();
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