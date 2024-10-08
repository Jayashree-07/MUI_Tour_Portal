//type rafce to get the snippet // extension is used to get this REACT_NATIVE SNIPPET

import { Box } from '@mui/material'
//import { blue } from '@mui/material/colors'
import React from 'react'
import Tourcard from './Tourcard'

const Content = () => {
  return (
    <Box flex={2}>
      <Tourcard />
    <Tourcard />
    <Tourcard />
    <Tourcard />
    <Tourcard />
    </Box>
    
  )
}

export default Content