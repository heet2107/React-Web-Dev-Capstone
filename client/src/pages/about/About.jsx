import "./About.css";

export default function Header() {
  return (
    <div>
        <div className="head">
            <div className="headTitles">
                <span className="headTitle">ABOUT US</span>
            </div>
        <img
            className="headImg"
            src="https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
        <img
            className="headImg"
            src="https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
        <img
            className="headImg"
            src="https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
        />
        </div>
        <p className="aboutDesc">The Adventurous Traveller is more than a website. We are a community of adrenaline enthusiasts who like to share wisdom and experiences. We are here to help you to plan your next awesome holiday. We created this blog to share with you the most beautiful and adventurous places and stunning holiday destinations which we visited during our travels. We are REAL people, with REAL experiences to share. Any writers here are not simply hired guns from a content service; they are genuine adventure junkies who can write! We want to see others succeed in this industry and experience the same level of freedom that blogging has given us, which is why we’re sharing the tried and tested strategies that we perfected throughout our journey.</p>
    </div>
  );
}