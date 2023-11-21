import {useEffect } from 'react';
import { Table,TableBody, TableCell, TableHead, TableRow, } from "@mui/material";

import {getUsers} from '../service/api';

const AllUser =() =>{
    useEffect(() => {

    }, []);

    const getAllUsers =async () =>{
        await getUsers();
    }
    return(
        <Table>
            <TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Username</TableCell>
                    </TableRow>
                </TableBody>
            </TableHead>
        </Table>
    )
}
 export default AllUser;

