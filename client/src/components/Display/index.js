import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from './TableHead';
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "./UI/EditIcon";

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1620,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class EnhancedTable extends React.Component {
    state = {
        order: 'asc',
        orderBy: 'calories',
        data: [
            {
                name: "Alda",
                title: "Engineer",
                gender: "Female",
                cell: "412-923-1222",
                startDate: "2002/02/20",
                email: "alda@1.com",
                manager: {
                    name: "Allen",
                    id: "5bb812097c1e3c13b48b3800"
                },
                dr: []
            }
        ],
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };


    render() {
        const { classes } = this.props;
        const { data, order, orderBy} = this.state;

        return (
            <div>

                <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table} aria-labelledby="tableTitle">
                            <EnhancedTableHead
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={this.handleRequestSort}
                            />
                            <TableBody>
                                {stableSort(data, getSorting(order, orderBy))
                                    .map(n => {
                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={n.id}
                                            >
                                                <TableCell>
                                                        Avatar
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary" className={classes.button}>
                                                        <EditIcon />
                                                        EDIT
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="contained" color="primary" className={classes.button}>
                                                        <DeleteIcon />
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    {n.name}
                                                </TableCell>
                                                <TableCell>{n.title}</TableCell>
                                                <TableCell>{n.gender}</TableCell>
                                                <TableCell>{n.cell}</TableCell>
                                                <TableCell>{n.email}</TableCell>
                                                <TableCell>{n.manager.name}</TableCell>
                                                <TableCell>{n.dr.length}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </div>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
