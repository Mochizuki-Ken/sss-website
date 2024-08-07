import Image from "next/image"
import "@/component/Info/PersonProfile.css"

export default function PersonProfile({ ImageUrl = "" , Name = "" , Intro = "" }) {
  return (
    <div className="PersonProfile_Main_Div">

        <Image className="img" src={require(`@/media/profiles/${ImageUrl}`)} alt="" />
        <h2>{Name}</h2>
        <h3>{Intro}</h3>

    </div>
  )
}
