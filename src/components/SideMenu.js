import React,{useEffect} from 'react'
import './SideMenu.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
function SideMenu() {
   useEffect(()=>{
       let playAudio = () => {
        let audio = new Audio('../dating-fever.mp3');
        audio.play();
       }

       playAudio()
   },[])
   
    return (
        <motion.div 
        animate={{width:'100vw'}}
        initial={{width:'0vw'}}
        transition={{type:"tween",delay:.1}}
        className="sidemenu__container">
             <motion.span whileHover={{x:-10}} className="sidemenu__item">
                 <Link style={{textDecoration:"none",color:"white"}} to="/roadmap">Start</Link></motion.span>
             <motion.span whileHover={{x:-10}} className="sidemenu__item">Load</motion.span>
             <motion.span whileHover={{x:-10}} className="sidemenu__item">Preferences</motion.span>
             <motion.span whileHover={{x:-10}} className="sidemenu__item">Help</motion.span>
             <motion.span whileHover={{x:-10}} onClick={()=>window.close()}
             className="sidemenu__item">Quit</motion.span>
        </motion.div>
    )
}

export default SideMenu
