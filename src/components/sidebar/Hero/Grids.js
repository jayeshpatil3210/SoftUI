import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';


export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);

    //     const handleChange = (event) => {
    //         setSpacing(Number(event.target.value));
    //     };

    //     const jsx = `
    // <Grid container spacing={${spacing}}>
    // `;

    return (
        <Grid sx={{ flexGrow: 1, display: 'flex', width: '82%', float: 'right' }} container spacing={3} marginBottom={5} >
            <Grid item md={3}>
                <Paper> <Typography>
                    <div className='cart-content'><p>Today's Money</p>
                        <h5>$53,000&nbsp;<span>+55%</span></h5></div>
                    <div className='col-md-4 cart-icon'>
                        <div className='icon-shape'><PaidIcon className='paid' /></div>
                    </div>
                </Typography></Paper>
            </Grid>
            <Grid item md={3}>
                <Paper> <Typography>
                    <div className='cart-content'><p>Today's Money</p>
                        <h5>$53,000&nbsp;<span>+55%</span></h5></div>
                    <div className='col-md-4 cart-icon2'>
                        <div className='icon-shape'><PaidIcon className='paid' /></div>
                    </div>
                </Typography></Paper>
            </Grid>
            <Grid item md={3}>
                <Paper> <Typography>
                    <div className='cart-content'><p>Today's Money</p>
                        <h5>$53,000&nbsp;<span>+55%</span></h5></div>
                    <div className='col-md-4 cart-icon3'>
                        <div className='icon-shape'><PaidIcon className='paid' /></div>
                    </div>
                </Typography></Paper>
            </Grid>
            <Grid item md={3}>
                <Paper> <Typography>
                    <div className='cart-content'><p>Today's Money</p>
                        <h5>$53,000&nbsp;<span>+55%</span></h5></div>
                    <div className='col-md-4 cart-icon4'>
                        <div className='icon-shape'><PaidIcon className='paid' /></div>
                    </div>
                </Typography></Paper>
            </Grid>
        </Grid>
    );
}