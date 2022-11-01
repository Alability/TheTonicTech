import * as React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Divider, Typography } from '@mui/material';
import heroblog from "../assets/heroblog.svg";
// import LogoShape from "../assets/LogoShape.svg"
import heroavatar from "../assets/heroavatar.svg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./herosection.css"

export default function HeroSection() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Typography sx={{textAlign: "center", mb: 1}}>Blog</Typography>
                <Typography variant="h2" sx={{textAlign: "center", mb: 2}}>Thoughts and words</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center"}}>
                <img src={heroblog} alt="The homepage dashboard cards" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography sx={{mb: 1, mt: 9, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans"}}>Category <span style={{fontWeight: "normal", fontSize: "small"}}>November 22, 2021</span> </Typography>
                <Typography variant="h2">Pitch termsheet backing <br />validation focus release.</Typography>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src={heroavatar} />
                    <Typography>Chandler Bing</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
                <Divider sx={{mt: 6, mx: 3}} />
            </Grid>
        </Grid>
    );
}
