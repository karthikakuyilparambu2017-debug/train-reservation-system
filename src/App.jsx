import { Routes,Route } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Train from "./pages/Train";
import Booking from "./pages/Booking";
import TrainDetails from "./pages/TrainDetails";
import History from "./pages/History";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useEffect, useState } from "react";
function App(){
  const [bookings,setBookings]=useState(()=>{
    const savedBooking=localStorage.getItem("bookings");
    return savedBooking?JSON.parse(savedBooking):[]
})
const [edit,setEditing]=useState(null);
useEffect(()=>{
  localStorage.setItem("bookings",JSON.stringify(bookings)
);
})
  return(
    <>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/trains" element={<Train/>}/>
            <Route path="/train/:id" element={<TrainDetails />} />
            <Route path="/booking" element={<Booking bookings={bookings} setBookings={setBookings} edit={edit} setEditing={setEditing}/>}/>
            <Route path="/history" element={<History bookings={bookings} setBookings={setBookings} onEdit={setEditing}/>}/>
            <Route path="/dashboard" element={<Dashboard bookings={bookings}/>}/>
     </Routes>

    </>

  );
}
export default App;