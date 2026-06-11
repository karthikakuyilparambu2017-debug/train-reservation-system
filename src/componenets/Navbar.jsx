import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/trains">Train</Link> | {" "}
            <Link to="/booking">Ticket Booking</Link> | {" "}
            <Link to="/history">Ticket History</Link> | {" "}
            <Link to="/dashboard">Dashboard</Link> | {" "}
        </nav>
    );
}
export default Navbar;