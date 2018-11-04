function ajax(){
    var oReq = new XMLHttpRequest();

    oReq.addEventListener("load", function(){
        console.log(this.responseText);
    });

    oReq.open("GET", "https://www.example.org/example.txt");
    oReq.send();
}