import {useState} from "react";

export default  function Form({onHandleAddItems}) {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault()
        if (!description) alert("Fill the form")
        const newItem = {description, quantity, packed: false, id: Date.now()}
        onHandleAddItems(newItem)

        setDescription("")
        setQuantity(1)

    }

    return (

        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                {Array.from({length: 20}, (_, i) => i + 1).map(num => <option key={num}>{num}</option>)}
            </select>

            <input type="text" placeholder="Add items..." value={description} onChange={(e) =>
                setDescription(e.target.value)
            }/>
            <button>Add</button>
        </form>
    )
}