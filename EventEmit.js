const express = require('express');
const EventEmitter = require('events')
const app = express();
const event = new EventEmitter();

let cnt = 0;
event.on("ApiCallCount", () => {
    cnt++;
    console.log("event  called ====>", cnt)
})
app.get("/", (req, res) => {
    res.send("first api callled")
    event.emit("ApiCallCount");
})

app.get("/product", (req, res) => {
    res.send("second search api callled")
    event.emit("ApiCallCount");
})
app.get("/categrise", (req, res) => {
    res.send("third update api callled")
    event.emit("ApiCallCount");
})

app.listen(8000);