/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid,react/no-unescaped-entities */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';

const styles = ({ breakpoints, palette }) => {
  const cover = '/static/media/bg_login.jpg';
  const backDropBG = 'rgba(0,0,0,0)';
  return {
    root: {
      // when you use it, change to 100vh
      // "100vh" is not perfect for all screen ex. iPhone X

      // 2 solutions
      // https://github.com/ulrichformann/react-div-100vh
      // https://github.com/mvasin/react-div-100vh
      width: '100%',
      textAlign: 'left',
      height: "100vh", // todo change to "100vh" or use react-div-100vh
      position: 'relative',
      backgroundImage: `url(${process.env.PUBLIC_URL}${cover})`,
      backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
      // color: '#ffffff',
      [breakpoints.only('xs')]: {
        position: 'relative',
        // height: 566,
      },
    },
    appBar: {
      background: 'none',
    },
    backDrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: backDropBG,
    },
    container: {
      height: '100%',
      zIndex: 2,
      position: 'relative',
    },
    mlNormal: {
      marginLeft: 16,
    },
    content: {
      padding: 16,
    },
    // input: {
    //   background: 'rgba(255,255,255,0.16)',
    //   '&:hover': {
    //     background: 'rgba(255,255,255,0.24)',
    //   },
    //   '&$focused': {
    //     background: 'rgba(255,255,255,0.24)',
    //   },
    // },
    // inputInput: {
    //   color: '#ffffff',
    // },
    underline: {
      '&:after': {
        borderColor: palette.primary.light,
      },
    },
    focused: {},
    // inputLabel: {
    //   color: '#ffffff',
    //   opacity: 0.8,
    //   '&$focused': {
    //     opacity: 1,
    //     color: '#ffffff',
    //   },
    // },
    // checkbox: {
    //   color: 'rgba(255,255,255,0.87)',
    // },
    // checkboxLabel: {
    //   color: 'rgba(255,255,255,0.87)',
    // },
    grey: {
      color: '#c5c5c5',
    },
    buttonLabel: {
      textTransform: 'none',
    },
    bottomSignUp: {
      textAlign: 'center',
      marginTop: 24,
      marginBottom: 16,
    },
    forgetPassword: {
      textAlign: 'center',
      // color: '#ffffff',
      [breakpoints.only('xs')]: {
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      [breakpoints.up('sm')]: {
        marginTop: 40,
      },
    },
  };
};

// DL02 = DashboardLogin02
// I think we don't have to use the full name, it's redundant.
const DashboardLogin02 = withStyles(styles, { name: 'LoginPage' })(
  ({ classes }) => (
    <div className={classes.root}>
      <div className={classes.backDrop} />
      <Grid className={classes.container} container justify={'center'}>
        <Grid
          className={classes.content}
          item
          xs={12}
          sm={6}
          md={5}
          lg={4}
          container
          alignItems={'center'}
        >
          <form>
            <TextField
              fullWidth
              label={'Username'}
              margin={'normal'}
              variant="outlined"
              classes={{}}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: classes.focused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.input,
                  focused: classes.focused,
                  underline: classes.underline,
                  input: classes.inputInput
                },
              }}
            />
            <TextField
              fullWidth
              label={'Password'}
              margin={'normal'}
              variant="outlined"
              type={'password'}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: classes.focused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.input,
                  focused: classes.focused,
                  underline: classes.underline,
                  input: classes.inputInput
                },
              }}
            />
            <FormControl fullWidth>
              <FormControlLabel
                control={
                  <Checkbox value="checkedC" className={classes.checkbox} />
                }
                label="Remember Me"
                classes={{
                  label: classes.checkboxLabel,
                }}
              />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <Button
                classes={{ label: classes.buttonLabel }}
                fullWidth
                variant={'contained'}
                color={'primary'}
                size={'large'}
              >
                Log in
              </Button>
            </FormControl>
            <Hidden smUp>
              <div className={classes.bottomSignUp}>
                <Typography className={classes.grey}>
                  Not a member ?
                  <Link color={'secondary'} className={classes.mlNormal}>
                    Sign Up Now
                  </Link>
                </Typography>
              </div>
            </Hidden>
            <div className={classes.forgetPassword}>
              <Typography color={'inherit'}>
                <Link color={'inherit'}>Forget your password ?</Link>
              </Typography>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  ),
)

DashboardLogin02.getTheme = () => {};
DashboardLogin02.metadata = {
  name: 'Dashboard Login Template II',
  description: 'Dark Mode',
};

export default DashboardLogin02;
