import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo"></div>
      </Link>
    </nav>
  );
};

export default Navbar;