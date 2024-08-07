"use client"
import Image from "next/image";
import styles from "./page.module.css";
import '@/app/page.css'

import  Carousel  from "@/component/Carousel";
import PersonProfile from "@/component/Info/PersonProfile";
import Link from "next/link";

export default function Home() {
  return (
    <main className='Home_Main'>

      <div className='content_div flex_column_jc_strat_ai_center'>

        <div className="row0 flex_column_jc_center_ai_center">

          <h1 className="title">最新消息</h1>

          <Carousel mode={1}/>

          <div className="bottom_div flex_column_jc_center_ai_center">
            <Link className="Link" href={"/news"}>更多消息</Link>
          </div>

        </div>

        <div className='row1 flex_row_jc_center_ai_center'>

          <div className="left flex_row_jc_center_ai_center">

            <Image src={require("@/media/Logo.jpg")} alt="" className="Logo_Img"/>

            <div className='basic_intro_div flex_column_jc_center_ai_center'>

              <h1>衛誠護動 - 3S</h1>

              <h2>Seamless <br/> Seek <br/> Serve</h2>

            </div>

          </div>

          <div className="right flex_column_jc_center_ai_center">

            <p>
              衛誠護動成立於2023年
            </p>

            <div className="flex_row_jc_center_ai_center" style={{gap:'10px'}}>
              <Link className="Link" href={"/whoweare"}>Who We Are</Link>
              <Link className="Link" href={"/whatwedo"}>What We Do</Link>
            </div>

          </div>

          

        </div>

        <div className='row2 flex_column_jc_center_ai_center'>
          
          <h2 className="t">Founder</h2>

          <div className="row flex_row_jc_center_ai_center">

            {/* <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder"/> */}

            <PersonProfile ImageUrl="1.jpg" Name="Andrey" Intro="Founder"/>

            {/* <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder"/> */}

          </div>

        </div>

      </div>

    </main>
  );
}
