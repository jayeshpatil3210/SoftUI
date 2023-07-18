import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Leftcha from '../Hero/Leftcha';
import Rightcha from '../Hero/Rightcha';
import PortraitIcon from '@mui/icons-material/Portrait';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RadioIcon from '@mui/icons-material/Radio';
import ConstructionIcon from '@mui/icons-material/Construction';

const Chart = () => {
    return (
        <>
            <Grid sx={{ flexGrow: 1, width: '82%', float: 'right' }} container spacing={3} marginBottom={3} >
                <Grid item md={5}>
                    <Paper>
                        <Grid sx={{ flexGrow: 1 }} container spacing={3} >

                            <Grid item md={12}>
                                <Leftcha />
                                <div className='chart-info'>
                                    <h6> Active Users </h6>
                                    <p><span>(+23%)</span> than last week </p>
                                </div>
                                <Grid sx={{ flexGrow: 1 }} container spacing={3} marginBottom={0} >
                                    <Grid item md={3}>
                                        <div className='cicon'>
                                            <PortraitIcon className='useri' />
                                            <p>Users</p>
                                            <h4>36k</h4></div>
                                        <div className='progress'>
                                            <div className='p-bar'>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className='cicon'>
                                            <RocketLaunchIcon className='useri1' />
                                            <p>Users</p>
                                            <h4>36k</h4></div>
                                        <div className='progress'>
                                            <div className='p-bar'>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className='cicon'>
                                            <RadioIcon className='useri2' />
                                            <p>Users</p>
                                            <h4>36k</h4></div>
                                        <div className='progress'>
                                            <div className='p-bar'>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className='cicon'>
                                            <ConstructionIcon className='useri3' />
                                            <p>Users</p>
                                            <h4>36k</h4></div>
                                        <div className='progress'>
                                            <div className='p-bar'>
                                            </div>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={7}>
                    <Paper>

                        <div className='rightc'>
                            <h3>Sales overview</h3>
                            <p> <i class="fa fa-arrow-up text-success" aria-hidden="true"></i><span class="font-weight-bold">4% more</span> in 2021</p>
                        </div>
                        <Rightcha />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Chart
