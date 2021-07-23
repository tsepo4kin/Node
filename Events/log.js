const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  log = (msg) => {
    console.log(msg);
    this.emit("some_event", { id: 1, text: "Hello world!" });
  };
}

module.exports = Logger;
