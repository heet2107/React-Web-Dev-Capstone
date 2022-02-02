import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"><Link className="link" to="/about">
              ABOUT US
            </Link>
          </span>
        <img
          
          src="https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      
        <p>
        <Link className="link" to="/about">
        We are here to help you to plan your next awesome holiday. We created this blog to share with you the most beautiful and adventurous places and stunning holiday destinations which we visited during our travels.
        </Link>
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/"><i className="topIcon fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/"><i className="topIcon fab fa-twitter-square"></i></a>
          <a href="https://www.pinterest.com/"><i className="topIcon fab fa-pinterest-square"></i></a>
          <a href="https://www.instagram.com/"><i className="topIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
