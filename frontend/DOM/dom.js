window.onload = function(){
    var tag = document.getElementsByTagName("h1");
    var h1 = document.getElementById("h1Tag");
    alert(h1.innerHTML="world");
    
    alert(tag[0].innerHTML);
    h1.style.color = 'red';
    h1.style.backgroundColor = 'yellow';
    alert("data-prop="+h1.getAttribute("data-prop"));
    
}