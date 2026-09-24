function Header() {
  return (
    <header className="header">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="profile-img" 
      />
      <h1>Привет, я [Ваше Имя]!</h1>
      <p className="subtitle">Full-Stack Developer / Student</p>
    </header>
  );
}

export default Header;