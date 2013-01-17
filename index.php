<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Markdown Converter</title>

	<link rel="stylesheet" href="css/page.css">
	<link rel="stylesheet" href="css/markdown.css">
</head>
<body>

	<div id="header">
		<strong>Markdown Converter</strong>
		<span id="add_css">Add Custom CSS</span>
	</div>

	<textarea id="code_view" placeholder="Enter markdown content"></textarea>
	<div id="preview" class="markdown-body"></div>

	<div id="dialog_overlay"></div>
	<div id="css_dialog" class="dialog">
		<textarea id="css_textarea" placeholder="Enter your CSS"></textarea>
		<div class="dialog-menu">
			<label for="remember_css">Remember CSS</label><input type="checkbox" id="remember_css">
			<div class="buttons">
				<button id="btn_clear" class="btn btn-clear">Clear</button>
				<button id="btn_save" class="btn">Save</button>
			</div>
		</div>
	</div>

	<style id="extra_styles"></style>

	<script src="js/jquery.min.js"></script>
	<script src="js/converter.js"></script>
</body>
</html>