
const openBox=document.querySelector( ".cont-fgt");
const closeBox= document.querySelector(".cross-btn");
const fgtbtn= document.querySelector(".fgt-btn")

fgtbtn.addEventListener('click',()=>{
  openBox.classList.add('active');
  console.log("active added");
});
closeBox.addEventListener('click',()=>{
  openBox.classList.remove('active');
  console.log("active remove");
});


  