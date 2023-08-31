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
        <textarea 
       name="name" 
       cols="30" 
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></textarea>

     </form>
     <button>Add To Cart</button>
     <select>Quantity</select>
        </div>
    
    )
}