import React from 'react'
import './Search.css'
import { Input, Button, Box } from '@mui/material'



export interface SxMui{
  sx:{
    background: string

  }
}

const   SearchWeather = () => {

  return (
    <Box>

      <div className='search'>
        <Input placeholder="Type in here…" />
        <Button size="md" variant={variant} color="primary">
            Primary
          </Button>

      </div>
    </Box>
  )
}

export default SearchWeather
