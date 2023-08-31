import { useState } from 'react';


export default  function Tickets() {
    const [tickets, setTickets]= useState([]);
    const [name, setName]= useState('')
    const [text, setText]=useState('')
    const [imageurl, setImageUrl]=useState('')

    
    return (
       
       <div>
        <h1>Tickets</h1>
     <form>

     </form>
     <button>Add To Cart</button>
     <select>Quantity</select>
        </div>
    
    )
}