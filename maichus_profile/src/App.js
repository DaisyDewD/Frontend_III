
import State from './State';
import Header from './Header';
import Info from './Info';
import Avatar from './Avatar';
import Experience from './Experience';
import Education from './Education';
import Bio from './Bio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    <div class ="tarjeta"> 
      <Avatar avatar = {State.personalData.avatar}/>
      <div class ="State">
        <Info
        name={State.personalData.name}
        lastname={State.personalData.name}
        nationality={State.personalData.nationality}
        residence={State.personalData.residence}
        age={State.personalData.age}
        occupation={State.personalData.occupation}
        avatar={State.personalData.avatar}
        bio={State.bio}
        />
        <Education 
            title = "Education:"
            info={State.personalData.education}
        />
        <Experience 
            title = "Experience:"
            info={State.personalData.experience}
        />
        <Bio
            bio = {State.personalData.bio}
        />
         
    </div>
    </div>
    </div>
  );
}

export default App;
