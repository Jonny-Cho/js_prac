var body = document.getElementsByTagName('body')[0];;
var img = document.querySelectorAll('img');

// 배열(imgArr)에 이미지 주소 넣기(10 x 2)
imgArr = [];
for(var i=0; i<20; i++){
    imgArr.push('img/heart'+(i%10+1)+'.png');
}

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
        let cardNum = (i%10+1);
        img[i].setAttribute('src', 'img/heart'+cardNum+'.png');
        count++;

        if(count%2==1){
            // 홀수일때 -> 숫자1 저장
            num1 = cardNum;
        } else {
            // 짝수일때 -> 숫자2 저장 -> 숫자1과 2 비교 ->
            // 맞으면 내비두고, 틀리면 두장이 살짝 보였다가 뒷면
            num2 = cardNum;
            if(num1 !== num2){
                // 두장이 살짝 보였다가 뒷면
                
                var idx = imgArr.indexOf('img/heart'+num1+'.png');
                var idx2 = imgArr.indexOf('img/heart'+num2+'.png');
                setTimeout(function(){
                    img[idx].setAttribute('src', 'img/back.jpg');
                    img[idx2].setAttribute('src', 'img/back.jpg');
                }, 1000);

                console.log(idx*10+1, idx2);
            }
        }
    }
}