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
			string FileName		= filter_download(Request.QueryString.GetValues( "FileName" )[0].ToString(),"jpg,gif,png,tiff");
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
			string Extension=myFileInfo.Extension.ToUpper();
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
					imageFile = Scal_IMG(strFileUploadPath + FileLocation , FileName ,Convert.ToInt16(W),Convert.ToInt16(H),false);
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
	  
	  
	  private Bitmap Scal_IMG(string strIMG_Location,string FileName,int intWidth,int intHeight,bool ifForce){
        double  Scale;
		int newWidth,newHeight;
		//-------------------------------
		FileInfo myFileInfo=new FileInfo(FileName);
		string Extension=myFileInfo.Extension.ToLower();
		string LName=myFileInfo.Name.ToLower().Replace(Extension,"");
        Bitmap IMG ;
		
		if( intWidth<=150 && intHeight<=150 ){
			if(File.Exists(strIMG_Location + LName + "_s" + Extension)){
				IMG = new Bitmap(strIMG_Location + LName + "_s" + Extension);
			} else if(File.Exists(strIMG_Location + LName + "_b" + Extension)){
				IMG = new Bitmap(strIMG_Location + LName + "_b" + Extension);
			}else{
				IMG = new Bitmap(strIMG_Location + FileName);
			}
		} else if(File.Exists(strIMG_Location + LName + "_b" + Extension)){
			IMG = new Bitmap(strIMG_Location + LName + "_b" + Extension);
		} else {
			IMG = new Bitmap(strIMG_Location + FileName);
		}
		//-------------------------------
		if(!ifForce){	//不強迫以規定長寬縮放，僅在圖大於限定長寬時縮放
			if(IMG.Height > intHeight ||  IMG.Width > intWidth){
				if(((double)intWidth / (double)IMG.Width) > ((double)intHeight / (double)IMG.Height)){
					Scale=(double)intWidth / (double)IMG.Width;
				} else {
					Scale=(double)intHeight / (double)IMG.Height;
				}
			} else {
				Scale=1;
			}
			newWidth=Convert.ToInt32(Scale*IMG.Width);
			newHeight=Convert.ToInt32(Scale*IMG.Height);
		} else {
			if(intWidth >0 && intHeight==0){
				newWidth=intWidth;
				newHeight=Convert.ToInt32( ( (double)intWidth / (double)IMG.Width ) * (double)IMG.Height );
			} else if(intWidth == 0 && intHeight > 0){
				newHeight=intHeight;
				newWidth=Convert.ToInt32( ( (double)intHeight / (double)IMG.Height ) * (double)IMG.Width ); 
			} else {
				newWidth=intWidth;
				newHeight=intHeight;
			}
		}
		//-------------------------------			  
		Bitmap myBitmap = new Bitmap(IMG,newWidth,newHeight);

		int intX = (newWidth - intWidth)/2;
		int intY = (newHeight - intHeight)/2;

		RectangleF cloneRect;
		PixelFormat format = myBitmap.PixelFormat;
		Bitmap cloneBitmap;
		try{
			cloneRect = new RectangleF(intX, intY, intWidth, intHeight);
			cloneBitmap = myBitmap.Clone(cloneRect, format);
		}catch{
			cloneRect = new RectangleF(0, 0, IMG.Width, IMG.Height);
			cloneBitmap = myBitmap.Clone(cloneRect, format);
		}
		IMG.Dispose();
		myBitmap.Dispose();
		return cloneBitmap;
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