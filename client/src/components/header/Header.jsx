import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleSm">Adventurous</span>
        <span className="headerTitleLg">TRAVELLER</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
    </div>
  );
}
