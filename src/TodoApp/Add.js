import React, { useState } from "react";
import "./Add.css";

const Add = ({ addItem }) => {
    const [item, setItem] = useState("");
    const handleChange = (event) => {
        setItem(event.target.value);
    };

    return (
        <form id="myDIV">
        <h2 className="title" style={{ margin: "5px" }}>
            My To Do List
        </h2>
        <input
            onChange={handleChange}
            value={item}
            id="myInput"
            placeholder="Add To Do..."
        />
        <span
            class="addBtn"
            onClick={(e) => {
            e.preventDefault();
            addItem(item);
            setItem("");
            }}
        >
            Add
        </span>
        </form>
    );
};

export default Add;

// steps:
// 1- save the value of the input in a state done
// 2-when i click to the add button send the item  to app=>
// NB ( i recieve that function from app as props)
// 3 - when i recieved in the app component i added in the list