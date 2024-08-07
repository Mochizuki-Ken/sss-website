"use client"
import "@/app/whatwedo/page.css"
import  Carousel  from "@/component/Carousel";
import Link from "next/link";

export default function Whatwedo() {
  return (
    <main className="WhatWeDo_Main flex_column_jc_center_ai_center">

        <h1 className="page_title">What We Do</h1>

        <div className="carousel_area">
          <Carousel mode={0}/>
        </div>

        <div className="intro flex_column_jc_center_ai_center">
          <p>
            我們會定期發於社交媒體放一些健康資訊及舉行活動,講座加強長者的健康意識.<br/>
            同時我們也會為社會作出貢獻，例如向長者街坊派發飯盒等等.
          </p>
          <Link className="Link" href={"news"}>更多活動資訊</Link>
        </div>

        <div className="vision flex_column_jc_center_ai_st">

          <h1>願景</h1>
          <p>
            我們希望可以讓基層的老人家也可以建立好良好的健康意識以及獲得應有的醫療資源,<br/>
            為改善社會資源分配不均進一分力
          </p>

        </div>

    </main>
  )
}
