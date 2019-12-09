import React, { Component } from 'react';
import {
  Typography,
  TextField,
  Checkbox,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LangCard from './LangCard';

const styles = (theme) => {
  return {
    viewer: {
      backgroundColor: 'lightgrey'
    },
    headerContainer: {
    },
    headerText: {
      paddingLeft: 30,
      paddingTop: 10,
      paddingBottom: 10
    },
    subHeaderContainer: {
      backgroundColor: 'darkblue',
    },
    subHeaderText: {
      paddingLeft: 30,
      paddingTop: 15,
      color: 'white'
    },
    subHeaderText1: {
      paddingLeft: 30,
      paddingBottom: 15,
      color: 'white',
      fontSize: 30,
    },
    inputContainer: {
      paddingLeft: 30,
      // backgroundColor: 'red',
      paddingTop: 10,
      paddingBottom: 15
    },
    inputContainerHeadingContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: 'blue'
    },
    inputHeadingText: {
      paddingTop: 15,
      fontSize: 15,
      paddingBottom: 20
    },
    inputLabelContainer: {
    },
    inputHeadingLabel: {
      paddingBottom: 10,
      fontSize: 10,
      fontStyle: 'bold'
    },
    textField: {
      width: 400,
    },
    recordsViewContainer: {
      // backgroundColor: "orange",
    },
    checkboxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 15,
      paddingLeft: 10,
    },
    inputLabelText: {
      fontSize: 15,
    },
    recordContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 20
    },
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
    ButtonContainer: {
      display: 'flex',
      paddingLeft: 20,
      paddingTop: 25,
      // backgroundColor: 'red'
    }
  }
};

const TABLE_DATA = [
  {
    index: 1,
    recordId: 'Login_Forget MPIN',
    english: 'abcd',
    hindi: 'abc',
    kannada: 'fgh',
    marathi: 'qwer',
    oriya: 'jlk'
  },
  {
    index: 2,
    recordId: 'Login_Forget MPIN',
    english: 'abcd',
    hindi: 'abc',
    kannada: 'fgh',
    marathi: 'qwer',
    oriya: 'jlk'
  },
  {
    index: 3,
    recordId: 'Login_Forget MPIN',
    english: 'abcd',
    hindi: 'abc',
    kannada: 'fgh',
    marathi: 'qwer',
    oriya: 'jlk'
  }
];

class Viewer extends Component {
  state = {
    checkbox: false,
  };

  handleCheckboxChange = (event, checked) => {
    this.setState({ checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.viewer}>
        <div className={classes.headerContainer}>
          <Typography className={classes.headerText}>{"CMS"}</Typography>
        </div>
        <div className={classes.subHeaderContainer}>
          <Typography className={classes.subHeaderText}>Screen 1<br></br></Typography>
          <Typography className={classes.subHeaderText1}>{"LOGIN_ERROR MPIN"}</Typography>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.inputContainerHeadingContainer}>
            <Typography className={classes.inputHeadingText}>{"ADD NEW RECORD"}</Typography>
            <ExpandLessIcon />
          </div>
          <div className={classes.inputLabelContainer}>
            <Typography className={classes.inputHeadingLabel}>{"ENTER RECORD ID"}</Typography>
            <TextField className={classes.textField} id="outlined-basic" variant="outlined"
            style={{ height: 25, width: 300 }}/>
          </div>
          <div className={classes.checkboxContainer}>
            <Typography className={classes.inputHeadingLabel}>{"ENTER RECORD CONTENT"}</Typography>
            <Checkbox
              color="primary"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <Typography className={classes.inputLabelText}>{"Make it speakable"}</Typography>
          </div>
          <div className={classes.recordContainer}>
            <LangCard lang="English" />
            <LangCard lang="Hindi" />
            <LangCard lang="Kannada" />
            <LangCard lang="Marathi" />
            <LangCard lang="Oriya" />
          </div>
          <div className={classes.recordContainer}>
            <LangCard lang="Speakable Content in English" />
            <LangCard lang="Speakable Content in Hindi" />
            <LangCard lang="Speakable Content in Kannada" />
            <LangCard lang="Speakable Content in Marathi" />
            <LangCard lang="Speakable Content in Oriya" />
          </div>
          <div className={classes.ButtonContainer}>
            <Button variant="contained" size="large" color="primary">
              ADD RECORD
            </Button>
          </div>
        </div>
        <hr
          style={{
            color: "black",
            backgroundColor: "lightgrey",
            height: 5
          }}
        />
        <div className={classes.recordsViewContainer}>
          <div>
            <Typography>{"ALL RECORDS"}</Typography>
          </div>
          <div>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">RECORD ID</TableCell>
                  <TableCell align="left">CONTENT IN ENGLISH</TableCell>
                  <TableCell align="left">CONTENT IN HINDI</TableCell>
                  <TableCell align="left">CONTENT IN KANNADA</TableCell>
                  <TableCell align="left">CONTENT IN MARATHI</TableCell>
                  <TableCell align="left">CONTENT IN ORIYA</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TABLE_DATA.map((row, index) => (
                  <TableRow key={row.index}>
                    <TableCell component="th" scope="row">
                      {row.index}
                    </TableCell>
                    <TableCell align="left">{row.recordId}</TableCell>
                    <TableCell align="left">{row.english}</TableCell>
                    <TableCell align="left">{row.hindi}</TableCell>
                    <TableCell align="left">{row.kannada}</TableCell>
                    <TableCell align="left">{row.marathi}</TableCell>
                    <TableCell align="left">{row.oriya}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Viewer);
