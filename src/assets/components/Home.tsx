import React from "react";
import myPhoto from "../../assets/aplicationpic.png";

const Home: React.FC = () => {
  return (
    <div>
      <img src={myPhoto} alt="My Photo" width="200" />
      <h1>Hi, I'm Virtues John G. Layco</h1>
      <p>Web Developer</p>
    </div>
  );
};

export default Home;