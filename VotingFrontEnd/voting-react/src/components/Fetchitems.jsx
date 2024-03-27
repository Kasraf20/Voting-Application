import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDetailAction } from "../store/userDetailSlice";
import ShowUserProfile from "./ShowUserProfile";
import axios from "axios";
import Loading from "./Loading";

const FetchItems = () => {
  const user = useSelector((store) => store.userDetail);
  const dispatch = useDispatch();

  const getUserData = () => {
    const userData = user.userData
    if(user.fetchDone && 'name' in userData) return
    const id = localStorage.getItem("voting_id");
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((result) => {
        dispatch(userDetailAction.addUserDetail(result.data))
        dispatch(userDetailAction.checkFetchDone())        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData()      
  },[])

  return (
    <>
      {!user.fetchDone ? <Loading/> : <ShowUserProfile/>}
    </>
    
  )
};

export default FetchItems;
