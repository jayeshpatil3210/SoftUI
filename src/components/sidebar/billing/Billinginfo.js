import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import IconButton from '@mui/material/IconButton';
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';

const Billinginfo = () => {
    return (
        <>
            <Grid sx={{ flexGrow: 1, display: 'flex', width: '82%', float: 'right' }} container spacing={3} marginBottom={5} >
                <Grid item md={7}>
                    <Paper>
                        <div className='binfo-head'>
                            <h5>Billing Information</h5>
                            <div className='binfo-card'>
                                <ul className='list-group'>
                                    <li className='list-group-list'>
                                        <div className='first-list'>
                                            <h6>Oliver Liam</h6>
                                            <span className='pan'>Company Name:
                                                <span className='pan2'>Viking Burrito </span>
                                            </span>
                                            <span className='pan'>Email Address:
                                                <span className='pan2'>oliver@burrito.com  </span>
                                            </span>
                                            <span className='pan'>VAT Number:
                                                <span className='pan2'>FRB1235476 </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className='binfo-icon'>
                                    <a className='delet-btn' href=''><DeleteIcon className='dltcon' />Delete</a>
                                    <a className='edit-btn' href=''><CreateIcon className='dltcon' />Edit</a>
                                </div>
                            </div>
                        </div>

                        <div className='binfo-head'>
                            {/* <h5>Billing Information</h5> */}
                            <div className='binfo-card'>
                                <ul className='list-group'>
                                    <li className='list-group-list'>
                                        <div className='first-list'>
                                            <h6>Oliver Liam</h6>
                                            <span className='pan'>Company Name:
                                                <span className='pan2'>Viking Burrito </span>
                                            </span>
                                            <span className='pan'>Email Address:
                                                <span className='pan2'>oliver@burrito.com  </span>
                                            </span>
                                            <span className='pan'>VAT Number:
                                                <span className='pan2'>FRB1235476 </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className='binfo-icon'>
                                    <a className='delet-btn' href=''><DeleteIcon className='dltcon' />Delete</a>
                                    <a className='edit-btn' href=''><CreateIcon className='dltcon' />Edit</a>
                                </div>
                            </div>
                        </div>

                        <div className='binfo-head'>
                            {/* <h5>Billing Information</h5> */}
                            <div className='binfo-card'>
                                <ul className='list-group'>
                                    <li className='list-group-list'>
                                        <div className='first-list'>
                                            <h6>Oliver Liam</h6>
                                            <span className='pan'>Company Name:
                                                <span className='pan2'>Viking Burrito </span>
                                            </span>
                                            <span className='pan'>Email Address:
                                                <span className='pan2'>oliver@burrito.com  </span>
                                            </span>
                                            <span className='pan'>VAT Number:
                                                <span className='pan2'>FRB1235476 </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className='binfo-icon'>
                                    <a className='delet-btn' href=''><DeleteIcon className='dltcon' />Delete</a>
                                    <a className='edit-btn' href=''><CreateIcon className='dltcon' />Edit</a>
                                </div>
                            </div>
                        </div>

                    </Paper>
                </Grid>

                <Grid item md={5}>
                    <Paper>
                        <div className='trans'>
                            <div className='trans-head'>
                                <h5>Your Transaction's</h5>
                            </div>
                            <div className='trans-head-right'>
                                <CalendarMonthIcon className='cal-icn' />
                                23 - 30 March 2020
                            </div>
                        </div>

                        <div className='trans-body'>
                            <h6>NEWEST</h6>
                            <div className='trans-list'>
                                <IconButton variant="outlined" aria-label="box" size="medium" border="red">
                                    <ArrowDownwardRoundedIcon fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigt'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>

                            <div className='trans-list'>
                                <IconButton variant="outlined" aria-label="box" size="medium" border="red">
                                    <ArrowDownwardRoundedIcon fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigt'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>
                            <br></br>
                        </div>


                        <div className='trans-body'>
                            <h6>YESTERDAY</h6>
                            <div className='trans-list'>
                                <IconButton className="yest" variant="outlined" aria-label="box" size="medium" border="green">
                                    <NorthOutlinedIcon className="yest2" fontSize="inherit" color="green" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigtg'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>

                            <div className='trans-list'>
                                <IconButton className="yest" variant="outlined" aria-label="box" size="medium" border="red">
                                    <NorthRoundedIcon className="yest2" fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigtg'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>

                            <div className='trans-list'>
                                <IconButton className="yest" variant="outlined" aria-label="box" size="medium" border="red">
                                    <NorthRoundedIcon className="yest2" fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigtg'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>

                            <div className='trans-list'>
                                <IconButton className="yest" variant="outlined" aria-label="box" size="medium" border="red">
                                    <NorthRoundedIcon className="yest2" fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigtg'>
                                    <p>- $ 2,500</p>
                                </div>
                            </div>

                            <div className='trans-list'>
                                <IconButton className="yest" variant="outlined" aria-label="box" size="medium" border="red">
                                    <PriorityHighOutlinedIcon className="yest3" fontSize="inherit" color="color" />
                                </IconButton>
                                <div className='net'>
                                    <h6>Netflix</h6>
                                    <span class="net-xs">27 March 2020, at 12:30 PM</span>
                                </div>
                                <div className='nrigtgP'>
                                    <p>pending</p>
                                </div>
                            </div>
                        </div>

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Billinginfo