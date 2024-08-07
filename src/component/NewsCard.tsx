import Image from "next/image"
import '@/component/NewsCard.css'

export default function NewsCard({imageUrl = "",h = 27,Name = '',Date = ''}) {
  return (
    <div className="NewsCard_Main_Div" >

        <Image className="img" style={{height:`${h}vh`}} alt="" src={require(`@/media/photos/${imageUrl}`) }/>

        <div className="info">

            <h2>{Name}</h2>

            <h3>{Date}</h3>

        </div>

    </div>
  )
}
