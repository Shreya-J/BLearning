import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import View from './View';


const Customcard=({item})=> {
  console.log({item});
  return (
    <Card style={{backgroundColor:'#696969'}}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h5" color='white'>{item.name}</Typography>
                <Typography variant='body2' color='white'>{item.category}</Typography>
                <Typography variant='h6' color='white'>{item.fee}</Typography>
                <Divider variant="insert" color='white'/>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <View item={item}/>
        </CardActions>
    </Card>
  )
}
export default Customcard
