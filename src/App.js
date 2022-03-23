
import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./components/login"
import {Home} from "./components/pages/home"
import { Settings } from "./components/pages/settings";
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
  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("myToken", user);
  //     tokenLogin(setUser);
  //   };
  //   // console.log(user.token);
  //   // localStorage.setItem("myToken", user.token);
  //   // tokenLogin(setUser);
  // }, [user]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/settings" element={<Settings setUser={setUser} user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
