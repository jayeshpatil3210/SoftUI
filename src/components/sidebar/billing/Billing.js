import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ccimg from '../../../img/mastercard.png'
// import { Button } from 'bootstrap';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CreateIcon from '@mui/icons-material/Create';
import visa from '../../../img/visa.png'
import HomeIcon from '@mui/icons-material/Home';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Billinginfo from './Billinginfo';

const Billing = () => {
    return (
        <>
            <Grid sx={{ flexGrow: 1, display: 'flex', width: '79%', float: 'right' }} container spacing={3} marginBottom={5} marginTop={0} marginLeft={15} marginRight={5}>

                <Grid item md={12}>
                    <Grid sx={{ flexGrow: 1 }} container spacing={3} >
                        <Grid item md={8}>

                            <Grid sx={{ flexGrow: 1 }} container spacing={3} >
                                <Grid item md={12} >
                                    <Grid sx={{ flexGrow: 1 }} container spacing={3} marginBottom={5} >
                                        <Grid item md={6} >
                                            {/* <Paper> */}
                                            <div className='credit-card'>
                                                <div className='credit-bg'>
                                                    <WifiOutlinedIcon className='credit-icon' />
                                                    <h5 class="credit-text">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>

                                                    <div className='credit-btmtxt'>
                                                        <div className='credit-first'>
                                                            <p>card Holder</p>
                                                            <h6>Jack Peterson</h6></div>
                                                        <div className='credit-second'>
                                                            <p>Expires</p>
                                                            <h6>11/22</h6></div>
                                                        <div className='credit'>
                                                            <img src={ccimg}></img></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* </Paper> */}

                                        </Grid>
                                        <Grid item md={6} marginTop={0} marginLeft={0}>
                                            <Grid sx={{ flexGrow: 1 }}  >
                                                <Grid item md={12}>
                                                    <Grid sx={{ flexGrow: 1 }} container spacing={0} justifyContent={'space-between'}>
                                                        <Paper>
                                                            <Grid item md={6} paddingRight={0}  >
                                                                <div className='salary'>
                                                                    <div className='sicn'>
                                                                        <HomeIcon className='sicnh' /></div>
                                                                    <h3>Salary</h3>
                                                                    <p>Belong Interactive</p>
                                                                    <hr className='horizontal'></hr>
                                                                    <h2>+$2000</h2>
                                                                </div>

                                                            </Grid>
                                                        </Paper>
                                                        <Paper>
                                                            <Grid item md={6}>
                                                                <div className='salary'>
                                                                    <div className='sicn'>
                                                                        <LocalParkingIcon className='sicnh' /></div>
                                                                    <h3>Salary</h3>
                                                                    <p>Belong Interactive</p>
                                                                    <hr className='horizontal'></hr>
                                                                    <h2>+$2000</h2>
                                                                </div>
                                                            </Grid>
                                                        </Paper>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid sx={{ flexGrow: 1 }} container spacing={3} >
                                        <Grid item md={12}>
                                            <Paper>
                                                <div className='bill-card'>
                                                    <h4>Payment Method</h4>
                                                    <a href='#'><Button>+ Add New Card</Button></a>
                                                </div>

                                                <div className='bill-cardtwo'></div>
                                                <Grid sx={{ flexGrow: 1 }} container spacing={3} >
                                                    <Grid item md={6}>
                                                        <div className='first'>
                                                            <img src={ccimg}></img>
                                                            <h4 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h4>
                                                            <a href='#'>
                                                                <CreateIcon className='visa-icon' /></a>
                                                        </div>

                                                    </Grid>

                                                    <Grid item md={6}>
                                                        <div className='first'>
                                                            <img src={visa}></img>
                                                            <h4 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h4>
                                                            <a href='#'><CreateIcon className='visa-icon' /></a>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>

                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid item md={4}>
                            <Paper>
                                <div className='billing-inv'>
                                    <div className='binvoices'>
                                        <h6>Invoices</h6>
                                    </div>
                                    <div className='binvoices-btn'>
                                        <Button variant="outlined">View All</Button>
                                    </div>
                                </div>

                                <div className='binvoices-content'>
                                    <div className='binvc'>
                                        <h6>March, 01, 2020</h6>
                                        <span class="text-xs">#MS-415646</span>
                                    </div>

                                    <div className='binvc-icon'>
                                        <p>$180</p>
                                        <Button variant="text"><PictureAsPdfIcon />PDF</Button>
                                    </div>
                                </div>

                                <div className='binvoices-content'>
                                    <div className='binvc'>
                                        <h6>March, 01, 2020</h6>
                                        <span class="text-xs">#MS-415646</span>
                                    </div>

                                    <div className='binvc-icon'>
                                        <p>$180</p>
                                        <Button variant="text"><PictureAsPdfIcon />PDF</Button>
                                    </div>
                                </div>

                                <div className='binvoices-content'>
                                    <div className='binvc'>
                                        <h6>March, 01, 2020</h6>
                                        <span class="text-xs">#MS-415646</span>
                                    </div>

                                    <div className='binvc-icon'>
                                        <p>$180</p>
                                        <Button variant="text"><PictureAsPdfIcon />PDF</Button>
                                    </div>
                                </div>

                                <div className='binvoices-content'>
                                    <div className='binvc'>
                                        <h6>March, 01, 2020</h6>
                                        <span class="text-xs">#MS-415646</span>
                                    </div>

                                    <div className='binvc-icon'>
                                        <p>$180</p>
                                        <Button variant="text"><PictureAsPdfIcon />PDF</Button>
                                    </div>
                                </div>

                                <div className='binvoices-content'>
                                    <div className='binvc'>
                                        <h6>March, 01, 2020</h6>
                                        <span class="text-xs">#MS-415646</span>
                                    </div>

                                    <div className='binvc-icon'>
                                        <p>$180</p>
                                        <Button variant="text"><PictureAsPdfIcon />PDF</Button>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Billinginfo />
        </>
    )
}

export default Billing