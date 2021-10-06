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

//// To - Do -LIST

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

/// 주의할 점 !!
// store을 수정할 수 있는 유일한 방법은 action을 보내는것이다.
// 절대로 state를 mutate하지 않아야 한다. ( mutate란 array에 push하는것과 같은것 )
//  따라서 new state obj를 리턴해야한다.
const reducer = (state = [], action) => {
  // ...state란 state속 모든 content를 뜻한다. 즉 state속 content를 불러온 뒤 {}를 추가한다.
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
//action은 객체이므로 다양한 값이 들어갈 수 있다.
const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id });
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
store.subscribe(paintToDos);
