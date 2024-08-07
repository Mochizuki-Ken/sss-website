"use client"
import "@/component/Footer.css"
import Image from "next/image"
import Link from "next/link"

import { CgMail } from "react-icons/cg";
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer_Main_Div">

      <div className="content_div">

        <div className="logo_title_div">

          <Image src={require("@/media/Logo.jpg")} alt="" className="Logo_Img"/>

          <div className='title_div'>

              <h2>衛誠護動 - 3S</h2>

              <h3>Seamless <br/> Seek <br/> Serve</h3>

          </div>

        </div>

        <div className="coloum2">

          <h1>Learn More</h1>

          <div className="links">

            <Link className="Link" href={''}>Who We Are</Link>
            <Link className="Link" href={''}>What We Do</Link>
            {/* <Link className="Link" href={''}>Join Us</Link>
            <Link className="Link" href={''}>Donate</Link> */}

          </div>

        </div>

        <div className="coloum3">

          <h1>Contact Us</h1>

          {/* <label>501 Kings Highway East, Suite 400, Fairfield, CT 06825 </label>

          <label>Main Office # 203.221.4000 | Mon-Fri 9:00am-5:00pm EST</label> */}

          <label className="social" ><CgMail className="icon"/>sss@gmail.com</label>

          <label className="social" onClick={ ()=>{window.open("https://www.facebook.com/profile.php?id=61562448733670","__blank")} }><FaFacebook className="icon"/>Facebook</label>

          <label className="social" onClick={()=>{window.open("https://www.instagram.com/seamless_seek__serve/","__blank")}}><FaInstagramSquare className="icon"/>Instagram</label>

        </div>

      </div>

      {/* <label className="bottom_text">© 2024 Save the Children Save the Children Federation, Inc. is a 501(c)(3) organization. Gifts are deductible to the full extent allowable under IRS regulations.</label> */}
        
    </div>
  )
}
