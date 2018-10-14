// 실행순서를 예측해보자

function run() { 
	console.log("run start");

	setTimeout(function(){
        var msg = "hello codesquad";
        console.log(msg);
	}, 1000);

	console.log("run end");
}
console.log("start");
run();
console.log("end");

// setTimeout이 실행되면, setTimeout 안의 익명함수(1번째 인자)는 브라우저(Web API)가 일단 hold하고 있다가, 주어진 시간(2번째 인자) 만큼이 지나면 event queue(혹은 task queue)로 이동해 대기하게 됩니다. event queue에서 계속 대기하고 있다가, call stack이 비워지면, 즉 stack에 아무런 코드도 없는 상황이 되면 그 때 setTimeout 안의 함수가 call stack으로 이동(push)후 실행(pop)되게 됩니다.
// "Philip Roberts: What the heck is the event loop anyway?" 영상을 참조하면 좋을 것 같습니다.
// https://www.youtube.com/watch?v=8aGhZQkoFbQ