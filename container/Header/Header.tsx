'use client'



import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { AppWrap } from '../../wrapper';
import { images } from '@/constants'
import './Header.scss';
import profile from '../../assets/profile.png'
import bg from '@/images/bgWhite1.png'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="tag-cmp app__flex">
          <p className="p1-text">Web Developer</p>
          <p className="p1-text">Freelancer</p>
        </div>
      </div>
    </motion.div>
   

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >

      <Image alt='bg-profile' src={profile} width={500} height={500}/>
   {/*    
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={bg}
        alt="profile_circle"
        className="overlay_circle"
      />  */}
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
        {[images.typescript, images.next, images.python].map((circle, index)=>(
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
         
          <Image src={circle} alt="profile_bg"/>
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');