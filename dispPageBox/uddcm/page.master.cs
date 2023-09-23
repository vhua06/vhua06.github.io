using System;
using System.Data;
using System.Web.UI.WebControls;

public partial class MasterPage : System.Web.UI.MasterPage
{
	protected PlaceHolder	phMain_Logout,
							phMain_Login,
							phMain_Zone;
	protected void Page_Load(Object sender, EventArgs e)
	{
		// 驗證
		utc.uddcm.access.check(this.Page);
		if ( !Page.IsPostBack )
		{
		};
		if ( null != Session["UDDCM"] )
		{
			phMain_Logout.Visible	= true;
			phMain_Zone.Visible		= true;
		}
		else phMain_Login.Visible = true;
	}
}
