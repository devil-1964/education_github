function myFunction() {
  var element = document.getElementById("Dropdown");
  element.classList.toggle("invisible");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropBtn")) {
    var myDropdown = document.getElementById("Dropdown");
    if (!myDropdown.classList.contains("invisible")) {
      myDropdown.classList.add("invisible");
    }
    var myDropdown = document.getElementById("dropdownTeacher");
    if (!myDropdown.classList.contains("invisible")) {
      myDropdown.classList.add("invisible");
    }
  }
};
function myFunctionTeacher() {
  var element = document.getElementById("dropdownTeacher");
  element.classList.toggle("invisible");
}
// window.onclick = function (e) {
//   if (!e.target.matches(".dropBtnTeacher")) {
//     var myDropdown = document.getElementById("dropdownTeacher");
//     if (!myDropdown.classList.contains("invisible")) {
//       myDropdown.classList.add("invisible");
//     }
//   }
// };
