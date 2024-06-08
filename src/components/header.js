import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/regester" className="regester">
          Regester
        </Link>
        <Link to="/login" className="login">
          login
        </Link>
      </div>
      <div>
        <h6 className="home">Home</h6>
        <h6 className="about">About</h6>
      </div>
    </div>
  );
}
