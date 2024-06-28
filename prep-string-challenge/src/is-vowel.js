/* exported isVowel */
function isVowel(char) {
  let c = char.toLowerCase();
  if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
    return true;
  } else {
    return false;
  }
}
