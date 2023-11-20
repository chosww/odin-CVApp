import './App.css'
import General from './Components/General'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Main from './Components/Main'
import { useState } from 'react'

function App() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [educations, setEducations] = useState([]);

  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [experience, setExperience] = useState('');

  
  function handleAddEducation(e) {
    e.preventDefault();
    setEducations([... educations, <Education schoolName={schoolName} studyTitle={studyTitle} experience={experience} />]);
  }

  function handleTextFieldChange(e) {
    switch(e.target.id) {
      case ('school_name'):
        setSchoolName(e.target.value);
        break;
      case ('study_title'):
        setStudyTitle(e.target.value);
        break;
      case ('experience'):
        setExperience(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="sidebar">
        <General name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} address={address} setAddress={setAddress}/>
        <form onSubmit={handleAddEducation}>
          <label htmlFor='school_name'>School Name</label>
          <input id='school_name' name='school_name' type='text' value={schoolName} onChange={handleTextFieldChange}/>
          <label htmlFor='study_title'>Study Title</label>
          <input id='study_title' name='study_title' type='text' value={studyTitle} onChange={handleTextFieldChange} />
          <label htmlFor='experience'>Experience</label>
          <input id='experience' name='experience' type='text' value={experience} onChange={handleTextFieldChange} />
          <button>Create Education</button>
        </form>
        <Experience />
      </div>
      <div className="mainCV">
        <Main name={name} email={email} phone={phone} address={address} educations={educations}/>
      </div>
    </>
  )
}

export default App
