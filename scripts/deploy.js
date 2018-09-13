/**
 * Created by zorochen on 2017/9/13.
 */
var fs = require('fs-extra');
var path = require('path');
var paths = require('../config/paths');

if(fs.existsSync(paths.phpAssetsDir)){
	fs.rmdirSync(paths.phpAssetsDir);
}
fs.mkdirSync(paths.phpAssetsDir);

var assetsConfig = require(paths.assetsManifest);
var cssFile = assetsConfig['main.css'];
var jsFile = assetsConfig['main.js'];
fs.writeFileSync(paths.phpJsAssets,'<script src="/' + jsFile + '"><\/script>');
fs.writeFileSync(paths.phpCssAssets,'<link href="/' + cssFile +'" rel="stylesheet">')