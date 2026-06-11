 import { Link } from "react-router-dom";
 function TrainCard({train}){
    return(
        <div className="traincard">
            <h2>{train.trainName}</h2>
            <p>Train NO:{train.trainNo}</p>
            <p>From:{train.from}</p>
            <p>TO:{train.to}</p>
            <p>Departure:{train.departure}</p>
            <p>Arrival:{train.arrival}</p>
            <p>Fare: ₹{train.fare}</p>
            <Link to={`/train/${train.id}`}>
                <button className="details-btn">
                    View Details
                </button>
            </Link>
              <hr />
        </div>
    );
}
export default TrainCard;