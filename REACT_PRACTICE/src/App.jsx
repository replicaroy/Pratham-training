import { useState } from 'react'
import './App.css'
// import Card from './components/PRACTICE/Card'
// import UserCard from './components/PRACTICE/UserCard'
// import CompA from './components/PRACTICE/CompA'
// import CompB from './components/PRACTICE/CompB'
// import FetchData from './components/PRACTICE/FetchData'
// import ControlledForm from './components/PRACTICE/ControlledForm'
// import UncontrolledForm from './components/PRACTICE/UncontrolledForm'
// import SampleForm from './components/PRACTICE/SampleForm'
// import Todo from './components/PRACTICE/Todo'
// import UserCards from './components/UserCards'
// import DynamicSelect from './components/DYNAMIC-PROPS/DynamicSelect'
// import SelectHome from './components/DYNAMIC-PROPS/SelectHome'
import { useCounter } from './components/CUSTOM-HOOK/useCounter'
import Form from './components/CUSTOM-HOOK/Form'
// import {Form} from './components/CUSTOM-HOOK/Form'


function App() {
  const [text, setText] = useState('lorem ipsum .....')
  const [user, setUser] = useState()
  const [counter, setCounter] = useState(0)

const {counts, increment, decrement, increasebyFive, decreasebyFive} = useCounter();
//   const [user, setUser] = useState([
//     { name: 'ramu',  age: '20',  gender: 'male'   },
//     { name: 'ajay',  age: '25',  gender: 'male'   },
//     { name: 'seema',  age: '19',  gender: 'female'   },
//  ] )


const users = [
  { name: 'ramu', age: '21', gender: 'male' },
  { name: 'seema', age: '20', gender: 'female' },
  { name: 'ajay', age: '23', gender: 'male' },
];



return (
  <>
     {/* <Card text={text} changeText ={changeText} /> */}
     {/* {user.map((user, index)=> {
        return <UserCard user={user}  />
        })} */}

     {/* <button onClick={()=> setUser({name: 'ramu', age: '21', gender: 'male'})} >user1</button>
     <button onClick={()=> setUser({name: 'seema', age: '20', gender: 'female'})} >user1</button>
     <button onClick={()=> setUser({name: 'ajay', age: '23', gender: 'male'})} >user1</button> */}
     {/* <UserCard user={user}/> */}
     {/* {user && users.map((u, i) => (
       <button key={i} onClick={() => setUser(u)}>User {i + 1}</button>
     ))} */}
{/* {counter>5 ?  <CompA/> :<CompB/> } */}
     {/* <button onClick={()=> setCounter(counter + 1)} >User1</button>
     <button onClick={()=> setCounter(counter - 1)} >User1</button>    */}

{/* <FetchData/> */}
{/* <ControlledForm/> */}
{/* <UncontrolledForm/> */}
{/* <SampleForm/> */}
{/* <Todo/> */}
{/* <UserCards/> */}
{/* <Home/> */}
{/* <DynamicSelect/> */}
{/* <SelectHome/> */}
<Form/>


{/* <h1>{counts}</h1>
<button onClick={increment}>increase</button>
<button onClick={decrement}>decrease</button> */}

</>

    

  )
}

export default App
