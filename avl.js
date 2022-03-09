var my_array = new Array();

function validate_entry() {
  var input_data;
  input_data = document.getElementById("user_entered_value").value;

  if (input_data == null || input_data == "") {
    alert("Cannot input Null or Empty data");
    // alert(my_array[hello]);
    return 0;
  }
  push_to_array(parseInt(input_data));
}

function push_to_array(data) {
  my_array.push(data);
  delete_display();
  display_array();
  
}
function delete_display() {
  var parent = document.getElementsByClassName("Queue_table")[0];
  var li = parent.querySelectorAll("*");
  //   console.log(li);
  for (i of li) {
    // console.log(i.innerHTML);
    i.remove();
  }
}
function display_array() {
  //   alert("Reached here");
  var parent = document.getElementsByClassName("Queue_table")[0];
  for (i of my_array) {
    var li = document.createElement("li");
    li.classList.add("Stack_button_display");

    li.textContent = i;
    parent.appendChild(li);
  }
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function sort_array() {
  my_array.sort((a, b) => a - b);
  delete_display();
  display_array();
}
