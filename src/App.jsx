import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomplateTodos, setInComplateTodos] = useState([]);

  const [complateTodos, setComplateTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setInComplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setInComplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    const newInComplateTodos = [...incomplateTodos];
    newInComplateTodos.splice(index, 1);
    setInComplateTodos(newInComplateTodos);

    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setComplateTodos(newComplateTodos);
  };

  const onClickBack = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);
    setComplateTodos(newComplateTodos);

    const newInComplateTodos = [...incomplateTodos, complateTodos[index]];
    setInComplateTodos(newInComplateTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
