var body = document.getElementsByTagName('body')[0];

for(let i=0; i<11;i++){
    let img = document.createElement('img');
    img.setAttribute('src', 'img/back.jpg');
    img.setAttribute('class', 'back set1');
    body.appendChild(img);
}
for(let i=0; i<11;i++){
    let img = document.createElement('img');
    img.setAttribute('src', 'img/back.jpg');
    img.setAttribute('class', 'back set2');
    body.appendChild(img);
}

var img = document.querySelectorAll('img');
var img1 = document.querySelectorAll('img.set1');
var img2 = document.querySelectorAll('img.set2');

var numArr = [];
var checkImg;
for(let i=0; i<img1.length; i++){
    img1[i].onclick = function(){
        numArr[0] = i + 1;
        checkImg = img1[i];
        console.log(numArr);
        this.setAttribute('src', 'img/heart' + (i+1) + '.png');
    }
}

for(let i=0; i<img2.length; i++){
    img2[i].onclick = function(){
        console.log(checkImg);
        numArr[1] = i + 1;
        console.log(numArr);
        this.setAttribute('src', 'img/heart' + (i+1) + '.png');
        //compare
        if(numArr[0] === numArr[1]){
            // 두장 모두 그대로
            alert("정답");
        } else {
            // 두장 모두 뒷면
            alert("땡");
            this.setAttribute('src', 'img/back.jpg');
            checkImg.setAttribute('src', 'img/back.jpg')
        }

        numArr = [];
        console.log(numArr);
    }
}