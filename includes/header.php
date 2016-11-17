<!doctype html>
<!--[if lt IE 7]> <html lang="en-us" class="no-js ie6 oldie"> <![endif]-->
<!--[if IE 7]>    <html lang="en-us" class="no-js ie7 oldie"> <![endif]-->
<!--[if IE 8]>    <html lang="en-us" class="no-js ie8 oldie"> <![endif]-->
<html lang="en-us" class="no-js">
	<head>
        <meta charset="UTF-8">
        <title><?php if ($title): echo $title . ' | '; endif; ?>Vodafone</title>
        <link href="/images/icons/favicon.ico" rel="shortcut icon">
        <link href="/images/icons/touch.png" rel="apple-touch-icon-precomposed">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="description" content="">
        <link rel="stylesheet" href="/css/reset.css" type="text/css" />
        <link rel="stylesheet" href="/css/fonts.css" type="text/css" />
        <link rel="stylesheet" href="/css/styles.css" type="text/css" />
        
        <!--[if lt IE 9]>
        <link rel="stylesheet" href="/css/ie8.css" media="screen" type="text/css" />
        <![endif]-->
        
        <script type="text/javascript" src="/js/jquery.js"></script>
        <script type="text/javascript" src="/js/modernizr.min.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
        <meta name='robots' content='noindex,follow' />
        <?php if ($additionalheaders): echo $additionalheaders; endif; ?>
    </head>
	<body class="">
        <div class="vflogo"> 
        <!-- logo-->
            <div class="mod mod-nav">
                <div class="header-brand">
                <img src="/images/vodafone-brand-logo.png" alt="Vodafone">
                    <a class="homepage-link" href="/" aria-label="Vodafone">
                        <img src="/images/vodafone-logo.png" alt="Vodafone Logo">
                    </a>
                </div>
            </div>
        </div>
        <div class="outer">
        <!-- page -->
        <div class="wrapper">
            <div class="header">
                <div class="left-col">
                    <!-- top bar-->
                </div>
            </div>   
            <div class="menu-btn">
                <div class="c-hamburger c-hamburger--htx">
                    <span> </span>
                </div>
                
           </div>

            <!-- start-->
            <div class="menu-wrapper" unselectable="on">
                <div class="menu-main-menu-container">
					<?php
                    	include ("nav.inc.php");
                    ?>
                </div>   
            </div>
            <!-- end-->
            <div class="clear"></div>