import React from 'react'
import './Girl1.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
function Girl1() {
    return (
        <div className="girl1__container">
            <Link to="/" style={{textDecoration:"none",color:'white'}}>Home</Link>
             <motion.div className="box" style={{margin:'10px'}}
             initial={{opacity:0}}
             animate={{opacity:1}}    
             transition={{type:"tween" }}>

               <h1>Siesta</h1>
               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores! Eius harum esse quas eveniet. Temporibus id fugiat reiciendis voluptate error blanditiis rem porro quae atque voluptatum facere, voluptas animi.</span>
             </motion.div>
              <motion.img className="girl1__render" src="https://i.imgur.com/tfCChIH.png" alt=""
                animate={{opacity:1}} initial ={{opacity:0}} transition={{delay:.2,type:'tween'}}
              />
        </div>
    )
}

export default Girl1
  