function Navbar({ profile }) {
  const name = profile?.name || "Yasin Sazid";
  return (
    <nav className="navbar">
      <h2>✦ {name}</h2>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Interests</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
