//-----------------툴킷 사용전 코드---------------------------
// import { createStore } from "redux";
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);

import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

///toolkit을 사용하면 코드양이 적어진다.
//toolkit에서 담긴값은 payload로 반환된다.

//-----------------toolkit의 slice사용전 코드
// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// //createReducer의 첫번째 요소는 initialState이다.
// //createReducer는 mutate해도 괜찮다.
// //현재 add는 mutate , delete는 새로운 state를 리턴하고 있다.
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

//slice는 reducer와 action을 같이 사용한 함수
const toDo = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { addToDo, deleteToDo } = toDo.actions;

//configerStrore을 사용하면 구글확장프로그램과 같이 사용하여 더 쉽게 요소를 파악할 수 있다.
const store = configureStore({ reducer: toDo.reducer });

export default store;
