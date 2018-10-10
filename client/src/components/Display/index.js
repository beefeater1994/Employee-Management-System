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
import DeleteIcon from "@material-ui/icons/Delete";
import ProfileIcon from './UI/ProfileIcon';
import Avatar from "./Avatar";

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
        orderBy: 'name'
    };

    componentDidMount() {
        this.props.getEmployees();
    }

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
        const { order, orderBy} = this.state;
        if (this.props.employees.isFetching) {
            return <div>Getting data</div>
        }
        const {useSearchData, searchWord} = this.props.search;
        const data = useSearchData ? this.props.employees.data.filter(el => el.name === searchWord) : this.props.employees.data;
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
                                                key={n._id}
                                            >
                                                <TableCell>
                                                    <Avatar avatar={n.avatar} gender={n.gender}/>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outlined" className={classes.button} onClick={() => this.props.profileHandler(n)}>
                                                        <ProfileIcon />
                                                        Profile
                                                    </Button>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="outlined" className={classes.button} onClick={() => this.props.deleteHandler(n._id)}>
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
                                                <TableCell>{n.manager === undefined ? "" : n.manager.name}</TableCell>
                                                <TableCell>{n.direct_reports === undefined ? 0 : n.direct_reports.length}</TableCell>
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
