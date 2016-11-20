const gulp = require("gulp");
const LiveServer = require("gulp-live-server");
const browserSync = require("browser-sync");

gulp.task("live-server", function(){
	const server = new LiveServer("./server/main.js");
	server.start();
});
""
gulp.task("serve", ["live-server"], function(){
	browserSync.init(null, {
		proxy: "http://localhost:7777/",
		port:9001
	});
})