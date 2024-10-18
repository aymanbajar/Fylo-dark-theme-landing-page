var menu = document.createElement('div');
menu.innerHTML='<i class="fa-solid fa-bars"></i>';
menu.style.color='white'
menu.style.position='relative';
menu.style.left='350px'
menu.style.bottom='35px'
menu.style.fontSize='25px'
menu.addEventListener('click',() =>{
    var list = document.createElement('ul');

    var one = document.createElement('li');
    one.innerHTML = '<a href="#features">Features</a>';
     
    var two = document.createElement('li');
    two.innerHTML = '<a href="#team">Team</a>';
    
        var three = document.createElement('li');
three.innerHTML = '<a href="#sign-in">Sign In</a>'
  list.appendChild(one)
  list.appendChild(two)
  list.appendChild(three)
  list.style.color='white';
  list.style.listStyle='none'

  Array.from(list.querySelectorAll('a')).forEach(link => {
    link.style.textDecoration = 'none'; 
    link.style.color = 'white';
    link.style.position='relative'
    link.style.right="50px"
  
});
Array.from(list.children).forEach(item => {
    item.style.marginBottom = '10px'; 
});
    menu.innerHTML ='<i class="fa-solid fa-xmark"></i>'

    menu.appendChild(list)
    menu.style.left='250px'

}
)
var header = document.getElementsByClassName("header")[0];
header.appendChild(menu);

m


