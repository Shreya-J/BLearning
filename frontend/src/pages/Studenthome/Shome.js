import React from 'react'
import '../../assets/css/main.css'
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Customcards from './Customcards';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

export default function Shome() {
    const handleSignOut=()=>{
        localStorage.removeItem("token");
        window.location.href='/'
}
    const[courses,setCourses]=React.useState('')
    const getcourses=()=>{
        axios.get('http://localhost:8080/fetchcourses')
            .then(res=>{
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    const [state, setstate] = React.useState(false);
    const toggleDrawer=(toggle)=>(event)=>{
        if(
            event.type==="keydown"&&
            (event.key==="Tab"||event.key==="Shift"))
            {
                return;
            }
        setstate(toggle);
    }
    const list=()=>(
        <div className='list' role='presentation' onClick={toggleDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemText primary=""/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary=""/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="My Courses"/>
                </ListItemButton>
                <ListItemButton onClick={handleSignOut}>
                    <ListItemText primary="Sign Out"/>
                </ListItemButton>
            </List>
            </div>)

  return (
    <div id="page-wrapper" className="is-preload">

          <header id="header">
              <h1><a href="/shome">Blearning</a> Capstone Project</h1>
              <nav id="nav">
                  <ul>
                      <li><a href="/shome">Home</a></li>
                      <IconButton color="inherit" aria-label="Dashboard" onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                      </IconButton>
                      <Drawer anchor='right' open={state} onClose={toggleDrawer(false)}>
                        {list()}
                      </Drawer>
                  </ul>
              </nav>
          </header>

          <section id="main" className="container">
              <header>
                  <h2>Welcome Back!</h2>
                  <p>Anybody can Learn.</p>
                  <p>{getcourses()}</p>
                  <Grid container spacing={3}>
                    {(courses.length === 0)?(
                        <div className='align-center'>
                            <Typography variant='h2' component='p' style={{textAlign:'center'}}></Typography>
                        </div>):
                        courses.map((item)=>(
                        <Grid item md={4} sm={6} xs={12} key={item.id}>
                            <Customcards item={item}/>
                        </Grid>))}
                </Grid>
              </header>
              </section>
              </div>
  )
}
