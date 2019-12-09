import React, { Component } from 'react';
import {
  Typography,
  TextField
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const styles = (theme) => {
  return {
    langInputContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    langInput: {
      marginLeft: 20,
      marginTop: 15,
    },
    langInputLabel: {
      marginLeft: 20,
      fontSize: 10,
    },
  }
};

class LangCard extends Component {
  render() {
    const { classes, lang } = this.props;
    return (
      <div className={classes.langContainer}>
        <div className={classes.langInputContainer}>
          <Typography className={classes.langInputLabel}>{lang}</Typography>
          <AddOutlinedIcon />
        </div>
        <TextField className={classes.langInput} id="outlined-basic" variant="outlined" multiline />
      </div>
    );
  }
}

export default withStyles(styles)(LangCard);

