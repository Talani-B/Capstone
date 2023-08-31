import { useState } from 'react';


export default  function Tickets() {
    const [tickets, setTickets]= useState([]);
    const [name, setName]= useState('')
    const [text, setText]=useState('')
    const [count, setCount]=useState(1)

    
    return (
       
       <>
        <h1>Tickets</h1>
     <form>

     </form>
     <button>Add To Cart</button>
     <div className="quantity">
      
     </div>
     <select>Quantity</select>
        </>
    
    )
}