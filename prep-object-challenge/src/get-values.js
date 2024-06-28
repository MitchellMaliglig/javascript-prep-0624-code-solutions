/* exported getValues */
function getValues(object) {
  let arr = [];
  for (key in object) {
    arr.push(object[key]);
  }
  return arr;
}
