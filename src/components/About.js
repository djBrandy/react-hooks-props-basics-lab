import React from "react";

function About(bio) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio.bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <a href='https://github.com/liza'>{bio.github} </a>
      <a href='https://www.linkedin.com/in/liza/'>{bio.linkedin} </a>
      
      
    </div>
  );
}

export default About;






