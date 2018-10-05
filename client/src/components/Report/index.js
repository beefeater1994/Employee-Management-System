import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from "@material-ui/core/Typography/Typography";

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
                    <Typography variant="headline" gutterBottom>
                        Direct Reports
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItem button>
                    <Typography variant="subheading" gutterBottom>
                        Elsa
                    </Typography>
                </ListItem>
                <ListItem button>
                    <Typography variant="subheading" gutterBottom>
                        Mark
                    </Typography>
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <Typography variant="subheading" gutterBottom>
                        Bloom
                    </Typography>
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
