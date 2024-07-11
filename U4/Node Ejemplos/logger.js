const ERROR="Error";
const WARNING="Warning";
const INFO="Info";
const MESSAGE="Message";

function log(message, level=info){
  console.log(`${level}: ${message}`);
}

module.exports.log=log;
module.exports.error=ERROR;
module.exports.warning=WARNING;
module.exports.message=MESSAGE;
