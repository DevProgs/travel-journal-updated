import Globe from '../images/globe.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Globe} alt="globe" className="navbar--globe"></img>
      <h1>my travel journal.</h1>
    </nav>
  );
};

export default Navbar;
