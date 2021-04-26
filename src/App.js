import './home.css';




function App() {
  return (
    <div className = 'background'>
      <h1>Jason Thulen</h1>
        <div className = 'aboutMe'>
          <h2>About Jason</h2>
          <p className = 'aboutMeText'> 
              Growing up with a love for electornics and videogames it's suprising I've 
              taken this long to persue my dream. Completeing a full immersive bootcamp
              at General Assembly has given me a lot of tools I have on display. I'm always 
              looking to improve on or work on a project wither it be my own or a groups.  
          </p>
        </div>
      <h1>Projects</h1>
      <h2 className = 'evening'>Evening of the Dead</h2>
        <div className = 'projects'>
          <div className = 'zombies'>
            <button className = 'zombtn'>Evening of the Dead</button>
              <div className = 'zomContent'>
                <p className = 'zombieP'>
                  Using JavaScript, CSS, and HTML I created a dodge the falling 
                  objects game. It has  zombie theme to it and I did the art work
                  myself.
                </p>
              </div>
          </div>
          <div className = 'ageOfEmpiresTwo'>
            <button className = 'empirebtn'>Age of Empires Helper Tree</button>
            <div className = 'empireContent'>
              <p className = 'empireP'>
                We Shall Conquor all!!!
              </p>
            </div>
          </div>
          <div className = 'game-overflow'>
            <button className = 'gamebtn'>Game Over Flow</button>
            <div className = 'gameContent'>
              <p className = 'gameP'>
                Games are life. Life is games. 
              </p>
            </div>
          </div>
          <div className = 'a-nice-walk'>
            <button className = 'walkbtn'>A Nice Walk</button>
            <div className = 'walkContent'>
              <p className = 'walkP'>
                For a final project I chose to make a first person experience. Using unity and C# I was
                able to create an experience allowing player to move, look, duck, sprint, jump, and interact with 
                some objects. 
              </p>
            </div>
          </div>
    </div>
          <div className = 'languages-frameworks'>
            <h2>Languages and Frameworks</h2>
              <div className = 'learnered'>
                <p>JavaScript, HTML, CSS, React, Mongo, C#, Express, Postgres, express, unity,  </p>
              </div>
          </div>
    <footer>
      <p> Links to my Linkedin page and my Github page</p>
    </footer>
  </div>
  );
}

export default App;
