"use client"
import React, { useEffect, useState } from 'react'
import AdminDash from '../_components/AdminDash';
import '../../(client)/globals.css';
import { useSnapshot } from 'valtio';
import { state } from '../../../../store/store';
import { redirect } from 'next/navigation';

const AdminPannel = () => {
  const {username, password, userStatus} = useSnapshot(state)
const [userna, setUsername ] = useState("")
const [passwo, setPass ] = useState("")
const [userStat, setStatus ] = useState("")

useEffect(()=>{

  const UN = localStorage.getItem('username');
      const PASS = localStorage.getItem('password') ;
      const US = localStorage.getItem('userStatus') ;

      setUsername(UN)
      setPass(PASS)
      setStatus(US)
    },[])
    
    if((userna===process.env.NEXT_PUBLIC_USERNAME&&passwo===process.env.NEXT_PUBLIC_PASSWORD && userStat === "true")||((username===process.env.NEXT_PUBLIC_USERNAME&&password===process.env.NEXT_PUBLIC_PASSWORD && userStatus === true))){
    
      return <AdminDash/>
    }
    else{
      redirect("/sign-in")
    }


}

export default AdminPannel