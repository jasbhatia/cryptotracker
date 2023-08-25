import React from 'react'
import './Main.css'
import Button from '../../common/button/Button';
import phone from '../../../assests/images/phone.png'
import gradient from '../../../assests/images/gradient.png';
import { motion } from "framer-motion";

const Main = () => {
  return (
      <div className='flex-info'>
          <div className="left-component">
              
              <motion.h1 className='track-crypto-heading' initial={{opacity:0,rotateX:"0deg",scale:0}} animate={{opacity:1,rotateX:"360deg", scale:1}} transition={{duration:1}}>Track Crypto</motion.h1>
              <motion.h1 className='real-time-heading' initial={{x:200,opacity:0}} animate={{ x: 0 ,opacity:1}} 
  transition={{ ease: "easeOut", duration:1,delay:0.5 }}>Real Time</motion.h1>
              <motion.p className='info-text' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1, delay:1}}>Track crypto through a public api in real time.Visit the dashboard to do so! </motion.p>

              <motion.div className="btn-flex" initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:1, delay:1.5}}>
                  <Button text={"Dashboard"} />
                  <Button text={"Share" } isOutlined={true}/>
              </motion.div>
          </div>

      <div className='right-component'>
        <div className="phone">
          <motion.img src={phone} alt="not found" className='phone-img' initial={{y:-20}} animate={{y:20}} transition={{type:"smooth",repeatType:"mirror", duration:1.9,repeat:Infinity}} />
        </div>

        <div className="gradient">
           <img src={gradient} alt="not found" className='grad-img' />
        </div>
          </div>
      
    </div>
  )
}

export default Main
