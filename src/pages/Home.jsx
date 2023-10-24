import React from 'react'

import Popular from '../components/Popular'
import Pasta from '../components/Pasta'

import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{opacity:1.5}}
    >
      <Popular />
      <Pasta />
    </motion.div>
  )
}

export default Home