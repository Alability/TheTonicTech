import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from "../assets/Logo.png"
export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1, mt: 10, px: 5 }}>
            <Grid container spacing={3} style={{display: "flex", justifyContent: "space-evenly"}}>
                <Grid item xs={4}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mb: 4, display: { xs: 'none', sm: 'block', md: "flex", lg: "flex" } }}
                    >
                        <img src={Logo} alt="thetonictech" />
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                    >
                        Social media validation business model <br /> canvas graphical user interface launch party <br /> creative facebook iPad twitter.
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mt: 6, mb: 6}}
                    >
                        All rights reserved.
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold", mb: 4}}
                    >
                        Landings
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mb: 2}}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mb: 2}}
                    >
                        Products
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                    >
                        Services
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold", mb: 4}}
                    >
                        Company
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mb: 2}}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mb: 2}}
                    >
                        Careers
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                    >
                        Services
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: "bold", mb: 4}}
                    >
                        Resources
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mb: 2}}
                    >
                        Blog
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ mb: 2}}
                        component="div"
                    >
                        Products
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                    >
                        Services
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
