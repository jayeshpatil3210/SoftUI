import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardHeader } from '@mui/material';
import Grid from '@mui/material/Grid';
import avaT from '../../../img/team-2.jpg';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';


const useStyles = makeStyles({
    table: {
        minWidth: 640
    },
});

function createData(name, email, role, settings) {
    return { name, email, role, settings };
}

const rows = [
    createData('John Michael', 'Manager', 'online', "24/01/22"),
    createData('Alexa Liras', 'Executive', 'offline', "24/01/22"),
    createData('Laurent Perrier', 'Programar', 'online', "24/01/22"),
    createData('Michael Levi', 'Executive', 'online', "24/01/22"),
    createData('Richard Gran', 'Executive', 'offline', "24/01/22"),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <Grid sx={{ flexGrow: 1, width: '76%', float: 'right' }} container spacing={3} marginBottom={5} marginTop={0} marginLeft={15} marginRight={5}>
            {/* <Card> */}

            <TableContainer component={Paper}>
                <Box sx={{ p: 5 }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead sx={{ color: '#8392ab' }}>
                            <TableRow >
                                <TableCell style={{ fontSize: '1.3rem', color: '#8392ab', fontWeight: '600', opacity: '.7' }}>AUTHOR</TableCell>
                                <TableCell style={{ fontSize: '1.3rem', color: '#8392ab', fontWeight: '600', opacity: '.7' }} align="left">FUNCTION</TableCell>
                                <TableCell style={{ fontSize: '1.3rem', color: '#8392ab', fontWeight: '600', opacity: '.7' }} align="center">STATUS</TableCell>
                                <TableCell style={{ fontSize: '1.3rem', color: '#8392ab', fontWeight: '600', opacity: '.7' }} align="right">EMPLOYED</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow style={{ fontSize: '6rem', color: '#344767' }} key={row.name}>

                                    <TableCell align="left" component="th" scope="row" style={{ fontSize: '6rem', color: '#344767' }}>
                                        <CardHeader
                                            avatar={<Avatar alt="Remy Sharp" src={avaT} />} title={row.name} />

                                    </TableCell>

                                    <TableCell align="left" style={{ fontSize: '', color: '#344767' }}>{row.email}</TableCell>
                                    <TableCell align="center" style={{ fontSize: '', color: '#344767' }}>{row.role}<div className='badge'></div></TableCell>
                                    <TableCell align="right" style={{ fontSize: '', color: '#344767' }}>{row.settings}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </TableContainer>


            {/* </Card> */}
        </Grid>
    );
}
