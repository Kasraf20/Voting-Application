import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetailAction } from "../store/userDetailSlice";

export default function ShowUserProfile() {

  const {userData} = useSelector(store => store.userDetail)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    age: 0,
    phone: "",
    aadharNumber: "",
    address: "",
  });

  useEffect(() => {
    setValues(userData)
  },[userData])


  const handleName = (e) => {
    setValues((values) => ({
      ...values,
      name: e.target.value,
    }));
  };

  const handleAge = (e) => {
    setValues((values) => ({
      ...values,
      age: e.target.value,
    }));
  };

  const handlePhone = (e) => {
    setValues((values) => ({
      ...values,
      phone: e.target.value,
    }));
  };

  const handleAadharNum = (e) => {
    setValues((values) => ({
      ...values,
      aadharNumber: e.target.value,
    }));
  };

  const handleAddress = (e) => {
    setValues((values) => ({
      ...values,
      address: e.target.value,
    }));
  };

  const handleUpdate = () => {    
    const id = localStorage.getItem("voting_id");
    const token = localStorage.getItem('voting_token')
    axios
      .put(`http://localhost:8080/user/${id}`,values,{
        headers: {"Authorization" : `Bearer ${token}`}
      })
      .then((result) => {
        dispatch(userDetailAction.userUpdated(result.data))
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg border m-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <input
                type="text"
                name="floating_full-name"
                id="floating_full-name"
                defaultValue={userData.name}
                onChange={handleName}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <input
                type="text"
                name="floating_age"
                id="floating_age"
                defaultValue={userData.age}
                onChange={handleAge}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <input
                type="text"
                name="floating_phone"
                id="floating_phone"
                defaultValue={userData.phone}
                onChange={handlePhone}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Aadhar Number
              </dt>
              <input
                type="text"
                name="floating_aadharNum"
                id="floating_aadharNum"
                defaultValue={userData.aadharNumber}
                onChange={handleAadharNum}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <input
                type="text"
                name="floating_address"
                id="floating_address"
                defaultValue={userData.address}
                onChange={handleAddress}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <button
                onClick={handleUpdate}
                id="update-button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3 "
              >
                Update
              </button>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
