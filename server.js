// Require Modules
const express = require("express");
const indexRouter = require("./routes/index");
const skillsRouter = require("./routes/skills");
const morgan = require("morgan");
const methodOverride = require("method-override");

// Create the Express App
const app = express();

app.set("view engine", "ejs");

app.use(function(req, res, next) {
    console.log("Middleware Works");
    req.time = new Date().toLocaleTimeString();
    next();
});

app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/skills", skillsRouter);

app.listen(3000, function() {
    console.log("express is listening");
});