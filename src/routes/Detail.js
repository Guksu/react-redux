import React from "react";
import { connect } from "react-redux";

///?의 해석은 다음 링크에서 알 수 있다.
///https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
