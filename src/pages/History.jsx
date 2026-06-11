import { useNavigate } from "react-router-dom";
import Booking from "./Booking";
import { useState } from "react";
function History({bookings,setBookings,onEdit}){
        const [search,setSearch]=useState("");
    const navigate=useNavigate();
    
    const deleteBooking=(id)=>{const editing =bookings.filter((booking)=>booking.id !==id);
      setBookings(editing);
    };
    const handleEdit=(booking)=>{
    onEdit(booking);
    navigate("/booking");
    }
    const filterBooking=bookings.filter((booking)=>{
        return (
            booking.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            booking.from
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            booking.to
            .toLowerCase()
            .includes(search.toLowerCase())

        );
    });

return(
    <div className="history-container">
        <h2 className="history-title">Ticket History</h2>
        <input type="text" placeholder="search name,from and to" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <hr/>
        {filterBooking.length===0?(
            <p>No Bookings Found</p>):
        (filterBooking.map((booking) =>(<div className="history-card" key={booking.id}>

    <div className="ticket-details">
        <div>
            <span>Name:</span>
            <h4>{booking.name}</h4>
        </div>

        <div>
            <span>Journey Date:</span>
            <h4>{booking.date}</h4>
        </div>

        <div>
            <span>Contact:</span>
            <h4>{booking.contact}</h4>
        </div>

        <div>
            <span>Age:</span>
            <h4>{booking.age}</h4>
        </div>

        <div>
            <span>From:</span>
            <h4>{booking.from}</h4>
        </div>

        <div>
            <span>To:</span>
            <h4>{booking.to}</h4>
        </div>

        <div>
            <span>Coach Type:</span>
            <h4>{booking.type}</h4>
        </div>

        <div>
            <span>Tickets:</span>
            <h4>{booking.tickets}</h4>
        </div>
    </div>
     <button  className="deletebtn" onClick={()=>handleEdit(booking)}>Edit</button>
    <button
        className="deletebtn"
        onClick={() => deleteBooking(booking.id)}
    >
        Cancel Ticket
    </button>

</div>
    ))
)}   
    </div>
);
}
export default History;