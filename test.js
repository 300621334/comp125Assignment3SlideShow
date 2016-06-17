//window.addEventListener("load", rotatePics, false)

var btn = document.getElementById("btn");
var btnPause = document.getElementById("pause");
var btnForward = document.getElementById("forward");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
btn.addEventListener("click", rotatePics, false);
btn.addEventListener("click", setRotation, false);
btnPause.addEventListener("click", pause, false);
btnForward.addEventListener("click", rotatePics, false);

//btn.addEventListener("click", addFav, false);
var counterZoom = 0;

var anchor = document.getElementById("top");
anchor.addEventListener("click", newWindow, false);
var newWindow;
var timer; // = setInterval(rotatePics, 3000);
function rotatePics()
{
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < 9; i++) {
        if (array[i] == 9)
        { array[i] = 1; }
        else
        { array[i]++; }


        images[i].src = array[i] + ".jpg";
        //anchor.href = array[6] + ".jpg";
        }
}
function setRotation()
{
    timer = setInterval(rotatePics, 3000);
    btn.removeEventListener("click", setRotation, false);

}
function newWindow()
{
    var rightMargin = ((screen.width - 1075) / 2);
    var topMargin = ((screen.height - 900) / 2);
    var dimentions = "width=1075, height=900, left="+rightMargin+", top="+topMargin;
    //event.preventDefault();
    newWindow = window.open("zoom.html", "", dimentions);
    //e out dimentions it opens in new "tab". but e dimentions it opes in new "window". or create another page to act as popup window.
    newWindow.focus();
    
    clearInterval(timer);
}


function pause()
{
    clearInterval(timer);
    btn.addEventListener("click", setRotation, false);
}

function removeFav1(){fav1.innerHTML = "";}
function removeFav2(){fav2.innerHTML = "";}
function removeFav3(){fav3.innerHTML = "";}
function removeFav4(){fav4.innerHTML = "";}


