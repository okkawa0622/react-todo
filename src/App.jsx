import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncomplateTodos } from "./components/IncomplateTodos";
import { ComplateTodos } from "./components/ComplateTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録出来るtodoは5個まで！！消化して〜！</p>
      )}

      <IncomplateTodos
        incomplateTodos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodos complateTodos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
