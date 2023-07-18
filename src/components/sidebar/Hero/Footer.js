import React from 'react';
import Grid from '@mui/material/Grid';
import { WidthFull } from '@mui/icons-material';


const Footer = () => {
    return (
        <>
            <Grid sx={{ flexGrow: 1, display: 'flex', width: '82%', float: 'right' }} container spacing={3} marginBottom={0} >
                <Grid item md={6}>
                    <div className='copyright'>
                        "©" 2023,made with by creative team for a better web.
                    </div>
                </Grid>
                <Grid item md={6}>
                    <ul class="footer-link">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                        </li>
                    </ul>
                </Grid>
            </Grid >
        </>
    )
}

export default Footer