import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import latestnew1 from "../assets/latestnew1.svg";
import latestnews2 from "../assets/latestnews2.svg";
import latestnews3 from "../assets/latestnews3.svg";
import latestnews4 from "../assets/latestnews4.svg";
import latestnews5 from "../assets/latestnews5.jpg";
import latestnews6 from "../assets/latestnews6.jpg";
import latestavatar1 from "../assets/latestavatar1.png";
import latestavatar2 from "../assets/latestavatar2.png";
import TextField from '@mui/material/TextField';
// import evencoolerfeature from "../assets/evencoolerfeature.svg";
// import coolfeature2 from "../assets/coolfeature2.svg";
import heroavatar from "../assets/heroavatar.svg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import "./herosection.css"

export default function LatestNews() {
    return (
        <Grid container spacing={2} sx={{ mt: 6 }}>
            <Grid item xs={12} md={12} >
                <Typography variant="h3" sx={{ px: 11 }}>Latest news</Typography>
            </Grid>
            {/* <Grid> */}
            <Grid container spacing={8} sx={{ px: 13, mt: -2 }}>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnew1}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Chandler Bing" src={heroavatar} />
                                <Typography>Chandler Bing</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnews2}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Rachel Green" src={latestavatar1} />
                                <Typography>Rachel Green</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnews3}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Monica Geller" src={latestavatar2} />
                                <Typography>Monica Geller</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={8} sx={{ px: 13, mt: -2 }}>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnews4}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Chandler Bing" src={heroavatar} />
                                <Typography>Chandler Bing</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnews5}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Rachel Green" src={latestavatar1} />
                                <Typography>Rachel Green</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                        <CardMedia
                            component="img"
                            // height="209px"
                            image={latestnews6}
                            alt="Cool feature title"
                        />
                        <CardContent sx={{ px: 0 }}>
                            <Typography sx={{ mb: 1, fontWeight: "bold", color: "#0A2640", fontFamily: "Open Sans" }}>Category <span style={{ fontWeight: "normal", fontSize: "small" }}>November 22, 2021</span> </Typography>
                            <Typography variant="h6" color="text.dark" sx={{ fontFamily: "Open Sans" }}>
                                Pitch termsheet backing validation focus release.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ mt: 2, px: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Monica Geller" src={latestavatar2} />
                                <Typography>Monica Geller</Typography>
                            </Stack>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            {/* </Grid> */}
            <Grid sx={{ my: 5, display: "flex", justifyContent: "center" }} xs={12} md={12}>
                <Button variant='outlined' sx={{ color: "#0A2640", textTransform: "capitalize", fontFamily: "Open Sans", borderColor: "#0A2640", borderRadius: 40, width: "10em" }}>Load more</Button>
            </Grid>
            <Grid sx={{ mt: 4 }} xs={12} md={12}>
                <Container maxWidth="lg">
                    <Box sx={{ bgcolor: '#0A2640', height: '40vh', color: "#fff", borderRadius: 4, display: "grid", alignItems: "center", justifyContent: "center"}}>
                        <Typography variant="h4" sx={{ textAlign: "center", mt: 2}}>
                            An enterprise template to ramp <br /> up your company website
                        </Typography>
                        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: -3, mb:5}}>
                        <TextField id="outlined-basic" label="Your email address" variant="outlined" sx={{backgroundColor: "#fff", borderRadius: 13, mr: 2}} />
                        <Button variant='outlined' sx={{ color: "#0A2640", textTransform: "capitalize", fontFamily: "Open Sans", borderColor: "#0A2640", borderRadius: 40, width: "10em", background: "#65E4A3", height: 60 }}>Start now</Button>
                        </Grid>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
}
