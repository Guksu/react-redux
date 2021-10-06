import { createStore } from "redux";
//store에는 data(state)를 넣는다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//오타가 생기면 js 콘솔에서 빠르게 확인하기 위하여 변수로 지정한다.
const ADD = "ADD";
const MINUS = "MINUS";
//store를 사용하기 위해선 reducer가 필요하고 reducer는 data를 수정하는 함수이다 또한 reducer가 return하는것은 app의 data가 된다.
// action은 redux에서 함수를 부를 때 사용하는 argument이다.
// Reducer에게 Action을 보내는 방법 : store.dispatch( {key: value} );
const countModifer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const numChange = () => {
  number.innerText = countStore.getState();
};

const countStore = createStore(countModifer);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
// subscribe 는 strore안의 변화를 감지하고 store.subscribe(함수); 는 store 변화를 감지하면 함수를 실행한다.
countStore.subscribe(numChange);
