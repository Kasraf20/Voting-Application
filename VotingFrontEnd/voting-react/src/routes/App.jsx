import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { userDetailAction } from "../store/userDetailSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('voting_token')) dispatch(userDetailAction.userLogin())
  })
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
