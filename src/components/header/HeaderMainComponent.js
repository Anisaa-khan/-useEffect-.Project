import { Grid } from '@mui/material'
import React from 'react'
import image from "..//..//assets/images/anisa.jpg";
function HeaderMainComponent() {
  return (
<>
<Grid>
        <img src={image} alt="" style={{width:"100%", height:"100vh"}} />
</Grid>

</>
  )
}

export default HeaderMainComponent
