import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
function Thumbnail({url,title}) {
    return (
        <Link to="/girl1" style={{
            display:"flex",
            flexDirection:"column",
            textDecoration:"none",
            justifyContent:"center",
            alignItems:"center"}}
            
           >
        <motion.img 
        initial={{scale:0.3}}
        animate={{scale:1.2}}
        transition={{type:'spring',stifness:500}}
        src={url} 
        className="checkpoint">

        </motion.img>
        <span style={{
            textDecoration:"none",
            color:"white",
            fontFamily: "Raleway",
            fontSize:"1.5rem"
       
            }}>{title}</span>
      </Link>
    )
}

export default Thumbnail
    