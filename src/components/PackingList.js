import {useState} from "react";

export default  function PackingList({items, onHandleDelete, onToggleItem, onHandleClear}) {
    const [sortBy, setSortBy] = useState("input")

    let sortedItems;
    if(sortBy === "input") sortedItems = items;
    if(sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if(sortBy === "packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))



    return (
        // Rendering input form
        <div className="list">
            <ul>
                {sortedItems.map((initialItem) => (
                    <div key={initialItem.id}>
                        <Item itemObject={initialItem} onHandleDelete={onHandleDelete} onToggleItem={onToggleItem}/>
                    </div>
                ))}

            </ul>

            {/*Sorting items*/}
            <div className="actions">
                <select value={sortBy} onChange={(e)=> {setSortBy(e.target.value)}}>
                    <option value="input">Sort by input orders</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>
                <button onClick={onHandleClear}>Clear List</button>
            </div>
        </div>
    )
}

function Item({itemObject, onHandleDelete, onToggleItem}) {
    return <li>
        <input type="checkbox" value={itemObject.packed} onChange={() => onToggleItem(itemObject.id)}/>
        <span
            style={itemObject.packed ? {textDecoration: "line-through"} : {}}>{itemObject.quantity} {itemObject.description}</span>

        <button onClick={() => onHandleDelete(itemObject.id)}>❌</button>
    </li>


}