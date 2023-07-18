import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import img from '../../img/sidecartimg.jpg';
import DiamondIcon from '@mui/icons-material/Diamond';
// import Button from '../sidebar/Button';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                sx={{ height: 140, position: "relative", display: "" }}
                image={img}
                title="green iguana"

            />

            <div className='onimg' style={{ position: "absolute", top: "510px", left: "28px" }}>
                <DiamondIcon className='icn' />
                <h4 className='onimgh'>Need help?</h4>
                <div className='onp'><h5 className='onimgp'>Please check our docs</h5></div>
                <Button variant="contained" size='medium' sx={{ backgroundColor: "white", color: "black" }} >DOCUMENTATION</Button>
            </div>

        </Card>
    );
}