import React from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import { useState } from 'react'
const Home = () => {
    const [bodyPart,setBodyParts] = useState('all')
    const [exercises, setExercises] = useState([])
  return (
   <Box>
       <HeroBanner />
       <SearchExercises bodyPart={bodyPart} setBodyParts={setBodyParts} setExercises={setExercises}/>
       <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>
   </Box>
  )
}

export default Home
