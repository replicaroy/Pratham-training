import { useState } from 'react'
import Select from './components/dynamic-forms/Select'
import RadioButton from './components/dynamic-forms/RadioButton'
import Wrapper from './components/dynamic-forms/Wrapper';
import Checkbox from './components/dynamic-forms/Checkbox';

const INITIAL_SUBJECTS = ['Math', 'Science', 'History', 'Geography'];
const INITIAL_HOBBIES = ['Reading', 'Traveling', 'Cooking', 'Gaming'];
const INITIAL_GENDER =  ['Male', 'Female', 'Other'];
const INITIAL_ROLES = ['Admin', 'User', 'Guest'];
const INITIAL_GAMES = ['Cricket', 'football', 'Hockey'];
function App() {
  const [subjects, setsubjects] = useState(INITIAL_SUBJECTS);
  const [hobbies, setHobbies] = useState(INITIAL_HOBBIES);
  const [gender, setGender] = useState(INITIAL_GENDER) ;
  const [role, setRole] = useState(INITIAL_ROLES) ;
  const [game, setGame] = useState(INITIAL_GAMES) ;

  const [formData, setFormData] = useState({
    subject: '',
    hobby: '',
    gender: '',
    role: '' ,
    games: [] 
})
console.log(formData, 'formData')

  return ( 
  <>
<Wrapper>

  <Select 
  currentValue={formData.subject}
  optionsList={subjects}
  seletLabel="Select Subject"
  setData={updataedSubjects => setFormData({ ...formData, subject: updataedSubjects})}
  />
   <Select 
  currentValue={formData.hobby}
  optionsList={hobbies}
  seletLabel={"Select Hobbies"}
  setData={updatedHobbies => setFormData({ ...formData, hobby: updatedHobbies})}
  />    

<RadioButton
currentValue={formData.gender}
  optionsList={gender}
  setLabel={'select Gender'}
  name='gender'
  setData={updatedGender => setFormData({ ...formData, gender: updatedGender})}
/>
<RadioButton
currentValue={formData.role}
  optionsList={role}
  setLabel={'select role'}
  name='role'
  setData={updatedRole => setFormData({ ...formData, role: updatedRole})}
/>
{/* <Checkbox
currentValue={formData.games}
  optionsList={game}
  setLabel={'select Games'}
  name='Games'
  setData={updatedGames => setFormData({ ...formData, Games: updatedGames})}
/> */}
{/* <Checkbox
  currentValue={formData.games}
  optionsList={game}
  setLabel={'Select Games'}
  name='games'
  setData={updatedGames => setFormData({ ...formData, games: updatedGames })}
/> */}


</Wrapper>
</>
)
}

export default App
