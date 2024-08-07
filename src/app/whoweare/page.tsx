"use client"
import Image from "next/image"
import "@/app/whoweare/page.css"
import PersonProfile from "@/component/Info/PersonProfile"

export default function Whoweare() {
  return (
    <main className="WhoWeAre_Main flex_column_jc_center_ai_center">

        <h1 className="page_title">Who We Are</h1>

        <div className='logo_area flex_row_jc_center_ai_center'>

            <Image src={require("@/media/Logo.jpg")} alt="" className="Logo_Img"/>

            <div className='basic_intro_div flex_column_jc_center_ai_center'>

                <h1>衛誠護動 - 3S</h1>

                <h2>Seamless <br/> Seek <br/> Serve</h2>

            </div>

        </div>

        <div className="intro flex_column_jc_center_ai_center">

            <p>
            「衛誠護動」是一家於2023年成立的非營利性慈善機構,專注於為長者提供全面的健康資訊和支援服務。<br/>我們的宗旨是透過教育、倡導和社區合作,幫助老年人掌握維護身心健康的知識和技能。<br/>
我們的團隊由專業醫療、社會工作和教育等領域的專家組成,致力於開發切合長者需求的健康資源和活動。<br/>我們相信,只要長者擁有正確的健康知識和可靠的支援系統,他們就能夠保持最佳的身心狀態,過上更健康、更獨立的生活。<br/>
            </p>

        </div>

        <div className="Founders_Div flex_column_jc_center_ai_center">

            <h2>創辦人</h2>

            <div className="row flex_row_jc_center_ai_center" style={{gap:"20px"}}>
                {/* <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" /> */}
                <PersonProfile ImageUrl="1.jpg" Name="Audrey" Intro="透過香港多元化的社區，我想回饋給有需要的人。無論是老年人還是年輕人，Seamless Seek and Serve 旨在貢獻時間、資源和專業知識，幫助在教育、醫療保健和社會福利等社區產生正面影響。創立和領導這個慈善機構已成為我最自豪的成就之一，我希望我能透過未來的工作來幫助和激勵他人。." />
                {/* <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" /> */}
            </div>

        </div>

        {/* <div className="Founders_Div flex_column_jc_center_ai_center">

            <h2>各界支持人士</h2>

            <div className="row flex_row_jc_center_ai_center" style={{gap:"20px"}}>
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
            </div>

        </div>

        <div className="Founders_Div flex_column_jc_center_ai_center">

            <h2> 支持機構</h2>

            <div className="row flex_row_jc_center_ai_center" style={{gap:"20px"}}>
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
                <PersonProfile ImageUrl="1.jpg" Name="Steve Jobs" Intro="Founder" />
            </div>

        </div> */}

    </main>
  )
}

