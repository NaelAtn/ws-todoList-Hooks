import React, { useState } from 'react';
import Add from "./TodoApp/Add";
import ListItems from "./TodoApp/ListItems";
import './App.css';

function App() {
  const [list, setList] = useState(["item1", "item2"]);
  const addItem = (item) => {
    // setList(list.concat(item));
    setList([item, ...list]);
  };
  const deleteItem = (indice) => {
    setList(list.filter((el, i) => i !== indice))
  };

  return (
    <div className="App">
    <div>
      <Add addItem={addItem} />
      <ListItems list={list} deleteItem={deleteItem} />
    </div>
    </div>

  );
}

export default App;
