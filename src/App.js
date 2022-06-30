import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';   // This is importing the two identified packages from @material-ui/core/styles 
import NavBar from './components/Navbar'
import { Typography } from '@material-ui/core';
import Grid from './components/Grid'
import Footer from './components/Footer';
import './App.css';

//Custom Components from MUI
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


// Creating createMuiTheme as a function in order to call and modifiing styles

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main: '#c7d8ed',
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
  });


  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem"
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    },
  })


 //Using ThemeProvider to name the prop 
function App() {
  const classes = styles();

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
      <NavBar></NavBar>

      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary">
          Welcome to my Developer Portfolio
        </Typography>
      </div>
      
      <div className={`${classes.grid} ${classes.bigSpace}`}>
      <Grid icon={<SecurityIcon style= {{fill: "#4360a6", height:"125", width:"125"}}></SecurityIcon>} title="Secure" buttonTitle="Show me More"></Grid>
      <Grid icon={<EventNoteIcon style= {{fill: "#449A76", height:"125", width:"125"}}></EventNoteIcon>} title="Reliable" buttonTitle="Show me More"></Grid>
      <Grid icon={<TrendingUpIcon style= {{fill: "#D05B2D", height:"125", width:"125"}}></TrendingUpIcon>} title="Performant" buttonTitle="Show me More"></Grid>
      </div>

      <div className={`${classes.grid} ${classes.bigSpace}`}>
      <Grid icon={<ImportExportIcon style= {{fill: "#4360a6", height:"125", width:"125"}}></ImportExportIcon>} title="Modular" buttonTitle="Show me More"></Grid>
      <Grid icon={<ComputerIcon style= {{fill: "#449A76", height:"125", width:"125"}}></ComputerIcon>} title="Multi=Platform" buttonTitle="Show me More"></Grid>
      <Grid icon={<HttpIcon style= {{fill: "#D05B2D", height:"125", width:"125"}}></HttpIcon>} title="Connected" buttonTitle="Show me More"></Grid>
      </div>

      <div className={classes.bigSpace}>
        <Footer></Footer>
      </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
