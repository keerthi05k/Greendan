// Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")    // selecting close icon

menuicon.addEventListener("click",function()
{
   sidenav.style.right=0
})


 
closenav.addEventListener("click",function(){
   sidenav.style.right="-50%"
   
})