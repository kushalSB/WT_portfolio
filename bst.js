function createDiv(parent_id) {
  if (validateBst(parent_id) == 0) {
    return 0;
  }
  var div_main = document.createElement("div");
  div_main.classList.add("Div_main");

  var div_left = document.createElement("div"); //left child
  var div_right = document.createElement("div"); // right child
  var div_left_id = parent_id + "l"; //id for left child
  var div_right_id = parent_id + "r"; // id for right child

  div_left.setAttribute("id", div_left_id);
  div_left.classList.add("Div_bst");
  div_left.classList.add("Div_left");
  div_right.setAttribute("id", div_right_id);
  div_right.classList.add("Div_bst");
  //   div_left.style = "transform:translate(left:100px);";

  console.log(div_left);
  console.log(div_right);
  console.log("Create Div Success");

  var parent = document.getElementById(parent_id);

  parent.appendChild(div_main);
  div_main.appendChild(div_left);
  div_main.appendChild(div_right);

  console.log(parent);
  console.log("Append Main Child Success");
  //   alert(parent_id);
  createSubElements(div_left_id);
  createSubElements(div_right_id);

  console.log(div_left);
  console.log(div_right);
  console.log("Append Sub Child Success");
  removeButton(parent_id);
}
function createSubElements(parent_id) {
  var input = document.createElement("input");
  var input_id = "input" + parent_id;
  input.setAttribute("id", input_id);
  input.classList.add("Input_bst");

  console.log(input_id);
  console.log("Input created succesfully");

  // take_data(input_id);

  var button = document.createElement("button");
  var button_id = "button" + parent_id;
  var button_onclick = "createDiv( '" + parent_id + "')";

  button.innerHTML = "Add";
  button.classList.add("Button_bst");
  button.setAttribute("id", button_id);
  button.setAttribute("onclick", button_onclick);

  var parent = document.getElementById(parent_id);
  //   alert(parent_id);
  parent.appendChild(input);
  parent.appendChild(button);
}
function removeButton(own) {
  var parent = document.getElementById(own);
  var button2 = parent.children[1];
  button2.remove();

  var input = parent.children[0];
  input.setAttribute("disabled", "disabled");
}

function validateBst(parent_id) {
  var parent = document.getElementById(parent_id);
  var input = parent.children[0];
  //   alert(input.value);
  if (input.value == null || input.value == "") {
    alert("Must Enter some value  Value");
    return 0;
  }
}
function getData(id) {
  take_data = document.getElementById(id);
}
