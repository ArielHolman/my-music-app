import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

export default function DashboardComp() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 320,
    },
    bullet: {
      display: "inline-block",
      margin: "6px 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 10,
    },
    pos: {
      marginBottom: 10,
    },
    textAlign: {
      display: "inline-block",
      margin: "10px 240px",
      // transform: "scale(.8)",
    },
  });

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  })

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const [age, setAge] = React.useState("Normal");

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h2 className={classes.textAlign}>Welcome User,</h2>
      <Box display="flex" justifyContent="space-evenly" m={15}>
        {/* ********* Online mode card ********* */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <br />
            <Typography variant="h5" component="h2" style= {{ fontWeight:"bold" }}>
              Online Mode
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Is this application connected to the internet?
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <Switch
              checked={state.checkedA}
              onChange={handleChangeSwitch}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </CardActions>
        </Card>

        {/* ******** master volume card ********* */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <br />
            <Typography variant="h5" component="h2" style= {{ fontWeight:"bold" }}>
              Master Volume
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Overrides all other sound settings in the application
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <Typography id="continuous-slider" gutterBottom>
              Volume
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
          </CardActions>
        </Card>

        {/* ******** sound quality card ********* */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <br />
            <Typography variant="h5" component="h2" style= {{ fontWeight:"bold" }}>
              Sound Quality
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection.
            </Typography>
            <br />
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl}>
              <Select
                value={age}
                onChange={handleChangeSelect}
                className={classes.selectEmpty}
                style= {{ width:300 }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </Box>
      <Box>
        <h3 className={classes.textAlign}>System Notification</h3>
      </Box>
    </div>
  );
}
