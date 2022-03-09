class Queue {
  constructor(value, value2) {
    this.front = value;
    this.rear = value2;
    this.my_array = new Array();
  }
}
const tos = new Queue(-1, -1);
// console.log(tos.top);

color_id = 1;
my_array = new Array();

function validate_entry(obj = tos) {
  var input_data;
  input_data = document.getElementById("user_entered_value").value;
  // alert("VAlidate Entry Triggered");
  if (input_data == null || input_data == "") {
    alert("Cannot input Null or Empty data");
    // alert(my_array[hello]);
    return 0;
  }
  push_to_queue(input_data, obj);
}
function push_to_queue(input_data, obj) {
  //   console.log(obj.top);
  obj.top = obj.top + 1;
  obj.my_array[obj.top] = input_data;
  //   console.log(obj.my_array[obj.top]);
  ul = document.querySelector(".Queue_table");
  var li = document.createElement("li");
  li.classList.add("Stack_button_display");
  if (color_id % 2 == 0) {
    li.classList.add("button_display_color_even");
  } else {
    li.classList.add("button_display_color_odd");
  }
  color_id = color_id + 1;
  li.setAttribute("id", obj.top);
  li.textContent = obj.my_array[obj.top];
  ul.appendChild(li);
}
function traverse_stack(obj) {
  if (obj.top < 0) {
    alert("Queue Emplty");
    return;
  }
  var i = obj.top,
    ul = document.querySelector(".Queue_table");

  for (i; i > -1; i--) {
    var li = document.createElement("li");
    li.textContent = obj.my_array[i];
    ul.appendChild(li);
  }
}
// function display_stack() {
//   // document.querySelector(".Stack_table").innerHTML= ;
// }
function display_array(obj) {
  for (var i = 0; i <= obj.top; i++) {
    console.log(i + 1 + " " + obj.my_array[i]);
  }
}

function delete_data(obj = tos) {
  var id = obj.top;
  console.log(id);
  var item = document.getElementById(id);
  obj.top = obj.top - 1;
  item.remove();
}
