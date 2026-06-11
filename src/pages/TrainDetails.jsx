import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function TrainDetails(){
    const {id}=useParams();
     const trains = [
        {
            id: 1,
            trainNo: "12625",
            trainName: "Kerala Express",
            from: "Palakkad",
            to: "Kochi",
            departure: "08:00 AM",
            arrival: "11:30 AM",
            duration: "3 Hours 30 Minutes",
            seats: 120,
            coach: "Sleeper, AC 3 Tier, AC 2 Tier",
            fare: 450
        },
        {
            id: 2,
            trainNo: "16345",
            trainName: "Netravati Express",
            from: "Palakkad",
            to: "Kannur",
            departure: "09:30 AM",
            arrival: "01:00 PM",
            duration: "3 Hours 30 Minutes",
            seats: 90,
            coach: "Sleeper, AC 3 Tier",
            fare: 350
        },
        {
            id: 3,
            trainNo: "12617",
            trainName: "Mangala Express",
            from: "Palakkad",
            to: "Mangalore",
            departure: "10:00 AM",
            arrival: "03:00 PM",
            duration: "5 Hours",
            seats: 75,
            coach: "Sleeper, AC 3 Tier, AC 2 Tier",
            fare: 600
        }
    ];
    const train = trains.find(
        (train) => train.id === Number(id)
    );

    if (!train) {
        return <h2>Train Not Found</h2>;
    }
return (
        <div className="details-container">
            <div className="details-card">
                <h1>{train.trainName}</h1>
                <h3>Train Number: {train.trainNo}</h3>
                <p>From: {train.from}</p>
                <p>To: {train.to}</p>
                <p>Departure:{train.departure}</p>
                <p>Arrival: {train.arrival}</p>
                <p>Duration: {train.duration}</p>
                <p>Available Seats:{train.seats}</p>
                <p>Coach Types:{train.coach}</p>
                <p>Fare:₹{train.fare}</p>
                <Link to="/booking">
                    <button className="bt">
                        Book Ticket
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default TrainDetails;

