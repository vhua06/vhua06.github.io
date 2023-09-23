<%@ Page Language="c#" Src="~/dispCore/dispPage/PageSet.aspx.cs" Inherits="PageSet"%>
    <%%>
        <!DOCTYPE html>
        <html lang="zh-Hant-TW">

        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
            <meta name="author" content="UTRUST 信諾科技" />
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta property="og:title" content="" />
            <meta property="og:description" content="" />
            <meta property="og:site_name" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
            <meta property="fb:admins" content="" />
            <title>
                <%=mOgTitle%>│氣候變遷調適資訊與成果資料庫</title>
            <!--CSS-->
            <link rel="stylesheet" href="./dispPageBox/tccip/assets/font-awesome/css/fontawesome-all.css">
            <link rel="stylesheet" href="./dispPageBox/tccip/assets/bootstrap/css/bootstrap.min.css" />
            <!-- <link rel="stylesheet" href="./dispPageBox/tccip/assets/swiper/swiper.min.css" /> -->
            <!-- <link rel="stylesheet" href="./dispPageBox/tccip/assets/magnific-popup/magnific-popup.css" /> -->
            <link rel="stylesheet" href="./dispPageBox/tccip/css/reset.css" />
            <link rel="stylesheet" href="./dispPageBox/tccip/css/style.css" />
            <link rel="shortcut icon" href="./dispPageBox/tccip/favicon.ico" />
            <!--[if lt ie 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<![endif]-->
        </head>

        <body class="hp">

            <div class="wrapper">
                <h1 class="site-title">土壤及地下水風險分析資訊系統</h1>
                <div class="header">
                    <nav class="navbar navbar-default navbar-static-top">
                        <div class="container">
                            <div class="navbar-header">

                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

                                <div class="navbar-brand"><a href="./index.html">土壤及地下水風險分析資訊系統</a></div>
                            </div>

                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="https://epamail.epa.gov.tw/front/mailboxhome" target="_blank">署長信箱</a></li>
                                    <li><a href="./index.html">回首頁</a></li>
                                    <li><a href="https://www.epa.gov.tw/" target="_blank" title="環保署">環保署</a></li>
                                    <li><a href="./UCMS/login.aspx" target="_blank" title="機關代表登入">機關代表登入</a></li>
                                </ul>

                                <!--主導覽列-->
                                <asp:PlaceHolder ID="NAV_MAIN" runat="server" />
                            </div>
                            <!--/.nav-collapse -->
                        </div>
                    </nav>
                </div>
                <!-- header END -->

                <div class="main-content">
                    <div class="container">

                        <div class="col-md-12">

                            <div id="Content">

                                <div class="cp_content">

                                    <!--標題-->
                                    <h3 class="content-title">
                                        <%=TitleName%>
                                    </h3>

                                    <!-- 麵包屑 -->
                                    <asp:PlaceHolder ID="AST_1" runat="server" />

                                    <!--<ol class="breadcrumb">
                              <li><a href="#">中文版首頁</a></li>
                              <li><a href="#">氣候變遷調適資訊與成果資料庫</a></li>
                              <li class="active">簡介</li>
                            </ol>-->


                                    <!-- 內容 -->
                                    <asp:PlaceHolder ID="CNT_MAIN" runat="server" />

                                </div>


                            </div>
                            <!-- Content END -->

                        </div>
                        <!-- row-offcanvas END -->
                    </div>
                </div>
                <!-- main-content END -->
                <div class="nav-footer">
                    <div class="container">
                        <ul class="nav nav-pills">
                            <li>
                                <a href="./TCCIP-1-J">網站導覽</a>
                            </li>
                            <li>
                                <a href="./TCCIP-1-H">隱私權</a>
                            </li>
                            <li>
                                <a href="./TCCIP-1-I">安全政策</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer">
                    <div class="container">
                        <p>行政院環境保護署 © 2018 All rights reserved. &nbsp;/&nbsp; 網站維護：環興科技</p>
                        <p>通訊地址:100台北市中正區中華路一段83號 / 聯絡電話:02-2311-7722</p>
                        <p>行政院環境保護署-環境衛生及毒物管理處 版權所有</p>
                    </div>
                </div>

            </div>
            <!--wrapper -->





            <a href="#" class="scrollToTop" style="display: inline;">Scroll To Top</a>



            <!--JS-->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
            <!-- <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> -->
            <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            <script src="./dispPageBox/tccip/assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="./dispPageBox/tccip/assets/swiper/swiper.min.js"></script>
            <script src="./dispPageBox/tccip/js/script.js"></script>
        </body>

        </html>