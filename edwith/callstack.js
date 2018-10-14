function printName(firstname){
    var myname = "jisu";
    return myname + " ," + firstname;
}


function run(firstname){
    firstname = firstname || "youn";
    var result = printName(firstname);
    console.log(result);
}

run('jonny');

// 실행순서
// 13, 7, 8, 9, (1, 2, 3, 4), 9(result), 10, 11