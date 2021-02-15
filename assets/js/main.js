/*--- Open side menu ---*/

const openMenu = document.querySelector(".header");
const menuArrow = document.querySelector(".opener")

let isOpened = false;
menuArrow.addEventListener("click", () =>{
        if(!isOpened){
            openMenu.classList.add("opened");
            menuArrow.classList.add("opened");
            isOpened = true;
        }
        else{
            openMenu.classList.remove("opened");
            menuArrow.classList.remove("opened");
            isOpened = false;
        }
    });

/*--- Background generator ---*/

const purpleTriangle = document.querySelectorAll('.purple-triangle');
const pinkCircle = document.querySelectorAll('.pink-circle');
const orangeSquare = document.querySelectorAll('.orange-square');

// Set new position for objects
function SetPosition(object, positionTop, positionLeft){
    object.style.top = positionTop +'vh';
    object.style.left = positionLeft +'%';
}

// Set new size for objects with images ('non-mutable')
function SetNonMutableSize(object,objectSize){
    object.style.height = object.style.height + objectSize +'vh';
    object.style.width = object.style.width + objectSize +'vw';
}

// Set new size for objects generated with css ('mutable')
function SetMutableSize(object,objectSize){
    object.style.height = object.style.height + objectSize +'px';
    object.style.width = object.style.width + objectSize +'px';
}

// Change border size 
function ChangeBorder(object){
    const changeSize = Math.floor(Math.random()*3+1);
    object.style.borderWidth = 2 + changeSize + 'px';
}

function ChangeObjectProperties() {
    let top, left, size;
    
    for(i=0; i<purpleTriangle.length; i++){
        purpleTriangle[i].style.display = "flex";
        top = Math.floor(Math.random() * 400);
        left = Math.floor(Math.random() * 65);
        size = Math.floor(Math.random()*4+1);
        SetPosition(purpleTriangle[i], top, left);
        SetNonMutableSize(purpleTriangle[i],size);
    }

    for(i=0; i<pinkCircle.length; i++){
        pinkCircle[i].style.display = "flex";
        top = Math.floor(Math.random() * 400);
        left = Math.floor(Math.random() * 70);
        size = Math.floor(Math.random()*100);
        SetPosition(pinkCircle[i], top, left);
        SetMutableSize(pinkCircle[i], size);
        ChangeBorder(pinkCircle[i]);
    }

    for(i=0; i<orangeSquare.length; i++){
        orangeSquare[i].style.display = "flex";
        top = Math.floor(Math.random() * 400);
        left = Math.floor(Math.random() * 70);
        size = Math.floor(Math.random()*100);
        SetPosition(orangeSquare[i], top, left);
        SetMutableSize(orangeSquare[i], size);
        ChangeBorder(orangeSquare[i]);
    }
    
  }

setInterval(ChangeObjectProperties, 3000);


/*--- Tab Selector ---*/

function openTab(element, tabName, tabContent, tabLinks) {

    tabContent = document.getElementsByClassName(tabContent);
    tabLinks = document.getElementsByClassName(tabLinks);

    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
      tabContent[i].className = tabContent[i].className.replace(" active", "");
    }
  
    if(document.getElementById(tabName) !== null){
        document.getElementById(tabName).className += ' active';       
    }
    
    element.classList.toggle('active');
    
}


  


