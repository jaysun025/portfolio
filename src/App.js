import logo from './logo.svg';
import './home.css';

function App() {
  return (
    <div className = 'background'>
    <header>
      <h1>Jason's Portfolio</h1>
    </header>
    <div className = 'aboutMe'>
        <h2>About Jason</h2>
        <p className = 'aboutMeText'> 
            Just some place holder text. Want to make sure the gradiant is working
            like it is meant too or maybe I'm crazy. 
        </p>
    </div>
      <h1>Projects</h1>
    <div className = 'projects'>
    <div className = 'zombies'>
        <h2>Evening of the Dead</h2>
          <p>
              A dodge the falling objects game with a zombie theme with the child
              art done by yours truely. Use the arrow keys to move your survivor 
              back and for to dodge the zombies.
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
        <h2>Project 3</h2>
          <p>
            Something about project 3
          </p>
    </div>
    <div className = 'project-four'>
        <h2>Project 4</h2>
          <p>
            Coming Soon!!!
          </p>
    </div>
    </div>
    </div>
  );
}

export default App;
