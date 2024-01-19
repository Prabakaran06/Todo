import React, {  useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import PalindromeChecker from "./Palindrome";


function App() {
  
  //const API_URL=' http://localhost:3500/items';
  const [items,setItems]=useState(
    [
        {id:1,
        checked:true,
        item:"practice coding",
    },  {id:2,
        checked:false,
        item:"Type coding",
    },  {id:3,
        checked:true,
        item:"Learn coding",
    }
    ]);
const [newItem,setNewItem]=useState('')
const [search,setSearch]=useState('')
// useEffect(()=>{
//   const fetchItem = async ()=>{
//     try{
//       const response = await fetch(API_URL)
//if (!Response.ok) trow Error("data not received")
//       console.log(response)
//       const listItems = await response.json();
//       setItems(listItems)
//     }catch(err){
//       console.log(err.message)
//     }
//   }
//   (async () => await fetchItems())()
// })
// useEffect(()=>{
//   console.log('rendering')
//  //JSON.parse(localStorage.getItem('todo'))
// },[items])


 const addItem=(item)=>{
   const id=items.length ? items[items.length -1].id +1 :1;
   const addNewItem={id,checked:false,item}  
   const listItems=[...items,addNewItem]
   setItems(listItems);
  // localStorage.setItem('todo',JSON.stringify(listItems))
 }

    const handlecheck=(id)=>{
        const listitems=items.map((item)=>item.id===id ? {...item, checked:!item.checked}:item)
        setItems(listitems)
       // localStorage.setItem("todo", JSON.stringify(listitems))
    }

    const handledelete = (id)=>{
        const listitems=items.filter((item)=>item.id!==id)
        setItems(listitems)
    }
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log('submitted')
    addItem(newItem)
    setNewItem('')
  }
 
  return (
   <div className="App">
    <Header title="prabakaran" />
    <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
    />
    <SearchItem 
    search={search}
    setSearch={setSearch}
    />
    <main>
    <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        setItems={setItems}
        handlecheck={handlecheck}
        handledelete={handledelete}
    />

    </main>
    <Footer
    lengthh = {items.length} />
    <PalindromeChecker />
       
   </div>
  );
}

export default App;
