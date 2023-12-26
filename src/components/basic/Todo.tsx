import { useState } from "react";

const Todo = () => {
  const [toDo, setTodo] = useState<string>("");
  const [toDos, setTodos] = useState<string[]>([]);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [...currentArray, toDo]);
  };
  const deleteBtn = (index: number) => {
    setTodos((curToDos) =>
      curToDos.filter((_, curIndex) => curIndex !== index)
    );
  };
  return (
    <>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => deleteBtn(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
