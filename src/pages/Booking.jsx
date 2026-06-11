import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking({ bookings, setBookings ,edit,setEditing}) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [type, setType] = useState("");
    const [tickets, setTickets] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(edit){
        setName(edit.name)
        setAge(edit.age)
        setContact(edit.contact)
        setFrom(edit.from)
        setTo(edit.to)
        setDate(edit.date)
        setTickets(edit.tickets)
        setType(edit.type)
        }
    },[edit]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Please enter passenger name");
            return;
        }

        if (!contact.trim()) {
            alert("Please enter contact number");
            return;
        }

        if (!age.trim()) {
            alert("Please enter age");
            return;
        }

        if (!from.trim()) {
            alert("Please enter departure station");
            return;
        }

        if (!to.trim()) {
            alert("Please enter destination station");
            return;
        }

        if (!type.trim()) {
            alert("Please select coach type");
            return;
        }

        if (!tickets.trim()) {
            alert("Please enter number of tickets");
            return;
        }

        if (!date) {
            alert("Please select journey date");
            return;
        }
        if(edit){
            const editing=bookings.map(
                (booking)=>booking.id===edit.id ?{
                    ...booking,
                    name:name.trim(),
                    age:age.trim(),
                    contact:contact.trim(),
                    from:from.trim(),
                    type:type.trim(),
                    to:to.trim(),
                     date:date.trim(),
                     tickets:tickets.trim(),
                }
                :booking
            );
            setBookings(editing);
            setEditing(null);
        } else{
        const newBooking = {
            id: Date.now(),
            name,
            contact,
            age,
            from,
            to,
            type,
            tickets,
            date,
        };
        setBookings([...bookings, newBooking]);
    }
        

        navigate("/history");
    };

    return (
        <div className="booking-container">
            <div className="booking-card">
                <h1>Train Ticket Booking</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Passenger Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="From Station"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="To Station"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Coach Type</option>
                        <option value="Sleeper">Sleeper</option>
                        <option value="AC 3 Tier">AC 3 Tier</option>
                        <option value="AC 2 Tier">AC 2 Tier</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Number of Tickets"
                        value={tickets}
                        onChange={(e) => setTickets(e.target.value)}
                    />

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button type="submit">
                        {edit ?"update Booking":" Room book"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Booking;