import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PaidIcon from '@mui/icons-material/Paid';
import img from '../../../img/rocket-white.png';
import Chart from './Chart';
import Cardtable from './Cardtable';
import Footer from '../Hero/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grids from '../Hero/Grids';


export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);

    return (
        <>
            <Grids />
            <Grid sx={{ flexGrow: 1, display: 'flex', width: '82%', float: 'right' }} container spacing={3} marginBottom={8} >
                <Grid item md={7}>
                    <Paper>
                        <Grid sx={{ flexGrow: 1 }} container spacing={3} >

                            <Grid item md={7}>

                                <div className='cart-content'><p>Built by developers</p>
                                    <h5>Soft UI Dashboard</h5>
                                    <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                    <a href='#'>Read more<ArrowForwardIcon className='right-arrow' /></a></div>
                                <div className='col-md-4 cart-icon'>
                                    <div className='icon-shape'><PaidIcon className='paid' /></div>
                                </div>
                            </Grid>
                            <Grid item md={5}>

                                <div className='cart-img'>
                                    <img src={img}></img>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={5}>

                    <div className='side-cart'>
                        <div className='side-img'>
                            <div className='side-content'>
                                <h5 className='white'>Work with the rockets</h5>
                                <p className='white'>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                                <a className='white' href='#'>Read more<ArrowForwardIcon className='right-arrow' /></a>
                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid >
            <Chart />
            <Cardtable />
            {/* <Footer /> */}
        </>
    );
}