import {useState} from "react";
import {createUser, login} from "../../utils"

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

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
      }
  };

  return (
      <div className="Login">
        <div className="title"><h1>InstaScam</h1></div>
        <form onSubmit={submitHandler}>
          <input className="input" onChange={(event) => setUsername(event.target.value)} placeholder="username"/>
          {/* if bool is false then something will happen (conditional rendering) */}
          {!bool && <input className="input" onChange={(event) => setEmail(event.target.value)} placeholder="email" type="email"/>}
          <input className="input" onChange={(event) => setPass(event.target.value)} placeholder="password" type="password"/>
          <button type="submit">Submit</button>
        </form>
        <button className="logSign" onClick={() => setBool(!bool)}>Log in or Sign up</button>
      </div>
    );
};