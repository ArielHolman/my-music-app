import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Switch from "@material-ui/core/Switch"
import Grid from "@material-ui/core/Grid"
import Slider from "@material-ui/core/Slider"
import VolumeDown from "@material-ui/icons/VolumeDown"
import VolumeUp from "@material-ui/icons/VolumeUp"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Box from "@material-ui/core/Box"

export default function DashboardComp() {
  // ******** States ***********
  const [quality, setQuality] = React.useState("2")
  const [volume, setVolume] = React.useState(" ")
  const [online, setState] = React.useState({
    isOnline: true,
    isNotOnline: false,
  })
  const [notification, setNotification] = React.useState({
    online: " ",
    volume: " ",
    quality: " ",
  })

  // ******** Styles ***********
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
    },
  })

  const classes = useStyles()

  // ********* Change functions **************
  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume)
    if (newVolume > 79) {
      setNotification({
        ...notification,
        volume:
          "*Listening to music at a high volume could cause long-term hearing loss.*",
      })
    } else {
      setNotification({ ...notification, volume: " " })
    }
  };

  const handleChangeSwitch = (event) => {
    setState({ ...online, [event.target.name]: event.target.checked })
    if (!event.target.checked) {
          setNotification({
            ...notification,
            online:
              "*Your application is offline. You won't be able to share or stream music to other devices.*",
          });
        } else {
          setNotification({ ...notification, online: " " });
        }
  };

  const handleChangeSelect = (event) => {
    setQuality(event.target.value)
    if (event.target.value === "1") {
          setNotification({
            ...notification,
            quality:
              "*Music quality is degraded. Increase quality if your connection allows it.*",
          });
        } else {
          setNotification({ ...notification, quality: " " });
        }
  };

  // *********** Page Body ************
  return (
    <div>
      <h2 className={classes.textAlign}>Welcome User,</h2>
      <Box display="flex" justifyContent="space-evenly" m={15}>
        {/* ********* Online mode card ********* */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <br />
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
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
              checked={online.isOnline}
              onChange={handleChangeSwitch}
              name="isOnline"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </CardActions>
        </Card>

        {/* ******** master volume card ********* */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <br />
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
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
                  Value={volume}
                  onChange={handleVolumeChange}
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
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
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
                value={quality}
                onChange={handleChangeSelect}
                style={{ width: 300 }}
              >
                <MenuItem value={"1"}>Low</MenuItem>
                <MenuItem value={"2"}>Normal</MenuItem>
                <MenuItem value={"3"}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
      </Box>
      <Box className={classes.textAlign}>
        <h3>System Notification</h3>
        <Typography style={{ color: "#F60157" }}> {notification.online} </Typography>
        <Typography style={{ color: "#F60157" }}> {notification.volume} </Typography>
        <Typography style={{ color: "#F60157" }}> {notification.quality} </Typography>
      </Box>
    </div>
  )
}
