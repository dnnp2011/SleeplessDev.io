import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import classNames from "classnames";
import { auth } from "../../../firebase/index";

import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import themeStyles from "./admin-login.style";
import scss from "./admin-login.module.scss";

import logoImage from "../../../assets/images/logo-terminal/logo_transparent_terminal.png";

const INIT_STATE = {
  email: "",
  password: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});


class Login extends React.Component {

  state = {
    ...INIT_STATE
  };

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState(() => ({ ...INIT_STATE }));
          // Push to home
          history.push("/");
        })
        .catch(error => {
          this.setState(byPropKey("error", error));
        });

    event.preventDefault();
  };

  handleInput = (event) => {
    this.setState(byPropKey(event.target.name, event.target.value));
  };

  render() {
    const {
      classes,
      width,
      history
    } = this.props;

    // Flip container to column on mobile screens.
    const panelDirection = width === "xs" ? "column" : "row";

    const { email, password, error } = this.state;
    const emailValid = email !== "" && email.includes("@");
    const passwordValid = password !== "";
    const isInvalid = !emailValid || !passwordValid;

    return (
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}
      >
        <Grid item sm={10} xs={12} className={scss.panel}>
          <Grid direction={panelDirection} container spacing={0}>
            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={classNames(scss.card, classes["primary-card"])}>
                <CardContent className={scss["signup-content"]}>
                  <img src={logoImage} className={scss["signup-logo"]} alt="logo"/>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Admin Login
                  </Typography>
                  <Typography component="p" gutterBottom>
                    This is the SleeplessDev admin login page. Accounts are not yet open to the public, however, I have plans
                    to make additional services available in the future.
                  </Typography>
                </CardContent>
                <CardActions>
                  {/*<Button fullWidth onClick={() => history.push("/register")} color="secondary" variant="raised">Create
                    an account</Button>*/}
                </CardActions>
              </Card>
            </Grid>            <Grid
              item
              sm={6}
              xs={12}
            >
              <Card className={scss.card}>
                <CardContent>
                  <TextField
                    label="Email Address"
                    variant={"fullWidth"}
                    value={email}
                    onChange={event => this.handleInput(event)}
                    name='email'
                    valid={emailValid}
                  />
                  <TextField
                    label="Password"
                    variant={"fullWidth"}
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={event => this.handleInput(event)}
                    name='password'
                    valid={passwordValid}
                  />
                  <br/>
                  {error && <p style={{ textAlign: "center" }}>{error.message}</p>}
                </CardContent>
                <CardActions className={scss["login-actions"]}>
                  <Button disabled={isInvalid} color="primary" onClick={event => this.onSubmit(event)}
                          variant="contained">Login</Button>
                  {/*<Button href="/forgot-password">Forgot Password</Button>*/}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};


const LoginWithRouter = withRouter(Login);
export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(LoginWithRouter);
