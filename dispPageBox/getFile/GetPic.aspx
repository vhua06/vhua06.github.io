<%@ Page Language="C#" %>
<%@ Import Namespace='System' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.Drawing' %>
<%@ Import Namespace='System.Configuration' %>
<%@ Import Namespace='System.Drawing.Imaging' %>
<%@ Import Namespace='System.Drawing.Drawing2D' %>
<%@ Import Namespace='System.IO' %>
<%@ Import Namespace='System.Data' %>
<%@ Import Namespace='System.Drawing.Text' %>
<%@ Import Namespace='uTRUST.DBAccess' %>
<%@ Import Namespace='uTRUST.ReturnFunction' %>
<script language="c#" runat="server">
	 private string strContentType="";
	 private ImageFormat IF=ImageFormat.Gif;
      public void Page_Load(Object sender, EventArgs e)
      {
		//設定下載檔案夾位置，可以與網站「不同目錄或不同硬碟」或為「網路芳鄰路徑」，如"\\\\Workstation\\文件備分\\"
			string strFileUploadPath=ConfigurationSettings.AppSettings["strFileUploadPath"];
		//設定檔案名稱，建議該檔名勿使用中文，純英文及數字組合最佳
			string strDBID = "";
			//if(Request.Params["DBID"]!=null)
				//strInfObjDBID=Request.Params["DBID"].ToString();
			if(Request.Params["pic_id"]!=null)
				strDBID=utc.Web.Safety.setFilter.output( Request.Params["pic_id"].ToString() , 30, "", "C" );
			string FileLocation = "";
			string FileName = "";
			FileLocation = Return_FilePath(strDBID, out FileName);
		//---------------------------------------------------------------
		
			string W="",H="";
			if(Request.Params["W"]!=null)W=Request.Params["W"].ToString();
			if(Request.Params["H"]!=null)H=Request.Params["H"].ToString();
			//------------------------------------
			FileInfo myFileInfo=new FileInfo("blank.jpg");
			if(FileName.Length==0){
				if(Directory.Exists(strFileUploadPath + FileLocation)){
					string [] fileEntries = Directory.GetFiles(strFileUploadPath + FileLocation);
					foreach(string fileName in fileEntries){
						myFileInfo=new FileInfo(fileName);
					}
				 }
			} else {
				myFileInfo=new FileInfo(FileName);
			}
			string Extension=myFileInfo.Extension.ToLower();
			string LName=myFileInfo.Name.ToLower().Replace(Extension,"");
			string DirPath=strFileUploadPath + FileLocation + myFileInfo.Name ;
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
					if( Convert.ToInt16(W)>1000 || Convert.ToInt16(H)>1000 ){
						imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(W),Convert.ToInt16(H),false);
					} else if((Convert.ToInt16(W)>300 || Convert.ToInt16(H)>300) && File.Exists(strFileUploadPath + FileLocation + LName + "_b" + Extension)){
						imageFile = utc.Img.Scale.Scal_IMG(strFileUploadPath + FileLocation + LName + "_b" + Extension ,Convert.ToInt16(W),Convert.ToInt16(H),false);
					} else if((Convert.ToInt16(W)<=300 && Convert.ToInt16(H)<=300) && File.Exists(strFileUploadPath + FileLocation + LName + "_s" + Extension) ) {
						imageFile = utc.Img.Scale.Scal_IMG(strFileUploadPath + FileLocation + LName + "_s" + Extension ,Convert.ToInt16(W),Convert.ToInt16(H),false);
					} else {
						imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(W),Convert.ToInt16(H),false);
					}
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
			}else{
				Bitmap imageFile2;
				imageFile2 = new Bitmap(Server.MapPath("~/dispProject/js/ckeditor/spacer.gif"));
				Response.Clear();
				Response.ContentType=strContentType;
				imageFile2.Save(Response.OutputStream,IF);
				imageFile2.Dispose();
			}
      }
	  //
	  private string Return_FilePath(string strDBID, out string strFileName)
	  {
	  		string strRtn = "";
	  		strFileName = "";
			string strSQL = "SELECT PicRecLocation,PicRecFileName FROM dispPicRec WHERE PicRecDBID=" + strDBID;
			DataTable myDataTable = DbData.GettingDataTable(strSQL);
			if(myDataTable.Rows.Count > 0){
				strRtn = myDataTable.Rows[0]["PicRecLocation"].ToString();
				strFileName = myDataTable.Rows[0]["PicRecFileName"].ToString();
			}
			return strRtn;
	  }
	  //
</script>