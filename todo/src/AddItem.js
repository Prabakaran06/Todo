import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newItem,setNewItem,handleSubmit}) =>{
    const inputref=useRef('')
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input autoFocus
            id="addItem"
            ref={inputref}
            placeholder="add Item"
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            >

            </input>
            <button type="submit"
            aria-label="Add Item"
            onClick={()=>inputref.current.focus()}>
                
                <FaPlus />
            </button>
        </form>
    )
}
export default AddItem