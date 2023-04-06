// module.exports.getdate = getdate;
// module.exports.getday = getday;
exports.getdate = getdate;
exports.getday = getday;
// console.log(module);

function getdate() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-Us", options);

  return day;
}


function getday() {
  let today = new Date();

  let options = {
    weekday: "long",
    // day: "numeric",
    // month: "long",
  };

  let day = today.toLocaleDateString("en-Us", options);

  return day;
}
