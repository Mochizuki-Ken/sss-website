"use client"
    //carousels/Bootstrap.js
import { useState } from "react";
import '@/component/Carousel.css'
// import styles from "../styles/Bootstrap.module.css";
import Image from "next/image";
import NewsCard from "./NewsCard";

export default function BootstrapCarousel({mode = 0}) {

    const n = [1,2,3,4]

    return (
        <div className="Carousel_Main_Div">
            {mode === 1 && n.map((e,i)=>{
                return <NewsCard key={i} imageUrl={`${e}.jpg`}/>
            })}

            {mode === 0 && n.map((e,i)=>{
                return <Image key={i} className="image" src={require(`@/media/photos/${e}.jpg`)} alt=""/>
            })}
            {/* <Image className="image" src={require("@/media/photos/1.jpg")} alt=""/>
            <Image className="image" src={require("@/media/photos/2.jpg")} alt=""/>
            <Image className="image" src={require("@/media/photos/3.jpg")} alt=""/>
            <Image className="image" src={require("@/media/photos/1.jpg")} alt=""/>
            <Image className="image" src={require("@/media/photos/2.jpg")} alt=""/>
            <Image className="image" src={require("@/media/photos/3.jpg")} alt=""/> */}
        </div>
      );
    }

