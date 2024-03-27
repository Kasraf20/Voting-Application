import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userDetailAction } from '../store/userDetailSlice'

export default function Header() {
  const {login} = useSelector(store => store.userDetail)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('voting_token')
    localStorage.removeItem('voting_id')
    dispatch(userDetailAction.emptyUserData())
    dispatch(userDetailAction.userLogout())
    navigate('/')
  }

  return (
    <div className='w-screen py-3 bg-[#334155] flex justify-center items-center gap-4 text-xl md:text-lg sm:text-sm text-[#e2e8f0]'>
        <Link className='hover:text-[#f8fafc]' to='/'>Home</Link>
        {!login ? <Link className='hover:text-[#f8fafc]' to='/signin'>Signin</Link> : <Link className='hover:text-[#f8fafc]' to="/profile">Profile</Link>}      
        {!login ? '' : <button className='hover:text-[#f8fafc]' onClick={handleLogout}>Logout</button>}
    </div>
  )
}
