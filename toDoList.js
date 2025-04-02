function add_list() {
  old_ul = document.getElementById("ul_list");
  items = document.getElementById("item").value.trim();
  if (items !== "") {
    let make_li = document.createElement("li");
    make_li.setAttribute('class','list')
    make_li.appendChild(document.createTextNode(items));
    old_ul.appendChild(make_li);
   document.getElementById('item').value ="";

    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    alert("Please enter a task!");
  }
}

