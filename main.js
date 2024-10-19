var menu = document.createElement('div');
menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
menu.style.color = 'white';
menu.style.position = 'relative';
menu.style.left = '350px';
menu.style.bottom = '35px';
menu.style.fontSize = '25px';
menu.style.width='25px'

// Create the list but don't append it yet
var list = document.createElement('ul');

var one = document.createElement('li');
one.innerHTML = '<a href="#features">Features</a>';

var two = document.createElement('li');
two.innerHTML = '<a href="#team">Team</a>';

var three = document.createElement('li');
three.innerHTML = '<a href="#sign-in">Sign In</a>';

list.appendChild(one);
list.appendChild(two);
list.appendChild(three);
list.style.color = 'white';
list.style.listStyle = 'none';


// Style the links
Array.from(list.querySelectorAll('a')).forEach(link => {
  link.style.textDecoration = 'none';
  link.style.color = 'white';
  link.style.position = 'relative';
  link.style.right = '50px';
});

// Style the list items
Array.from(list.children).forEach(item => {
  item.style.marginBottom = '10px';
});

var showingMenu = false; // A flag to track the menu state

// Add event listener for toggling the menu
menu.addEventListener('click', () => {
  if (!showingMenu) {
    menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    menu.appendChild(list);
    menu.style.left = '250px';
    showingMenu = true;
   
  } else {
    menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menu.style.left = '350px';
    if (menu.contains(list)) {
      menu.removeChild(list); // Remove the list when hiding
    }
    showingMenu = false;
  }
});

var header = document.getElementsByClassName('header')[0];
header.appendChild(menu);




