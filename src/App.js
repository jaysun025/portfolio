import logo from './logo.svg';
import './home.css';

function App() {
  return (
    <div className = 'background'>
    <header>
      <h1>Jason Thulen</h1>
    </header>
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
          <p>
              Using javascript, html, and css I created a dogde the falling objects game, with a zombie theme.
              I also made the background and zombies plus the character you control. Drew them using microsoft
              paint(you totaly can't tell). A big undertaking but one of my proudest achievements. 
          </p>
    </div>
    <div className = 'ageOfEmpiresTwo'>
        <h2>Age of Empires Helper Tree</h2>
          <p>
              One game that I play with my friends is called Age Of Empires. A real time stragety game where
              you build up a civilization through the ages and try to conqure your enemies.
              I'm very bad at RTS's (real time stragety) games so I made a helpful tool to help 
              me reach the tools and civilization I want. 
          </p>
    </div>
    <div className = 'project-three'>
        <h2>Game Over Flow</h2>
          <p>
            A group project I was apart of, I worked mostly on the front end using CSS and
            React to build out the pages. The website is a place for gamers to go and 
            converse about diffecult areas in a game and help one another.  
          </p>
    </div>
    <div className = 'project-four'>
        <h2>A Nice Walk</h2>
          <p>
            My final project, also the one I'm most proud of. Using the unity engine 
            with C# I was able to make the starting screen and a playable first person
            experience. Very basic but still made with lots of love. 
           </p>
    </div>
    </div>
      <footer>
        <p> A link to my linkedin github and maybe email should double check with rachel</p>
      </footer>
    </div>
  );
}

export default App;
