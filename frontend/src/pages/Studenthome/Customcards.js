import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Views from './Views';
import Enroll from './Enroll';
const Customcards=({item})=> {
  return (
    <Card style={{backgroundColor:'#696969'}}>
        <CardActionArea>
            <CardContent>
                <Typography variant="h5" color='white'>{item.name}</Typography>
                <Typography variant='body2' color='white'>{item.category}</Typography>
                <Typography variant='h6' color='white'>INR {item.fee}</Typography>
                <Divider variant="insert" color='white'/>
            </CardContent>
        </CardActionArea>
        <CardActions>
        
              <Views item={item}/>
              <Enroll item={item}/>
        </CardActions>
    </Card>
  )
}
export default Customcards
