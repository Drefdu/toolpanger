'use client'

import { useState } from "react"
import SingInCard from "@/components/sign-in-card"
import SignUpCard from "@/components/sign-up-card"

export default function AuthForms() {
  const [tab, setTab] = useState('login');

  const changeTab = (tab: string) => {
    setTab(tab)
  }

  return <div className="size-full flex justify-center items-center">
    { tab == 'login' ? <SingInCard changeTab={changeTab}/> : <SignUpCard changeTab={changeTab} /> }
  </div>
}