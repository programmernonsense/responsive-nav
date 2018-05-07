
document.querySelector('.toggle').addEventListener('click', dropDown);

function dropDown() {
  let p = document.getElementById("items");
  if (p.className === "navItems"){
    p.className += " responsive";
    console.log("if statement worked");
  } else {
    p.className = "navItems";
    console.log('statement taken away');
  }
  // let menu = document.querySelector('.navItems');
  // menu.style.display="inline-flex";
  // menu.style.flexDirection="column";
  // menu.style.width="80vw";
  // menu.style.position = "absolute";
  // menu.style.background="green";
  // menu.style.top="80px";
  // menu.style.left="-20px";
  // menu.style.right="0";
  // // menu.style.marginTop = "150px";
  // // menu.style.marginLeft = "20px";
 
  
}
