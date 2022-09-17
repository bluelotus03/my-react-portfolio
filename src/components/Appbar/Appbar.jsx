import "./Appbar.css";

export function Appbar() {
  return (
    <header>
      <div className="headerContent">
        <span className="headerName">Ashley Harmon</span>
        <div className="navLinks">
          <a href="#Home">About</a>
          <a href="#Websites">Web</a>
          <a href="#Games">Games</a>
          <a href="#Misc">Misc</a>
          <a href="#Workshops">Workshops</a>
        </div>
      </div>
    </header>
  );
}
