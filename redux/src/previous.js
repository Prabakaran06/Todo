// import { createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     count:0,
// }
// export const counterSlice = createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         increment: (state)=>{
//             state.count += 1;
//         },
//         decrement:(state) =>{
//             state.count -= 1;
//         },
//         reset:(state)=>{
//             state.count=0;
//         },
//         incrementByAmount:(state,action)=>{
//             state.count += action.payload;
//         }
//     }
// })
// export const { increment, decrement,reset,incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer;





// import { useSelector,useDispatch } from 'react-redux';
// import { increment, decrement,reset,incrementByAmount } from './counterSlice';
// import { useState } from 'react';
// const Counter = () => {
//     const count=useSelector((states)=>states.counter.count)
//     const dispatch =useDispatch()

//     const [incrementAmount, setIncrementAmount]=useState(0)
//     const addValue =Number(incrementAmount) || 0;

//     const resetAll = () =>{
//         setIncrementAmount(0);
//         dispatch(reset())
//     }

//     return (
//         <section>
//             <p>
//                 {count}
//             </p>
//             <div>
//                 <button onClick={()=>dispatch(increment())}>  +  </button>
//                 <button onClick={()=>dispatch(decrement())}> - </button>
//             </div>
//             <input type='text' value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}>
//             </input>
//             <div>
//                 <button onClick = {()=>dispatch(incrementByAmount(addValue))}>
//                     Add Amount
//                 </button>
//                 <button onClick={resetAll}>Reset</button>
//             </div>
//         </section>
//     )
// }
// export default Counter