import {React,useEffect,useState} from 'react'
import './Hero.css'
import profile_img from '../assets/profile_img.jpg'

const Hero = () => {

  //roles changing
  const roles=["Web Developer","Frontend Developer","ML Enthusiast"];
  const[currentRoleIndex,setcurrentRoleIndex]=useState(0);
  const [fadeOut,setfadeOut]=useState(false);

  const changeRole=()=>{
    setfadeOut(true);
    setTimeout(()=>{
      setcurrentRoleIndex((preIndex)=>(preIndex+1)%roles.length);
      setfadeOut(false);
    },500);
  };

  useEffect(()=>{
    const interval=setInterval(changeRole,2000);
    return ()=>clearInterval(interval)
  },[]);

  //resume download
  const handledownload=()=>{
    const link=document.createElement("a");
    link.href="./Tanvi_Resume.pdf";
    link.download="Tanvi_Somani_Resume.pdf";
    link.click();
  };

  return (
    <div className="hero">
        <div className="hero-content">
        <h1>Hey!</h1>
        <h1><span>I'm Tanvi Somani</span></h1>
        <p>{roles[currentRoleIndex]}</p>
        <div className="hero-action">
            <button className="hero-resume" onClick={handledownload}>Resume</button>
        </div>
        </div>

        <img className="profile_pic" src={profile_img} alt=""/>
    </div>
  )
}

export default Hero