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
        <div className = 'projects'>
          <div className = 'zombies'>
          <h2 className = 'evening'>Evening of the Dead</h2>
            <button className = 'zombtn'>Evening of the Dead</button>
              <div className = 'zomContent'>
                <p className = 'zombieP'>
                  Using JavaScript, CSS, and HTML I created a dodge the falling 
                  objects game. It has  zombie theme to it and I did the art work
                  myself.
                  <a href ='https://evening-of-the-dead.netlify.app/' target = '_blank' rel = 'noreferrer'>See how long you can last.</a>
                </p>
              </div>
          </div>
          <div className = 'ageOfEmpiresTwo'>
          <h2 className = 'aoe'>Age of Empires Helper Tree</h2>
            <button className = 'empirebtn'>Age of Empires Helper Tree</button>
            <div className = 'empireContent'>
              <p className = 'empireP'>
                My first full-stack application using a Heroku API. I wanted to make a help guide so I 
                could play Age of Empires 2 better. It helps you find your favorite types of units or tech and save
                them to a favorites list. 
                <a href = 'https://aoe-favs.herokuapp.com/profile' target = '_blank' rel = 'noreferrer'>Find your favorites.</a>
              </p>
            </div>
          </div>
          <div className = 'game-overflow'>
            <button className = 'gamebtn'>Game Over Flow</button>
            <div className = 'gameContent'>
              <p className = 'gameP'>
                My first group project, my main focus was the front end design. Working together we made a full 
                stack website. The main focus is a group chat/help center where you can find others to help
                you get through tough spots in a game your playing. Or if you just want to chat about games you love
                and make new friends. It's still very much a work in progress. 
              </p>
            </div>
          </div>
          <div className = 'a-nice-walk'>
            <h2 className = 'niceWalk'>A Nice Walk</h2>
            <button className = 'walkbtn'>A Nice Walk</button>
            <div className = 'walkContent'>
              <p className = 'walkP'>
                For a final project I chose to make a first person experience. Using Unity and C# I was
                able to create an experience allowing player to move, look, duck, sprint, jump, and interact with 
                some objects. 
              </p>
            </div>
          </div>
    </div>
          <div className = 'languages'>
            <h2>Languages & Frameworks</h2>
              <div className = 'learnered'>
                <p>JavaScript, HTML, CSS, React, Mongo, C#, Express, Postgres, express, unity,  </p>
              </div>
          </div>
    <footer>
      <a href = 'https://www.linkedin.com/in/jason-thulen/' target = '_blank' rel = 'noreferrer' className = 'link'>My Linkedin Account</a>
      <break />
      <a href = 'https://github.com/jaysun025' target = '_blank' rel = 'noreferrer' className = 'github'>My GitHub Account</a>
    </footer>
  </div>
  );
}

export default App;
