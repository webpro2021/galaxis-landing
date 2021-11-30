import React, {useState} from 'react'
import { useRouter } from 'next/router'

import { Box, Grid, Input, Select, Button, InputAdornment, TextareaAutosize } from '@material-ui/core';
import useStyles from './SecondScreen.style';
import FastTypography from '../../UI/FastTypography'
import FastIcon from '../../UI/FastIcon'

const positions = [
  "Investor",
  "Consumer",
  "Influencer",
  "Brand",
];

export default function ThirdScreen() {
  const classes = useStyles();
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [position, setPosition] = useState(positions[0]);
  const [message, setMessage] = useState(null);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        phone,
        linkedIn,
        position,
        message,
      })
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return(
    <Box className={classes.root} id="contact-us">
      {!showForm ? ( <Box className={classes.videoContainer}>
        <Box
          className={classes.videoPlay}
          onClick={(e) => {
            setShowForm(true);
          }}
        >
          <FastIcon iconName="play" width={108} height={108}/>
        </Box>
      </Box>
       ) : status.submitted ? ( <Box className={classes.container} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <FastTypography type="h4" weight="bold" className={classes.title}>
          Thank you for your interest. We have received your information and we will reach out soon to schedule a demo showcase
        </FastTypography>
        <Box className={classes.buttonContainer} style={{marginTop: 200}}>
          <Button variant="contained" color="primary" onClick={() => {
            router.push("/");
          }}>
            OK
          </Button>
        </Box>
      </Box> ) : (
      <Box className={classes.container}>
        <FastTypography type="h4" weight="bold" className={classes.title}>
          Do you want to see our secret sauce ? Fill out the form or scroll down to contact us
        </FastTypography>
        <form className={classes.form} autoComplete="off" onSubmit={handleOnSubmit}>
          <Grid container spacing={3}>
            <Grid lg={4} md={6} sm={12} xs={12} item>
              <Input
                placeholder="Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FastIcon iconName="name" width={24} height={25}  className={classes.icon}/>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12} item>
              <Input
                placeholder="Email"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FastIcon iconName="email" width={24} height={25}  className={classes.icon}/>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid lg={4} md={6} sm={12} xs={12} item>
              <Select
                native
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FastIcon iconName="person" width={24} height={25}  className={classes.icon}/>
                  </InputAdornment>
                }
              >
                {positions.map((item, i) => (
                  <option value={item} key={i}>{item}</option>
                ))}
              </Select>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid lg={2} md={12} sm={12} xs={12} item></Grid>
            <Grid lg={8} md={12} sm={12} xs={12} item className={classes.secondRow}>
              <Input
                placeholder="LinkedIn"
                onChange={(e) => {
                  setLinkedIn(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FastIcon iconName="linkedin" width={24} height={25} className={classes.icon}/>
                  </InputAdornment>
                }
              />
              <FastTypography type="h6" style={{margin: "10px 15px"}}>OR</FastTypography>
              <Input
                placeholder="Phone Number"
                type="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FastIcon iconName="smartphone" width={24} height={25}  className={classes.icon}/>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid lg={2} md={12} sm={12} xs={12} item></Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid lg={2} md={12} sm={12} xs={12} item></Grid>
            <Grid lg={8} md={12} sm={12} xs={12} item className={classes.secondRow}>
              <TextareaAutosize
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className={classes.content}
                placeholder="Type your message to us"
              />
            </Grid>
            <Grid lg={2} md={12} sm={12} xs={12} item></Grid>
          </Grid>

          <Box className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary" disabled={status.submitting} >
              Submit
            </Button>
          </Box>
        </form>
        {status.info.error && (
          <FastTypography type="h6" weight="bold" className={classes.error}>
            Something went wront! Please try again!
          </FastTypography>
        )}
      </Box> )}
    </Box>
  )
}