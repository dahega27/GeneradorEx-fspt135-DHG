
import "./style.css";

window.onload = function () {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let rwho = Math.floor(Math.random() * who.length);
  let raction = Math.floor(Math.random() * action.length);
  let rwhat = Math.floor(Math.random() * what.length);
  let rwhen = Math.floor(Math.random() * when.length);


  document.getElementById("excuse").innerHTML = (who[rwho]) +" "+ (action[raction])+" "+ (what[rwhat]) +" "+ (when[rwhen])
}




