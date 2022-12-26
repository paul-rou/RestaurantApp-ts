import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css';
import { IRestaurantTable, Restaurant, RestaurantTableElement } from '../../type';

function createData(
  title: string,
  address: string,
  phone: string,
  distance: number,
): RestaurantTableElement {
  return { title: title, address: address, phone: phone, distance: distance };
}

const RestaurantTable: React.FC<IRestaurantTable> = ({restaurantList}) => {

    const getPhone = (restaurant: Restaurant): string => {
        var phone = "No Contact"
        if (restaurant.contacts && restaurant.contacts[0].phone){
            phone = restaurant.contacts[0].phone[0].value
        }
        return phone
    }

    const rows: RestaurantTableElement[] = restaurantList.map(restaurant =>
        createData(restaurant.title, restaurant.address.label, getPhone(restaurant), restaurant.distance / 1000)
    );


  return (  
    <div className="restaurantTable">
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Restaurant</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Distance (km)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.title}
                    </TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.distance}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default RestaurantTable;