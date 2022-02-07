import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Classes from "./layout/Layout.module.css";
import SideBar from "./components/sideBar/SideBar";
import Flex from "./components/ui/flex/Flex";
import App_Routes from "./App_Routes";
import Hamburger from "./components/Hamburger/Hamburger";
function App() {
  const [show, setshow] = useState(false);
  const [AuthUser, UpdateUser] = useState(
    JSON.parse(localStorage.getItem("User")) || null
  );
  const [isUser, setUser] = useState(localStorage.getItem("isUser") || false);

  /**
   * onAuthStateChanged will check for the state of the Auth
   * if @user logIn then UpdateUser(user) && setUser(true)
   * else @user is logOut setUser(false) & UpdateUser(null)
   */
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      localStorage.setItem("User", JSON.stringify(user));
      localStorage.setItem("isUser", true);
      UpdateUser(user);
      setUser(true);
    } else {
      localStorage.setItem("User", null);
      localStorage.setItem("isUser", false);
      UpdateUser(null);
      setUser(false);
    }
  });

  return (
    <main>
      <BrowserRouter>
        <Flex className="f-start">
          <Hamburger show={show} setshow={setshow} />
          <section
            className={Classes.Right_Layout}
            style={{ transform: show && "translateX(0)" }}
          >
            <SideBar AuthUser={AuthUser} isUser={isUser} />
          </section>
          <section className={Classes.Left_Layout}>
            <App_Routes AuthUser={AuthUser} isUser={isUser} />
          </section>
        </Flex>
      </BrowserRouter>
    </main>
  );
}

export default App;
