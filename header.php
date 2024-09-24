<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		
		<title>6 Bird Social | Social Media + Business Strategy</title>

		<!-- Meta tags -->
		<meta name="description" content="Boost your brand with expert social media and business strategies. 
			Done-for-you templates, and business strategies to engage your audience, and drive results. 
			Discover proven tactics for growth and success online." />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />

		<!-- Don't forget to update the bookmark icons (favicon.ico and apple-touch-icons) in the root: http://mathiasbynens.be/notes/touch-icons -->

		<!-- CSS -->
		<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css" media="all" />

		<!-- JavaScript -->
		<!--[if IE]><![endif]-->
		<!--[if lt IE 9]>
		<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script src="assets/js/respond.min.js"></script>
		<script src="assets/js/main.js"></script>
        <?php wp_head();?>
	</head>
	<body>
		<div id="mouse"></div><div id="mouse-outline"></div>
		<header>
			<div class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/6bird-stacked-rev.svg" /></div>
			<nav>
				<div id="burger">
					<div id="bar1"></div>
					<div id="bar2"></div>
					<div id="bar3"></div>
				</div>
				<div id="mainNav">
				<?php wp_nav_menu( array( 'header-menu' => 'header-menu' ) ); ?>
				</div>
			</nav>
		</header>