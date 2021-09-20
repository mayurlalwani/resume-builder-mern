import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import ResumePage from "./components/screens/ResumePage/ResumePage";
import SharedNotes from "./components/screens/SharedNotes/SharedNotes";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import ProfilePage from "./components/screens/ProfilePage/ProfilePage";
import RegisterPage from "./components/screens/RegisterPage/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/resume" component={() => <ResumePage />} />
        <Route path="/sharednotes" component={() => <SharedNotes />} />
      </main>
    </BrowserRouter>
  );
};

export default App;
