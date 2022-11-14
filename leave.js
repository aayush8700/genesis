const openBox=document.querySelector( ".applyBtn");
const closeBox= document.querySelector(".cross-btn");
const leavecont= document.querySelector(".leave-cont")
const body=document.querySelector(".body");

openBox.addEventListener('click',()=>{
  leavecont.classList.add('active');
  body.classList.add('fade');

  console.log("active added");
});
closeBox.addEventListener('click',()=>{
  leavecont.classList.remove('active');
  body.classList.remove('fade');
  console.log("active remove");
});
