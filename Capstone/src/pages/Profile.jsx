import { useState } from "react";

export default  function Profile({ token }) {
     const [name,setName] = useState('')
     const [tickets,setTickets] = useState([])
     
    return (
        <div>
        <h1>Profile</h1>
       
       <form>
        <p>Recent Tickets Purchased</p> 

       </form>
      
       </div>

        
    )
}