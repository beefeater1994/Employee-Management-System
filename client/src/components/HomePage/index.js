import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

const rows = [
    {
        id: 0,
        name: "Eric",
        num: 2,
        group: "Web"
    },
    {
        id: 1,
        name: "Allen",
        num: 3,
        group: "Cloud"
    },
    {
        id: 2,
        name: "Alba",
        num: 5,
        group: "Database"
    },
];

const styles = theme => ({
    root: {
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    table: {
        minWidth: 1020,
    },
});

const HomePage = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <Input
                            placeholder="Search…"
                            disableUnderline
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Number of Direct Report</TableCell>
                        <TableCell>Access Group</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id} hover onClick={event => console.log(1)}>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.num}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.group}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
