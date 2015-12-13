// dependencies
var express = require("express");
var routes = require("./routes");

var app = express();

app.engine("html", require("ejs").renderFile);

// Configuration
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/public/views");
app.set("view engine", "html");
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + "/public"));
app.use(app.router);

if (app.get("env") === "development")
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

if (app.get("env") === "production")
  app.use(express.errorHandler());

// Routes
app.get("/", routes.index);
//app.get("*", routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});
