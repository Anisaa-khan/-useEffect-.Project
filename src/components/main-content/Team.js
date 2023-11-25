
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
const Team= () => {
    const [teamData, setTeamData] = useState([]);
  
    const fetchedTeamData = async () => {
      try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json(); // Await for the JSON parsing
        setTeamData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchedTeamData();
    }, []);
  

  return (
    <>
    <Typography gutterBottom variant="h3" component="div" sx={{marginTop:"30px", fontWeight:"400"}}>
  Our Products
  </Typography>
<Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"


sx={{ marginTop: '18px' }}>

{teamData.map((item) => (
    <Grid item xs={12} sm={6} md={3} key={item.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="240"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold", fontFamily:"sans-serif", textTransform:"capitalize"}}>
              {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {item.title}
            </Typography>
            
            <Typography gutterBottom variant="h5" component="div"sx={{marginTop:"10px"}}>
              ${item.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ))}


    </Grid>
    </>
  );

      }

export default Team

