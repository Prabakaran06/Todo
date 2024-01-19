import React from "react";

import ItemList from "./ItemsList";


const Content = ({items,handlecheck,handledelete})=> {
    return (
            <>  
             {(items.length)?(
               <ItemList 
               items={items}
               handlecheck={handlecheck}
               handledelete={handledelete}
               />
               ):(<p>empty</p>)}
            </>
    )
}
export default Content