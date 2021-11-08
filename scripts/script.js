const getButton = (text, onClick) => {
    let button = document.createElement("button");
    button.innerHTML = text;
    button.onclick = onClick;
    return button;
  };

const switchNavBar = ()=>{
    let navbar = document.getElementById("navbar");
    let display = navbar.style.display;
    if (display === "block"){
        navbar.style.display = "none";
    }
    else{
        navbar.style.display = "block"
    }
  }

  let button = getButton("button", switchNavBar);
  button.id = "burgerButton";
  document.getElementById("buttonDiv").append(button);

