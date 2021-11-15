import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

    //    press release component 
const PressRelease = () => {
    return (
         <Container sx={{boxShadow: 4,py: 6,mb: 6}}>
             <Typography variant="h4" sx={{pt: 2,pb: 4,color: '#E76F51',fontWeight: 500}}>
                Press Release
             </Typography>
             <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>

                    <Paper elevation={4} sx={{p: 2,backgroundColor: '#f0f0f5'}}>
                        <Typography variant="body1" sx={{p:2}}>
                            July 01,2021
                        </Typography>
                        <hr />
                        <Typography variant="h6" sx={{p: 2}}>
                        Super bike India registers domestic sales of 4 767 units in June’21
                        </Typography>
                        <Button variant="outlined">Read more</Button>
                    </Paper>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={4} sx={{p: 2,backgroundColor: '#f0f0f5'}}>
                        <Typography variant="body1" sx={{p:2}}>
                            August 01,2021
                        </Typography>
                        <hr />
                        <Typography variant="h6" sx={{p: 2}}>
                            Super bike India Foundation opens COVID-19 isolation centers in Haryana & Rajasthan
                        </Typography>
                        <Button variant="outlined">Read more</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Paper elevation={4} sx={{p: 2,backgroundColor: '#f0f0f5'}}>
                        <Typography variant="body1" sx={{p:2}}>
                            November 01,2021
                        </Typography>
                        <hr />
                        <Typography variant="h6" sx={{p: 2}}>
                            Super Bike India registers domestic sales of 2 032 units in May’21
                        </Typography>
                        <Button variant="outlined">Read more</Button>
                    </Paper>
                </Grid>
             </Grid>
             <Button variant="contained" sx={{px: 6,mt: 4,backgroundColor: '#e68a00'}}>Read All</Button>
         </Container>
    );
};

export default PressRelease;