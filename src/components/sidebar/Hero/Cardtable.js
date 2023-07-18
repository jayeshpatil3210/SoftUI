import React from 'react';
import Ltable from '../Hero/Ltable';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Looks5Icon from '@mui/icons-material/Looks5';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RadioIcon from '@mui/icons-material/Radio';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import { responsiveFontSizes } from '@mui/material';
import { fontGrid } from '@mui/material/styles/cssUtils';

const Cardtable = () => {
    return (
        <>

            <Grid sx={{ flexGrow: 1, width: '82%', float: 'right' }} container spacing={3} marginBottom={3} >
                <Grid item md={8}>
                    <Paper>
                        <Grid sx={{ flexGrow: 1 }} >
                            <div className='table-content'>
                                <h4>Projects</h4>
                                <p><i class="fa fa-check text-info" aria-hidden="true"></i><span>30 done </span>this month</p>
                            </div>
                            <Ltable />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper>
                        <div className='card'>
                            <div className='card-header pb-0'>
                                <h4>Orders Overview</h4>
                                <p className='text-sm'>
                                    <i class="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                    <span class="font-weight-bold">24%</span>
                                    "this month"</p>
                                <div class="card-body p-3">
                                    <div class="timeline timeline-one-side">
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <NotificationsIcon className='notify' />
                                            </span>
                                            <div class="timeline-content">

                                                <p class="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</p>
                                                <span class="small-txt">22 DEC 7:20 PM</span>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <Looks5Icon className='notify2' />
                                            </span>
                                            <div class="timeline-content">
                                                <p class="text-dark text-sm font-weight-bold mb-0">New order #1832412</p>
                                                <span class="small-txt">21 DEC 11 PM</span>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <ShoppingCartIcon className='notify3' />
                                            </span>
                                            <div class="timeline-content">
                                                <p class="text-dark text-sm font-weight-bold mb-0">Server payments for April</p>
                                                <span class="small-txt">21 DEC 9:34 PM</span>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <RadioIcon className='notify4' />
                                            </span>
                                            <div class="timeline-content">
                                                <p class="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</p>
                                                <span class="small-txt">20 DEC 2:20 AM</span>
                                            </div>
                                        </div>
                                        <div class="timeline-block mb-3">
                                            <span class="timeline-step">
                                                <RemoveFromQueueIcon className='notify5' />
                                            </span>
                                            <div class="timeline-content">
                                                <p class="text-dark text-sm font-weight-bold mb-0">Order is placed  #4395133</p>
                                                {/* <span class="small-txt">20 DEC 2:20 AM</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Cardtable