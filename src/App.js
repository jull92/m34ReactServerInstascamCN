
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./components/login"
import {Home} from "./components/home"
import { tokenLogin } from "./utils";
import './App.css';

const App= () => {
  const [user, setUser] = useState();
  // what useState looks like
  // const useState = (initialVal) => {
  //   let state = initialVal;
  //   const setState = (newVal) => {
  //     state = newVal
  //   }
  // };
  // return [state, setState];
  useEffect(() => {
    if (user) {
      localStorage.setItem("myToken", user);
      tokenLogin(setUser);
    };
    // console.log(user.token);
    // localStorage.setItem("myToken", user.token);
    // tokenLogin(setUser);
  }, [user]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
