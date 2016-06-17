var arrayZoom = window.opener.array;
var imageToOpen = arrayZoom[6] + ".jpg"
document.getElementsByTagName("img")[0].src = imageToOpen;
var btnFav = document.getElementById("btnZoom");
btnFav.addEventListener("click", addFav, false)
var counter = window.opener.counterZoom;

var fav1, fav2, fav3, fav4;


  function addFav()
  {
      counter++;

      switch (counter % 4)
      {
          case 1:
              fav1 = window.opener.document.getElementById("fav1");
              fav1.innerHTML = '<span onclick="removeFav1()" title="Remove">&Chi;</span><a  title="Full Size" href="' + imageToOpen + '"><img style="width:100px; height:100px;" src=' + imageToOpen + '></a>';
              //document.getElementById("span1").addEventListener("click", function (){ window.opener.document.getElementById("fav1").innerHTML = ""; }, false);
              break;
          case 2:                                                                                            
              fav2=window.opener.document.getElementById("fav2");
              fav2.innerHTML = '<span onclick="removeFav2()" title="Remove">&Chi;</span><a  title="Full Size" href="' + imageToOpen + '"><img  style="width:100px; height:100px;"  src=' + imageToOpen + '></a>';
              break;                                                                                   
          case 3:                                                                                      
              fav3=window.opener.document.getElementById("fav3");
              fav3.innerHTML = '<span onclick="removeFav3()" title="Remove">&Chi;</span><a  title="Full Size" href="' + imageToOpen + '"><img  style="width:100px; height:100px;"  src=' + imageToOpen + '></a>';
              break;                                                                                         
          case 0:                                                                                            
              fav4=window.opener.document.getElementById("fav4");
              fav4.innerHTML = '<span onclick="removeFav4()" title="Remove">&Chi;</span><a  title="Full Size" href="' + imageToOpen + '"><img  style="width:100px; height:100px;"  src=' + imageToOpen + '></a>';
              break;
      }
      window.opener.counterZoom = counter;
     
  }


