import React from "react";

const SearchItem = ({search,setSearch})=>{
    return(
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()} >
        <label htmlfor='search'>Search</label>
        <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="search here"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        ></input>
        </form>
    )
}
export default SearchItem;