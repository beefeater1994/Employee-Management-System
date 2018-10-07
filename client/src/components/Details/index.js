import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
    },
});

function SimpleList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eric" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="View Manager" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="View Direct Reports" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Call Office" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Call Cell" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="SMS" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Email" />
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
