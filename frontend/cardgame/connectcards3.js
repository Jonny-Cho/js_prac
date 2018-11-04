var body = document.getElementsByTagName('body')[0];;
var img = document.querySelectorAll('img');

// 배열(imgArr)에 이미지 주소 넣기(10 x 2)
imgArr = [];
for(var i=0; i<20; i++){
    imgArr.push('img/heart'+(i%10+1)+'.png');
}

// console.log(imgArr);

// 뒷면 카드 20개 출력 (imgArr 이용)
for(let i=0; i<20; i++){
    let img = document.createElement('img');
    img.setAttribute('src', 'img/back.jpg');
    img.setAttribute('class', 'back');
    body.appendChild(img);
}

function show(){
    for(let i=0; i<imgArr.length; i++){
        let img = document.querySelectorAll('img');
        img[i].setAttribute('src', imgArr[i]);
        img[i].setAttribute('class', 'heart'+(i+1));
        img[i].setAttribute('data-pos', i);
        console.log(img[i].getAttribute('data-pos'));
    }
}

function hide(){
    for(let i=0; i<imgArr.length; i++){
        let img = document.querySelectorAll('img');
        img[i].setAttribute('src', 'img/back.jpg');
        img[i].setAttribute('class', 'back');
    }
}

function shuffle(){
    for(let i=0; i<40; i++){    
        let random = Math.floor(Math.random()*20); // 0~19
        let tmp = imgArr[0];
        imgArr[0] = imgArr[random];
        imgArr[random] = tmp;
    }
    alert("카드가 섞였습니다");
    hide();
}

var img = document.querySelectorAll('img');
var num1, num2;
for(let i=0; i<img.length; i++){
    var count=0; // 클릭횟수(count)가 짝수일때만 비교
    img[i].onclick = function(){
        count++;
        let cardNum = (i%10+1);
        img[i].setAttribute('src', 'img/heart'+cardNum+'.png');
        img[i].setAttribute('class', 'heart'+(i+1));
        alert(cardNum);
        // if(i<11){
        //     img[i].setAttribute('class', 'heart'+(i+1)+' set1');
        // } else {
        //     img[i].setAttribute('class', 'heart'+(i+1)+' set2');
        // }

        console.log("img[i]", img[i]); // 선택한 숫자
        console.log("i", i); // 카드순서
        console.log(imgArr[i]);

        if(count%2==1){
            // 홀수일때 -> 숫자1 저장
            num1 = cardNum;
        } else {
            // 짝수일때 -> 숫자2 저장 -> 숫자1과 2 비교 ->
            // 맞으면 내비두고, 틀리면 두장이 살짝 보였다가 뒷면
            num2 = cardNum;
            if(num1 !== num2){
                // 두장이 살짝 보였다가 뒷면
                // 숫자가 똑같은 카드 2개중 첫번째만 가져와지는 문제 
                var idx = imgArr.indexOf('img/heart'+num1+'.png');
                var idx2 = imgArr.indexOf('img/heart'+num2+'.png');
                setTimeout(function(){
                    img[idx].setAttribute('src', 'img/back.jpg');
                    img[idx].setAttribute('class', 'back');
                    img[idx2].setAttribute('src', 'img/back.jpg');
                    img[idx2].setAttribute('class', 'back');
                }, 1000);
                // console.log( idx2);
            } else {
                alert("정답");
            }
        }
    }
}