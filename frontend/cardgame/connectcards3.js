var body = document.getElementsByTagName('body')[0];;

// 배열(imgArr)에 이미지 주소 넣기(10 x 2)
imgArr = [];
for(var i=0; i<20; i++){
    imgArr.push('img/heart'+(i%10+1)+'.png');
}

console.log(imgArr);

// 뒷면 카드 20개 출력 (이미지 배열 이용)
for(let i=0; i<20; i++){
    let img = document.createElement('img');
    img.setAttribute('src', 'img/back.jpg');
    img.setAttribute('class', 'back');
    body.appendChild(img);
}

// show
function show(){
    for(let i=0; i<imgArr.length; i++){
        let img = document.querySelectorAll('img');
        console.dir(img);
        console.log(imgArr);
        img[i].setAttribute('src', imgArr[i]);
        img[i].setAttribute('class', 'heart'+(i+1));
    }
}

// hide
function hide(){
    for(let i=0; i<imgArr.length; i++){
        let img = document.querySelectorAll('img');
        img[i].setAttribute('src', 'img/back.jpg');
        img[i].setAttribute('class', 'back');
    }
}

// shuffle
function shuffle(){
    for(let i=0; i<imgArr.length; i++){
        let img = document.querySelectorAll('img');
    }
}