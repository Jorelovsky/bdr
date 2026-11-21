import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import "./App.css"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Rating from '@mui/material/Rating';
import AnimeRatingCards from "./json/AnimeRatingCards.json"
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function generateCard(Title, ImgPath, rating, Description, ViewLink) {
  return (
    <Card 
        sx = {{
          width : 560,
          textAlign : 'left',
        }}>
      <CardHeader title = {Title}
      action = {
        <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly/>
      }/>
      <CardContent>
        <Stack spacing = {4} direction='row'>
          <CardMedia 
          component="img"
          image = {ImgPath}
          sx={{ width: 240, 
            height: 'auto',
            objectFit: 'contain'}}
          />
          <Stack>
            <Typography>
              {Description}
            </Typography>
            <Button href = {ViewLink} 
            size="medium" 
            sx = {{
              justifyContent: 'flex-end'
            }}>前往观看</Button>
          </Stack>
        </Stack>
      </CardContent>
  </Card>
  )
}

function AvatarStack(){
  return (
  <Stack spacing = {4} direction="row" sx = {{
          justifyContent : 'center'
        }}>
    <Avatar alt = "Jorelovsky" src = "/assets/csr.jpg" className = "CustomizedAvatar"/>
    <Avatar alt = "Jorelovsky" src = "/assets/lzy.jpg" className = "CustomizedAvatar"/>
    <Avatar alt = "Jorelovsky" src = "./assets/mashiro.png" className = "CustomizedAvatar"/>
    <Avatar alt = "Jorelovsky" src = "/assets/zzk.jpg" className = "CustomizedAvatar"/>
          
  </Stack>)
}

function loadAnimeRatingCards(){
  let List = AnimeRatingCards.List;
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} 
        sx = {{
        alignItems : "center"
        }}>
      {Array.from({length : List.length},
       (_, i) => (
        <Grid item xs={12} md={6} key={List[i].Title}> 
          {generateCard(
          List[i].Title, 
          List[i].ImagePath,
          List[i].Rating,
          List[i].Description,
          List[i].ViewLink)}
          </Grid>))
        }
      </Grid>
    </Container>
    
  );
}

export default function App() {
  return (
      <Stack sx = {{
        alignItems : "center"
      }}>
        <Typography variant='h2' component='h2'
          sx = {{
          fontWeight: 'bold'
          }}>
          名字还没有取好的雏雁计划项目
        </Typography>
        {AvatarStack()}
        {loadAnimeRatingCards()}  
      </Stack> 
  );
}