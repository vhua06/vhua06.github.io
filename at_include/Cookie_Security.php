<?php
 	 // **PREVENTING SESSION HIJACKING**
	  // Prevents javascript XSS attacks aimed to steal the session ID
	  ini_set('session.cookie_httponly', 1);
	  // Uses a secure connection (HTTPS) if possible
	  ini_set('session.cookie_secure', 1);
  // session_start();
  // header("Set-Cookie: key=value; path=/; domain=localhost; HttpOnly; Secure; SameSite=Strict");
  //------------------Cookie Security: Cookie not Sent Over SSL-----Start--------------------------------------------//
  $cookie_name = "TestCookie";
  $cookie_value = "test";
  $cookie_expire = time()+3600*24; //send a cookie that expires in 24 hours
  $cookie_path= "/";
  $cookie_domain ="localhost";
  $cookie_secure = 1; //set secure = true;
  $cookie_httponly = 1; //set httponly = true
  setcookie($cookie_name,$cookie_value,$cookie_expire,$cookie_path,$cookie_domain,$cookie_secure,$cookie_httponly);
  //------------------Cookie Security: Cookie not Sent Over SSL-----End--------------------------------------------//
?>