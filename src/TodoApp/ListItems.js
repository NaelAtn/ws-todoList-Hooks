import React from "react";
import "./ListItems.css";
const ListItems = ({ list, deleteItem }) => {
    return (
        <div>
        <h2>List of Items</h2>
        {list.map((item, i) => (
            <ul class="paragraph-ul" key={item}>
            <li>
                {item}
                <button className="removeBtn" onClick={() => deleteItem(i)}>
                Delete
                </button>
            </li>
            </ul>
        ))}
        </div>
    );
};

export default ListItems;