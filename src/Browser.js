import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  Typography,
  Button,
  List,
  Paper,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = (theme) => {
  return {
    viewer: {
      backgroundColor: 'lightgrey'
    },
    headerText: {
      paddingLeft: 50,
      paddingTop: 10,
      paddingBottom: 10
    },
    subHeaderContainer: {
      backgroundColor: 'darkblue',
    },
    subHeaderText: {
      paddingLeft: 50,
      paddingTop: 20,
      paddingBottom: 15,
      color: 'white',
      fontSize: 20,
    },
    subHeaderText1: {
      paddingLeft: 50,
      paddingTop: 20,
      paddingBottom: 15,
      color: 'blue',
      fontSize: 20,
    },
    headingContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    button: {
      height: 30,
      width: 200,
      backgroundColor: 'darkblue',
      color: 'white'
    },
    cardContainer: {
      marginLeft: 280,
      marginRight: 240,
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'darkblue',
      marginTop: 10,
      marginBottom: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 15,
      paddingRight: 15,
    },
    cardText: {
      paddingLeft: 50,
      paddingTop: 20,
      paddingBottom: 15,
    }
  }
};

const TABLE_DATA = [
  {
    name: 'Login_Forget Password',
    records: 20,
  },
  {
    name: 'Login_Error Pin',
    records: 13,
  },
  {
    name: 'Home_CVA Chat',
    records: 31,
  },
  {
    name: 'Home_CVA menu',
    records: 19,
  },
  {
    name: 'Bill_payments',
    records: 34,
  },
  {
    name: 'Home_CVA chat',
    records: 19,
  }
]

class Browser extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.viewer}>
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>{"CMS"}</Typography>
        </div>
        <div className={classes.subHeaderContainer}>
          <Typography className={classes.subHeaderText}>{"PROJECT_NAME"}</Typography>
        </div>
        <div className={classes.outputContainer}>
          <div className={classes.headingContainer}>
            <Typography className={classes.subHeaderText1}>{"PROJECT SCREENS"}</Typography>
            <Button variant="outlined" className={classes.button} color="primary">
              ADD RECORD
            </Button> 
          </div>
        </div>
        <div className={classes.cardContainer}>
          <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
            <List
              className="List"
              itemCount={100}
              itemSize={35}
            >
            {
                TABLE_DATA.map(row => (
                <div className={classes.card}>
                  <Typography>{row.name}</Typography>
                    <Typography>{`${row.records} RECORDS`}</Typography>
                </div>
                ))
            }
            </List>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Browser);
