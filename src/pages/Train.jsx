import { useState } from "react";
import TrainCard from "../componenets/TrainCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Train(){
    const [fromSearch,setFromsearch]=useState("");
    const [toSearch,setTosearch]=useState("");
    const [back,setBack]=useState("");
    const navigate=useNavigate();
    const trains=[
         {
    id: 1,
    trainNo: "12625",
    trainName: "Kerala Express",
    from: "Palakkad",
    to: "Kochi",
    departure: "08:00 AM",
    arrival: "11:30 AM",
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
    fare: 600
  }
    ];
    const [filteredTrain,setFilteredTrain]=useState(trains);
    const handleSearch=()=>{
        const result=trains.filter((train)=>
            train.from.toLowerCase()===fromSearch.toLowerCase()&&
        train.to.toLowerCase()===toSearch.toLowerCase()
    );
    setFilteredTrain(result);
    };
    navigate("/trains");
    
    return(
        <div className="traintime">
            <h2>Choose Your Train</h2>
            <div className="search-box">
            <input type="text" 
            placeholder="from"
             value={fromSearch} 
             onChange={(e)=>setFromsearch(e.target.value)}/>

             <input  type="text" 
            placeholder="To"
             value={toSearch} 
             onChange={(e)=>setTosearch(e.target.value)}/>
             <button  className="search-btn"onClick={handleSearch}>
                        Search Train
                      </button>
              
            </div>
            <div className="traincontent">
                {filteredTrain.length===0?(<p> No trains found for this route</p>):(
                filteredTrain.map((train)=>(
                 <TrainCard key={train.id}
                   train={train}/>
                )))}
                </div>
                <Link to="/"><button className="backbtn">Back</button></Link>  {" "}
        </div>
    );
}
export default Train;