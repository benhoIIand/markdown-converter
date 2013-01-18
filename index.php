<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=8" />
	<title>Markdown Converter</title>
	<link rel="stylesheet" href="css/page.css">

	<!--[if IE]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>

	<header id="header">
		<strong>Markdown Converter</strong>
		<span id="add_css">Add Custom CSS</span>
	</header>

	<textarea id="code_view" class="view" placeholder="Enter markdown content"></textarea>
	<div id="ruler" class="ruler"></div>
	<iframe src="iframe.html" id="preview" class="view"></iframe>

	<div id="dialog_overlay"></div>
	<div id="dialog_css" class="dialog">
		<textarea id="css_textarea" placeholder="Enter your CSS"></textarea>
		<div class="dialog-menu">
			<div class="buttons">
				<button id="btn_clear" class="btn btn-clear">Clear</button>
				<button id="btn_save" class="btn">Save</button>
			</div>
			<label for="remember_css">Remember CSS</label><input type="checkbox" id="remember_css">
		</div>
	</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/converter.js"></script>
</body>
</html>