for(var i=0; i<3; i++){
    setTimeout(function(){console.log(i);}, 1000);
}
// 3, 3, 3

for(var i=0; i<3; i++){
    (function(j){
        setTimeout(function(){console.log(j);}, 1000);
    })(i);
}
// 0, 1, 2

for(let i=0; i<3; i++){
    setTimeout(function(){console.log(i);}, 1000);
}
// 0, 1, 2