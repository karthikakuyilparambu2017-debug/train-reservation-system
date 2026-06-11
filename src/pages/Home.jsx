import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Left Side */}
      <div className="home-content">
        <h1>Train  Reservation System</h1>

        <h2>Travel Smart, Travel Easy</h2>

        <p>
          Book train tickets online in a few simple steps. Search trains,
          check seat availability, reserve tickets, and manage your journey
          from anywhere. Enjoy a fast, secure, and convenient booking
          experience with our modern reservation platform.
        </p>

        <Link to="/trains">
          <button className="btn">Book Ticket</button>
        </Link>

        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>Indian Railway Reservation Service</p>
          <p>Railway Station Road, New Delhi</p>
          <p>+91 9876543210</p>
          <p>support@trainbooking.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
          alt="Train"
        />
      </div>

    </div>
  );
}

export default Home;