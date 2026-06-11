function Dashboard({bookings}){
    const totalTrains=3;
    const totalBookings=bookings.length;
    const routes = [
        "Palakkad → Kochi",
        "Palakkad → Kannur",
        "Palakkad → Mangalore"
    ];
    return(
    <div className="dashboard-container">
        <h1 className="dashboard-title">Train Reservation Dashboard</h1>
        <div className="dashboard-grid">
            <div className="dashboard-card">
                <h3>Total Train</h3>
                <p>{totalTrains}</p>
            </div>
            <div className="dashboard-card">
                <h3>Total Bookings</h3>
                <p>{totalBookings}</p>
            </div>
            <div className="dashboard-card">
                 <h3>Available Routes</h3>
                    <p>{routes.length}</p>
            </div>
        </div>
        <div className="route-section">
            <h3>Routes</h3>
           <ul>
            {routes.map((route,index)=>(
                <li key={index}>{route}</li>
            ))}
           </ul>
        </div>
    </div>
    );
}
export default Dashboard;