import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, dispatchAddTodo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatchAddTodo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

//이 함수는 두 종류의 argument와 함께 호출되며 첫번째 요소는 Redux store에서 온 state이다.
// 두번째 요소는 component의 props이다.
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddTodo: (text) => dispatch(addToDo(text)),
  };
}

//connect는 argument로 state와 dispatch를 가진다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
