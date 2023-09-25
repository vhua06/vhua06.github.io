using System;
using System.Data;
using System.Web.UI.WebControls;

using uTRUST.DBAccess;
using utc.Web.Disp.Core;


public partial class MasterPage : System.Web.UI.MasterPage
{
	protected DropDownList	select_WebConfig;
	protected Literal dispMenu,ltrTopTitle;
	protected TreeView tvRoot;
	
	string myTreeHTML = string.Empty;
	bool firstNode = true;
	DataTable myDataTable;
	DataView dv;
	
	protected void Page_Load(Object sender, EventArgs e)
	{
		if ( !Page.IsPostBack )
		{
			Reset_Web_Config();
			dispMenu.Text = BuildMenu();
			//dispMenu.Text = BuildTree(Get_SQL_RefNav());
			if(Session["PlmID"].ToString()=="WEB"){
				ltrTopTitle.Text="管理網站：";
			} else {
				ltrTopTitle.Text="使用者身分別：";
			}
		};
	}
	
	private string BuildMenu()
	{
		string MenuTree	= "";
		if(Session["PlmID"].ToString()=="WEB"){
			MenuTree	+= "<div id='accordion'>";
			MenuTree	+= BuildWebItem();
			MenuTree	+= BuildDataItem();
			MenuTree	+= BuildStcItem();
			MenuTree	+= BuildSysItem();
			MenuTree	+= "</div>";
		} else {
			MenuTree	+= "<div id='accordion'>";
			MenuTree	+= BuildIMPItem();
			MenuTree	+= BuildSysItem();
			MenuTree	+= "</div>";
		}
		
		// 回傳
        return MenuTree;
	}
	
	/*網站內容上稿
	-------------------------------------------------*/
	private string BuildWebItem()
	{
		// 參數設定
		string output		= "";
		
		// 如果有網站權限
		if ( null != Session["WebConfig"] )
		{
			string str_db_conn	= "SELECT A.RefAdmName,A.RefAdmID,P.RefAdmID AS RefAdmIDP,A.RefAdmParentID As RefAdmIDRoot,A.RefAdmParentID  "
								+ " FROM dispRefAdm A"
								+ " INNER JOIN dispRefAdm P ON A.RefAdmParentID=P.RefAdmID "
//								+ " left join dispRefWebDtl R ON A.RefAdmID=R.RefWebDtlRefAdmID "
								+ " WHERE ( "
//								+ " (A.RefAdmDepth=2 And A.RefAdmParentID = 'CSTEXT' And R.RefWebDtlHpRefWebID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"') "
//								+ " OR (A.RefAdmDepth=3 And P.RefAdmParentID='UWEBCORE' And R.RefWebDtlHpRefWebID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"' ) "
								+ " (A.RefAdmDepth=2 And A.RefAdmParentID = 'CSTEXT') "
								+ " OR (A.RefAdmDepth=3 And P.RefAdmParentID='UWEBCORE' ) "
								+ " ) "
								+ " AND A.RefAdmID IN "
								+ "("
								+ " SELECT PvgAdmRefAdmID FROM dispPvgAdm "
								+ " WHERE PvgAdmRefPvgID IN "
								+ "	("
								+ " SELECT MbrPvgRefPvgID FROM dispMbrPvg "
								+ " WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() +"'"
								+ " )"
								+ " AND PvgAdmRefAdmID IN "
								+ "  ("
								+ "   Select dispPvgMainDBID FROM dispPvg "
								+ "   Where dispPvgKnd='PROCWEB' And dispPvgLinkDBID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"' "
								+ "  )"
								+ ")"
								+ " ORDER BY (CASE A.RefAdmParentID WHEN 'FUNEXT' THEN '1' WHEN 'CSTEXT' THEN '2' ELSE '99' END),"
								+ " A.RefAdmRank,A.RefAdmDepth ";
								
			
			//開啟資料表
			DataTable mDataTable = DbData.GettingDataTable( str_db_conn );
			int set_db_rows_cnt = mDataTable.Rows.Count;
			
			// 如果有資料筆數,則執行資料列存取
			if ( 0 < set_db_rows_cnt )
			{
				output	+= "<h4>網站內容上稿</h4>";
				output	+= "<div>";
				//執行迴圈
				for ( int i=0;i<set_db_rows_cnt;i++ )
				{
					string strFunCat = mDataTable.Rows[i]["RefAdmIDRoot"].ToString();
					
					output += "<p";
					// 判斷是客製
					if ( "CSTEXT" == strFunCat || "FUNEXT" == strFunCat )
					{
						if ( Request.Url.PathAndQuery == "/dispCore/PmCustom/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx" ) output += " class='active'"; 
						output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/PmCustom/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx'";
					}
					// 判斷是模組
					else
					{
						if ( Request.Url.PathAndQuery == "/dispCore/PmAdmin/"+mDataTable.Rows[i]["RefAdmIDP"].ToString()+".aspx?cat="+mDataTable.Rows[i]["RefAdmID"].ToString() ) output += " class='active'"; 
						output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/PmAdmin/"+mDataTable.Rows[i]["RefAdmIDP"].ToString()+".aspx?cat="+mDataTable.Rows[i]["RefAdmID"].ToString()+"'";
					};
					
					output += " title='"+mDataTable.Rows[i]["RefAdmName"].ToString() + "' class='loading'>"+mDataTable.Rows[i]["RefAdmName"].ToString() + "</a></p>";
				};
				output	+= "</div>";
			};
		};
		
		// 回傳
        return output;
	}
	
	/*網站資料管理
	-------------------------------------------------*/
	private string BuildDataItem()
	{
		// 參數設定
		string output		= "";
		
		// 如果有網站權限
		if ( null != Session["WebConfig"] )
		{
			string str_db_conn	= "SELECT A.RefAdmName,A.RefAdmID,P.RefAdmID AS RefAdmIDP,A.RefAdmParentID As RefAdmIDRoot,A.RefAdmParentID  "
								+ " FROM dispRefAdm A"
								+ " INNER JOIN dispRefAdm P ON A.RefAdmParentID=P.RefAdmID "
								+ " left join dispRefWebDtl R ON A.RefAdmID=R.RefWebDtlRefAdmID "
								+ " WHERE (A.RefAdmDepth=2 And A.RefAdmParentID ='FUNEXT') "
								+ " AND A.RefAdmID IN "
								+ "("
								+ " SELECT PvgAdmRefAdmID FROM dispPvgAdm "
								+ " WHERE PvgAdmRefPvgID IN "
								+ "	("
								+ " SELECT MbrPvgRefPvgID FROM dispMbrPvg "
								+ " WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() +"'"
								+ " )"
								+ " AND PvgAdmRefAdmID IN "
								+ "  ("
								+ "   Select dispPvgMainDBID FROM dispPvg "
								+ "   Where dispPvgKnd='PROCWEB' And dispPvgLinkDBID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"' "
								+ "  )"
								+ ")"
								+ " ORDER BY A.RefAdmRank,A.RefAdmDepth ";
			//開啟資料表
			DataTable mDataTable = DbData.GettingDataTable( str_db_conn );
			int set_db_rows_cnt = mDataTable.Rows.Count;
			
			// 如果有資料筆數,則執行資料列存取
			if ( 0 < set_db_rows_cnt )
			{
				output	+= "<h4>網站資料管理</h4>";
				output	+= "<div>";
				//執行迴圈
				for ( int i=0;i<set_db_rows_cnt;i++ )
				{
					string strFunCat = mDataTable.Rows[i]["RefAdmIDRoot"].ToString();
					
					output += "<p";
					// 判斷是客製
					if ( "CSTEXT" == strFunCat || "FUNEXT" == strFunCat )
					{
						if ( Request.Url.PathAndQuery == "/dispCore/PmCustom/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx" ) output += " class='active'"; 
						output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/PmCustom/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx'";
					}
					// 判斷是模組
					else
					{
						if ( Request.Url.PathAndQuery == "/dispCore/PmAdmin/"+mDataTable.Rows[i]["RefAdmIDP"].ToString()+".aspx?cat="+mDataTable.Rows[i]["RefAdmID"].ToString() ) output += " class='active'"; 
						output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/PmAdmin/"+mDataTable.Rows[i]["RefAdmIDP"].ToString()+".aspx?cat="+mDataTable.Rows[i]["RefAdmID"].ToString()+"'";
					};
					
					output += " title='"+mDataTable.Rows[i]["RefAdmName"].ToString() + "' class='loading'>"+mDataTable.Rows[i]["RefAdmName"].ToString() + "</a></p>";
				};
				output	+= "</div>";
			};
		};
		
		// 回傳
        return output;
	}
	
	private string BuildSysItem()
	{
		// 參數設定
		string output		= "";
		string str_db_conn	= "SELECT A.* FROM dispRefNavAdm A"
							+ " INNER JOIN dispRefNavAdm P ON A.RefNavAdmParentID=P.RefNavAdmID "
							+ " WHERE A.RefNavAdmID IN "
							+ "("
							+ " SELECT PvgNavAdmRefNavAdmID FROM dispPvgNavAdm WHERE PvgNavAdmRefPvgID IN "
							+ "(SELECT MbrPvgRefPvgID FROM dispMbrPvg WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() + "')"
							+ ")"
							+ " ORDER BY P.RefNavAdmRank,A.RefNavAdmRank ";
		
		//開啟資料表
		DataTable mDataTable	= DbData.GettingDataTable( str_db_conn );
		int set_db_rows_cnt		= mDataTable.Rows.Count;
		
		// 如果有資料筆數,則執行資料列存取
		if ( 0 < set_db_rows_cnt )
		{
			output	+= "<h4>系統平台管理</h4>";
			output	+= "<div>";
			//執行迴圈
			for ( int i=0;i<set_db_rows_cnt;i++ )
			{
				output += "<p";
				if ( Request.Url.PathAndQuery == mDataTable.Rows[i]["RefNavAdmRemark"].ToString() ) output += " class='active'"; 
				output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString() + mDataTable.Rows[i]["RefNavAdmRemark"].ToString() + "' class='loading'>" + mDataTable.Rows[i]["RefNavAdmName"].ToString() + "</a></p>";
			};
			output	+= "</div>";
		};
		
		// 回傳
        return output;
	}
	
	private string BuildStcItem()
	{
		// 參數設定
		string output		= "";
		
		// 如果有網站權限
		if ( null != Session["WebConfig"] )
		{
			string str_db_conn	= "SELECT A.RefAdmName,A.RefAdmID,P.RefAdmID AS RefAdmIDP,A.RefAdmParentID As RefAdmIDRoot,A.RefAdmParentID  "
								+ " FROM dispRefAdm A"
								+ " INNER JOIN dispRefAdm P ON A.RefAdmParentID=P.RefAdmID "
								+ " left join dispRefWebDtl R ON A.RefAdmID=R.RefWebDtlRefAdmID "
								+ " WHERE ( "
								+ " (A.RefAdmDepth=2 And A.RefAdmParentID = 'UWEBNOR')  "//And R.RefWebDtlHpRefWebID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"'
								+ " ) "
								+ " AND A.RefAdmID IN "
								+ "("
								+ " SELECT PvgAdmRefAdmID FROM dispPvgAdm "
								+ " WHERE PvgAdmRefPvgID IN "
								+ "	("
								+ " SELECT MbrPvgRefPvgID FROM dispMbrPvg "
								+ " WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() +"'"
								+ " )"
								+ " AND PvgAdmRefAdmID IN "
								+ "  ("
								+ "   Select dispPvgMainDBID FROM dispPvg "
								+ "   Where dispPvgKnd='PROCWEB' And dispPvgLinkDBID='"+getValue.WebProject(Session["WebConfig"].ToString(),1)+"' "
								+ "  )"
								+ ")"
								+ " ORDER BY A.RefAdmRank,A.RefAdmDepth ";
			
			//開啟資料表
			DataTable mDataTable	= DbData.GettingDataTable( str_db_conn );
			int set_db_rows_cnt		= mDataTable.Rows.Count;
			
			// 如果有資料筆數,則執行資料列存取
			if ( 0 < set_db_rows_cnt )
			{
				output	+= "<h4>網站資訊查閱</h4>";
				output	+= "<div>";
				//執行迴圈
				for ( int i=0;i<set_db_rows_cnt;i++ )
				{
					string strFunCat = mDataTable.Rows[i]["RefAdmIDRoot"].ToString();
					
					output += "<p";
					if ( Request.Url.PathAndQuery == System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/dispStc/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx" ) output += " class='active'"; 
					
					output += "><a href='"+System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore/dispStc/"+mDataTable.Rows[i]["RefAdmID"].ToString()+".aspx'";
					
					output += " title='"+mDataTable.Rows[i]["RefAdmName"].ToString() + "' class='loading'>"+mDataTable.Rows[i]["RefAdmName"].ToString() + "</a></p>";
				};
				output	+= "</div>";
			};
		};
		
		// 回傳
        return output;
	}
	
	
	/*IMP資料管理
	-------------------------------------------------*/
	private string BuildIMPItem()
	{
		// 參數設定
		string output		= "";
		
		// 如果有網站權限
		if ( null != Session["WebConfig"] )
		{
			string str_db_conn	= " SELECT RefImpID,RefImpName FROM dispRefImp WHERE RefImpDepth=2 AND RefImpID IN "
									+ " (SELECT P.RefImpID "
									+ " FROM dispRefImp P "
									+ " INNER JOIN dispRefImp C "
									+ " ON P.RefImpID=C.RefImpParentID "
									+ " INNER JOIN dispRefImpDtl D "
									+ " ON C.RefImpID=D.RefImpDtlRefImpID "
									+ " WHERE P.RefImpDepth=2 AND P.RefImpParentID='" + Session["WebConfig"].ToString() + "' "
									+ " AND C.RefImpID IN "
										+ "("
										+ " SELECT PvgImpRefImpID FROM dispPvgImp WHERE PvgImpRefPvgID IN"
										+ "(SELECT MbrPvgRefPvgID FROM dispMbrPvg WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() + "')"
										+ ")"
									+ ")"
								+ " ORDER BY RefImpRank ";
			//開啟資料表
			DataTable mDataTable = DbData.GettingDataTable( str_db_conn );
			// 如果有資料筆數,則執行資料列存取
			for ( int i=0;i<mDataTable.Rows.Count;i++ )
			{
				output	+= "<h4>" + mDataTable.Rows[i]["RefImpName"].ToString() + "</h4>";
				output	+= "<div>";
				str_db_conn	= " SELECT * "
									+ " FROM dispRefImp A "
									+ " INNER JOIN dispRefImpDtl D "
									+ " ON A.RefImpID=D.RefImpDtlRefImpID "
									+ " WHERE A.RefImpParentID='" + mDataTable.Rows[i]["RefImpID"].ToString() + "' AND RefImpDtlIfShowID='Y' "
									+ " AND A.RefImpID IN "
									+ "("
									+ " SELECT PvgImpRefImpID FROM dispPvgImp WHERE PvgImpRefPvgID IN"
									+ "(SELECT MbrPvgRefPvgID FROM dispMbrPvg WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() + "')"
									+ ")"
									+ " ORDER BY A.RefImpRank ";
				//開啟資料表
				DataTable mDataTableSub = DbData.GettingDataTable( str_db_conn );
				//執行迴圈
				for ( int j=0;j<mDataTableSub.Rows.Count;j++ )
				{
					string strFunCat = mDataTableSub.Rows[j]["RefImpDtlRefImpKndID"].ToString();
					string strPath ="";

					string str_path_args = "";
					
					output += "<p";
					
					if( mDataTableSub.Rows[j]["RefImpDtlGetArg"] != null && mDataTableSub.Rows[j]["RefImpDtlGetArg"].ToString() != "" )
					{
						str_path_args += "?" + mDataTableSub.Rows[j]["RefImpDtlGetArg"].ToString();
					}

					if ( "O" == strFunCat || "R" == strFunCat )
					{
						strPath = mDataTableSub.Rows[j]["RefImpDtlRLocation"].ToString()
								+ str_path_args ;
						
						output += "><a href='"+ strPath + "' " + (("O" == strFunCat)?"target='_blank' ":"");
					}
					else if ( "P" == strFunCat)
					{
						strPath = System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()
								+ "/dispCore/PmCustom/" + mDataTableSub.Rows[j]["RefImpDtlRefAdmID"].ToString() + ".aspx"
								+ str_path_args ;
						 						
						if ( Request.Url.PathAndQuery.ToUpper() == strPath.ToUpper() ) output += " class='active'"; 
						
						output += "><a href='"+strPath +"'";
						
					}else if ( "N" == strFunCat)
					{
						output += "><a href='#'";
					};
					
					output += " title='"+mDataTableSub.Rows[j]["RefImpName"].ToString() + "' class='loading'>"+mDataTableSub.Rows[j]["RefImpName"].ToString() + "</a></p>";
				};
				output	+= "</div>";
			};
		};
		
		// 回傳
        return output;
	}
	
	/* 查詢條件重置
	-------------------------------------------------*/
	private void Reset_Web_Config()
	{
		// 參數設定
		string str_db_conn="";
		if(Session["PlmID"].ToString()=="WEB"){
			str_db_conn		= " SELECT (B.RefWebID+','+A.RefWebID) AS RefID,(B.RefWebName+' - '+A.RefWebName) AS RefName "
								+ " FROM dispRefWeb A "
								+ " LEFT JOIN dispRefWeb B "
								+ " ON A.RefWebParentID=B.RefWebID "
								+ " WHERE A.RefWebDepth=2 "
								+ " AND A.RefWebID IN "
								+ "("
								+ " SELECT PvgWebRefWebID FROM dispPvgWeb WHERE PvgWebRefPvgID IN"
								+ "(SELECT MbrPvgRefPvgID FROM dispMbrPvg WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() + "')"
								+ ")"
								+ " ORDER BY B.RefWebRank,A.RefWebRank ";
		} else {
			str_db_conn		= " SELECT RefImpID AS RefID,RefImpName AS RefName FROM dispRefImp WHERE RefImpDepth=1 AND RefImpID IN "
									+ "( SELECT P.RefImpID "
									+ " FROM dispRefImp P "
									+ " INNER JOIN dispRefImp C "
									+ " ON P.RefImpID=C.RefImpParentID "
									+ " INNER JOIN dispRefImp CC "
									+ " ON C.RefImpID=CC.RefImpParentID "
									+ " WHERE P.RefImpDepth=1 "
									+ " AND CC.RefImpID IN "
										+ "("
										+ " SELECT PvgImpRefImpID FROM dispPvgImp WHERE PvgImpRefPvgID IN"
										+ "(SELECT MbrPvgRefPvgID FROM dispMbrPvg WHERE MbrPvgMbrRecID='" + Session["MbrRecID"].ToString() + "')"
										+ ")"
									+ ")"
								+ " ORDER BY RefImpRank ";
		}


		// 管理網站
		try
		{
			if ( null != Session["WebConfig"] )
			{
				uTRUST.UIControl.Output_Control.DropDownList_DataBind(select_WebConfig
				,str_db_conn
				,"RefID","RefName"
				,Session["WebConfig"].ToString(),"");
			}
			else
			{
				uTRUST.UIControl.Output_Control.DropDownList_DataBind(select_WebConfig
				,str_db_conn
				,"RefID","RefName"
				,"","");
				Session["WebConfig"] = select_WebConfig.SelectedValue;
			};
		}
		catch{};
		
	}//Reset_Search_Area
	
	public void Change_WebConfig(Object sender, EventArgs e)
	{
		Session["WebConfig"] = select_WebConfig.SelectedValue;
		Response.Redirect(System.Web.Configuration.WebConfigurationManager.AppSettings["setVirtualDir"].ToString()+"/dispCore");
		//Response.Redirect(Request.Url.AbsoluteUri);
	}  
}