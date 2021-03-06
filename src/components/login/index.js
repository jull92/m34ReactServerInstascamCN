import {useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
import {createUser, login, tokenLogin} from "../../utils"
import '../../App.js'

export const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);


  useEffect(() => {
    if (localStorage.key("myToken")) {
        tokenLogin(setUser);
      }
    }, [setUser]);

  const submitHandler = (e) => {
    // console.log(bool);
    e.preventDefault();
      // setUser({username:username, email: email, pass:pass});
    if (bool) {
      login(username, pass, setUser)
    } else {
      if (email && email.includes("@")) {
        createUser(username, email, pass, setUser);
      }
  };

  return (
    // mine
    //   <div className="Login">
    //     <div className="title"><h1>InstaScam</h1></div>
    //     <form onSubmit={submitHandler}>
    //       <input className="input" onChange={(event) => setUsername(event.target.value)} placeholder="username"/>
    //       {/* if bool is false then something will happen (conditional rendering) */}
    //       {!bool && <input className="input" onChange={(event) => setEmail(event.target.value)} placeholder="email" type="email"/>}
    //       <input className="input" onChange={(event) => setPass(event.target.value)} placeholder="password" type="password"/>
    //       <button type="submit">Submit</button>
    //     </form>
    //     <button className="logSign" onClick={() => setBool(!bool)}>Log in or Sign up</button>
    //   </div>
    // );
// Andy's
    <div>
      {user && <Navigate to="/home" />}
      <div class="formContainer" onSubmit={submitHandler}>
        <input 
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          />
          {!bool && (
            <input onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
          />
          )}
        <input 
          onChange={(event) => setPass(event.target.value)}
          placeholder="Password"
          type="password"
          />
          <button type="submit">Submit</button>          
      </div>
      <button onClick={() => setBool(!bool)}>Log in or Sign up</button>
    </div>
  )};
};