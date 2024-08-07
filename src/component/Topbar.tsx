"use client"
import "@/component/Topbar.css"

import Image from "next/image"
import Link from "next/link"

import { useRouter } from "next/navigation"

export default function Topbar() {

  const Route = useRouter()

  return (
    <div className="Topbar_Main_Div">

        <div className="Link_Group left">

            <Link className="Link" href={'/whoweare'}>Who We Are</Link>
            {/* <Link className="Link" href={'/whatwedo'}>What We Do</Link> */}

        </div>


        <div className="Middle_div">

            <Image className="Logo" onClick={()=>{Route.push('/')}} src={require("@/media/Logo.jpg")} width={100} alt="Logo"/>
            <Link className="Link" href={'/news'}>News</Link>

        </div>
        

        <div className="Link_Group right">
          <Link className="Link" href={'/whatwedo'}>What We Do</Link>
            {/* <Link className="Link" href={'/joinus'}>Join Us</Link> */}
            {/* <Link className="Link" href={'/donate'}>Donate</Link> */}
            {/* <Link className="Link" href={'/'}>Eng</Link> */}

        </div>

    </div>
  )
}
