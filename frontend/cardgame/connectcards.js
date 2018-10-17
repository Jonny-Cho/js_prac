// 두 쌍의 카드가 보여지는 부분 시작
for (var i = 1; i <= 22; i++) {
    if (i == 12) {
        document.write('<br>')
    };
    var heartimg = document.createElement('img');
    // heartimg.setAttribute('src', 'img/heart'+i+'.png');
    heartimg.setAttribute('src', 'img/back.jpg');
    // heartimg.setAttribute('class', 'heart'+i);
    heartimg.setAttribute('class', 'back');
    document.body.appendChild(heartimg);
}
// 카드 보여지는 부분 끝

var img = document.querySelectorAll('img');

function show() {
    for (var i = 1; i <= 11; i++) {
        img[i - 1].setAttribute('src', 'img/heart' + i + '.png');
        img[i - 1].setAttribute('class', 'heart' + i);
    }
}

function hide() {
    for (var i = 1; i <= img.length; i++) {
        img[i - 1].setAttribute('src', 'img/back.jpg');
        img[i - 1].setAttribute('class', 'back');
    }
}

// img를 클릭할경우 발생하는 이벤트
// for문안에 콜백함수 오류 -> let
// var img = document.createElement('img');

var num1;
var num2;

for (let i = 0; i < 22; i++) {
    img[i].onclick = function () {
        var backimg = document.querySelectorAll('img.back');
        this.setAttribute('src', 'img/heart' + (i % 11 + 1) + '.png');
        this.setAttribute('class', 'heart' + (i % 11 + 1));

        if (i < 11) {
            num1 = this.className;
            // alert("num1 : " + num1);
        } else {
            num2 = this.className;
            // alert("num2 : " + num2);
        }

        if(backimg.length%2!=0){
            if (num1 === num2) {
                alert("정답");
            } else {
                alert("땡");
                img[i].setAttribute('src', 'img/back.jpg');
                img[i].setAttribute('class', 'back');
            }
        }
    }
    
}

