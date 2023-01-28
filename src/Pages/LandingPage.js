import React from 'react';
// import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// const useStyles = (theme) => ({
//     root: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//     },
//     title: {
//         margin: theme.spacing(4),
//     },
//     button: {
//         margin: theme.spacing(2),
//     },
// });

function LandingPage() {
    // const classes = useStyles();
    return (
        <Container maxWidth="sm" className=''>
            <Typography variant="h2" className=''>
                Welcome to my Landing Page
            </Typography>
            <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum aliquam, velit risus malesuada ipsum, a tincidunt leo nibh euismod nulla.
            </Typography>
            <Button variant="contained" color="primary" className=''>
                Learn More
            </Button>
        </Container>
    );
}

export default LandingPage;
