
import { useSearchParams, Link } from 'react-router-dom';


const Dashboard = () => {
  const [searchParams] = useSearchParams();

  // const firstname = searchParams.get('firstname');
  // const lastname = searchParams.get('lastname');
  // const email = searchParams.get('email');
  // const password = searchParams.get('password');
  // const confirmpassword = searchParams.get('confirmpassword');
  // const age = searchParams.get('age');
  // const gender = searchParams.get('gender');
  // const intrest = searchParams.get('intrest'); 
  // const role = searchParams.get('role'); 
  const userParam = {
    firstname : searchParams.get('firstname'), 
    lastname : searchParams.get('lastname'),
    email : searchParams.get('email'),
    password : searchParams.get('password'),
    confirmpassword : searchParams.get('confirmpassword'),
    age : searchParams.get('age'),
    gender : searchParams.get('gender'),
    intrest : searchParams.get('intrest'),
    role : searchParams.get('role')  
  }

  // console.log(firstname, lastname, email, password, confirmpassword, age, gender, intrest);

  return (
    <div style={{ display: 'flex',  justifyContent: 'center' , }}>
    <div style={{ padding: '20px', display: 'flex',  justifyContent: 'center' , flexDirection: 'column', 
      border: '1px solid #ccc', borderRadius: '5px', width: '300px', marginTop: '20px', gap:"10px" }}>
      <h2>Dashboard</h2>
      {Object.keys(userParam).map(key => (
        <p key={key}>
          <b>{key}</b> : {userParam[key]}
        </p>
      ))}
      {/* <p><b>First Name:</b> {firstname }</p>
      <p><b>Last Name:</b> {lastname }</p>
      <p><b>Email:</b> {email }</p>
      <p><b>Password:</b> {password }</p>
      <p><b>Confirm Password:</b> {confirmpassword }</p>
      <p><b>Age:</b> {age }</p>
      <p><b>Gender:</b> {gender }</p>
      <p><b>Interest:</b> {intrest }</p>
      <p><b>Role:</b> {role }</p> */}
    </div>
    {/* <nav style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav> */}
    </div>
  );
};

export default Dashboard;
