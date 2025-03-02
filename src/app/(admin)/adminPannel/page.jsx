"use client"
import React from 'react'
import AdminDash from '../_components/AdminDash';
import '../../(client)/globals.css';
import { useSnapshot } from 'valtio';
import { state } from '../../../../store/store';
import { redirect } from 'next/navigation';

const AdminPannel = () => {
  // const {username, password, userStatus} = useSnapshot(state)
  const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const userStatus = localStorage.getItem('userStatus');

      console.log(username, password, userStatus)

  if(username===process.env.NEXT_PUBLIC_USERNAME&&password===process.env.NEXT_PUBLIC_PASSWORD && userStatus === "true"){

    return <AdminDash/>
  }
  else{
    redirect("/sign-in")
  }
}

export default AdminPannel