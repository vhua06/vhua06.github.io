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
private string strContentType = string.Empty;
private ImageFormat IF = ImageFormat.Gif;

public void Page_Load(Object sender, EventArgs e)
{
	// 設定下載檔案夾位置，可以與網站「不同目錄或不同硬碟」或為「網路芳鄰路徑」，如"\\\\Workstation\\文件備分\\"
	string strFileUploadPath = ConfigurationSettings.AppSettings["strFileUploadPath"];
	// 設定檔案名稱，建議該檔名勿使用中文，純英文及數字組合最佳
	string FileLocation = filter_path( (Request.Params["FileLocation"]??string.Empty).ToString() );
	string FileName     = filter_download( (Request.Params["FileName"]??string.Empty).ToString(), "jpg,jpeg,gif,png,tiff" );
	string sFileName    = filter_download( (Request.Params["FileName"]??string.Empty).ToString(), "jpg,jpeg,gif,png,tiff" );
	//---------------------------------------------------------------
	FileInfo myFileInfo = new FileInfo(FileName);
	if ( 0 == FileName.Length ) myFileInfo = new FileInfo("spacer.gif");
	string Extension = myFileInfo.Extension.ToUpper();
	string DirPath   = strFileUploadPath + FileLocation + myFileInfo.Name;
	string sDirPath = "/dispUploadBox/resize";
	utc.canboo.folder.exist( sDirPath );
	//---------------------------------------------------------------
	string W = (Request.Params["W"]??string.Empty).ToString();
	string H = (Request.Params["H"]??string.Empty).ToString();
	W = utc.Web.Safety.setFilter.output( W, 4, "F", "C" );
	H = utc.Web.Safety.setFilter.output( H, 4, "F", "C" );
	//---------------------------------------------------------------
	if ( Extension==".GIF" )
	{
		strContentType="image/gif";
		IF = ImageFormat.Gif;
	}
	else if(Extension==".JPG")
	{
		strContentType="image/jpeg";
		IF=ImageFormat.Jpeg;
	}
	else if (Extension==".PNG")
	{
		strContentType="image/png";
		IF=ImageFormat.Png;
	};
	//---------------------------------------------------------------
	// 判斷縮圖檔是否已經存在
	Bitmap imageFile;
	if ( !string.IsNullOrEmpty(W) || !string.IsNullOrEmpty(H) )
	{
		sFileName = Path.GetFileNameWithoutExtension(myFileInfo.Name)+"-"+W+"x"+H+Extension.ToLower();
		if ( utc.canboo.file.exist( sDirPath, sFileName ) )
		{
			Response.Clear();
			Response.ContentType=strContentType;

			imageFile = new Bitmap(Path.Combine(strFileUploadPath+"resize\\",sFileName));
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
			Response.End();
		};

	};
	//---------------------------------------------------------------
	int quality = 100;
	EncoderParameter qualityParam = new EncoderParameter (System.Drawing.Imaging.Encoder.Quality, quality);
	EncoderParameters encoderParams = new EncoderParameters(1);
	encoderParams.Param[0] = qualityParam;
	ImageCodecInfo jpegCodec = GetEncoderInfo(strContentType);

	if( File.Exists(DirPath) )
	{
		// PNG和GIF不允許切割
		if ( ".PNG" == Extension || ".GIF" == Extension ) {
			W="";
			H="";
		};
		if(W.Length>0 && H.Length>0){
			imageFile = Scal_IMG_Crop(strFileUploadPath + FileLocation , FileName ,Convert.ToInt16(W),Convert.ToInt16(H),false,true);
		} else if(W.Length>0 && H.Length==0){
			imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(W),Convert.ToInt16(0),false);
		} else if(W.Length==0 && H.Length>0){
			imageFile = utc.Img.Scale.Scal_IMG(DirPath,Convert.ToInt16(0),Convert.ToInt16(H),false);
		} else {
		    imageFile = new Bitmap(DirPath);
		}
		Response.Clear();
		Response.ContentType=strContentType;
		//---------------------------------------------------------------
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
		if ( !string.IsNullOrEmpty(W) || !string.IsNullOrEmpty(H) ) imageFile.Save( Path.Combine(strFileUploadPath+"resize\\",sFileName), IF );
		imageFile.Dispose();
	}
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
	if ( _proc == false && "" != rSource ) uTRUST.AlertWrite.JScriptWrite.Write_Alert(this,rSource+"檔案不允許存取，請與系統管理人員聯繫","B");
	return rSource;
}

/* 過濾字元 filter_path(string 字串)
-------------------------------------------------*/
public string filter_path( string rPath )
{
	rPath = utc.Web.Safety.setFilter.output(rPath,100,"F","C");
	rPath = rPath.Replace("../","");
	rPath = rPath.Replace("..\\","");
	return rPath;
}

private static ImageCodecInfo GetEncoderInfo(string mimeType)
{
    // Get image codecs for all image formats
    ImageCodecInfo[] codecs = ImageCodecInfo.GetImageEncoders();

    // Find the correct image codec
    for(int i=0; i<codecs.Length; i++)
        if(codecs[i].MimeType == mimeType)
            return codecs[i];
    return null;
}
public Bitmap Scal_IMG_Crop(string strIMG_Location,string FileName,int intWidth,int intHeight,bool ifForce,bool isScale)
{
	double Scale;
	int newWidth,newHeight;
	int intWidth0  = intWidth;
	int intHeight0 = intHeight;
	//-------------------------------
	System.Drawing.Image.GetThumbnailImageAbort myCallback = new System.Drawing.Image.GetThumbnailImageAbort(ThumbnailCallback);
	System.Drawing.Image IMG;
	//-------------------------------
	FileInfo myFileInfo=new FileInfo(FileName);
	string Extension=myFileInfo.Extension.ToLower();
	string LName=myFileInfo.Name.ToLower().Replace(Extension,"");
	//Bitmap IMG ;
	string DirPath = "";
	if( intWidth<=150 && intHeight<=150 )
	{
		if(File.Exists(strIMG_Location + LName + "_s" + Extension))
		{
			DirPath = strIMG_Location + LName + "_s" + Extension;
			//IMG = new Bitmap(strIMG_Location + LName + "_s" + Extension);
		}
		else if(File.Exists(strIMG_Location + LName + "_b" + Extension))
		{
			DirPath = strIMG_Location + LName + "_b" + Extension;
			//IMG = new Bitmap(strIMG_Location + LName + "_b" + Extension);
		}
		else
		{
			DirPath = strIMG_Location + FileName;
			//IMG = new Bitmap(strIMG_Location + FileName);
		};
	}
	else if(File.Exists(strIMG_Location + LName + "_b" + Extension))
	{
		DirPath = strIMG_Location + LName + "_b" + Extension;
		//IMG = new Bitmap(strIMG_Location + LName + "_b" + Extension);
	}
	else
	{
		DirPath = strIMG_Location + FileName;
		//IMG = new Bitmap(strIMG_Location + FileName);
	}
	IMG = System.Drawing.Image.FromFile(DirPath);
	double scaleX;
	double scaleY;
	Bitmap myBitmap;
	//-------------------------------
	scaleX = (double)IMG.Width / (double)intWidth;
	scaleY = (double)IMG.Height / (double)intHeight;
	Scale = Math.Min(scaleX,scaleY);
	//Scale = Math.Max(Scale,1);
	newWidth = IMG.Width;
	newHeight = IMG.Height;
	intWidth = (int)((double)intWidth * Scale);
	intHeight = (int)((double)intHeight * Scale);
	//
	if ( isScale )
	{
		myBitmap = new Bitmap(intWidth0, intHeight0, IMG.PixelFormat);
	}
	else
	{	//不縮放，僅以指定寬高之比例進行剪裁
		myBitmap = new Bitmap(intWidth, intHeight, IMG.PixelFormat);
	};

	int intX = (newWidth - intWidth)/2;
	int intY = (newHeight - intHeight)/2;
	if ( "0" == (Request.Params["T"]??string.Empty).ToString() ) intY=0;

	// 避免發生 無法從具備索引像素格式的影像中建立圖形物件 (Graphic Object)。
	try {
		Graphics g = Graphics.FromImage(myBitmap);
		g.SmoothingMode = SmoothingMode.AntiAlias;
		g.InterpolationMode = InterpolationMode.HighQualityBicubic;
		g.PixelOffsetMode = PixelOffsetMode.HighQuality;


		if(isScale){
			g.ScaleTransform(1F/(float)Scale, 1F/(float)Scale);
			g.DrawImage(IMG, new Rectangle(0, 0, intWidth, intHeight),new Rectangle(intX, intY, intWidth, intHeight),GraphicsUnit.Pixel);
		}else{
			g.DrawImage(IMG, new Rectangle(0, 0, intWidth, intHeight),new Rectangle(intX, intY, intWidth, intHeight),GraphicsUnit.Pixel);
		};
		g.Dispose();
	}
	catch {};

	IMG.Dispose();
	return myBitmap;
}
//
private bool ThumbnailCallback(){
	return false;
}
</script>
