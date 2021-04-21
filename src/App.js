import logo from './logo.svg';
import './home.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'




function App() {
  return (
    <div className = 'background'>
      <h1>Jason Thulen</h1>
        <div className = 'aboutMe'>
          <h2>About Jason</h2>
          <p className = 'aboutMeText'> 
              Growing up with a love for electornics and videogames it's suprising I've 
              taken this long to persue my dream. Completeing a full emerisve bootcamp
              at General Assembly has given me a lot of tools I have on display. I'm always 
              looking to improve on or work on a project wither it be my own or a groups.  
          </p>
        </div>
      <h1>Projects</h1>
        <div className = 'projects'>
          <div className = 'zombies'>
            <h2>Evening of the Dead</h2>
              <div className = 'zomDrop'>
              </div>
          </div>
          <div className = 'ageOfEmpiresTwo'>
            <h2>Age of Empires Helper Tree</h2>
          </div>
          <div className = 'game-overflow'>
            <h2>Game Over Flow</h2>
          </div>
          <div className = 'a-nice-walk'>
            <h2>A Nice Walk</h2>
          </div>
    </div>
          <div className = 'languages-frameworks'>
            <h2>Languages and Frameworks</h2>
              <div className = 'learnered'>
                <p>JavaScript, HTML, CSS, React, Mongo, C#, Express, Postgres, </p>
              </div>
          </div>
    <footer>
      <p> A link to my linkedin github and maybe email should double check with rachel</p>
    </footer>
  </div>
  );
}

export default App;
