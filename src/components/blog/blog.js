import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import Card from "../../containers/apps/todo/todo.component";
import styles from "../../containers/apps/todo/todo.module.scss";

import themeStyles from "./blog.style";
import scss from "./blog.module.scss";

import logoImage from "../../assets/images/logo-terminal/logo_transparent_terminal.png";

class Blog extends React.Component{
  state = {
    jsonBody: null,
  };

  callApi = async() => {
    const response = await fetch('/test-blog');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return (body);
  };

  componentWillMount() {
    this.callApi()
      .then(body => this.setState({jsonBody: body}));
  }


  render() {
    const {
      classes,
    } = this.props;

    return (
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={classes.background}>
        <Grid item xs={12} className={scss.panel}>
          <Grid
            container
            direction={"column"}
            spacing={16}
            alignItems={"flex-start"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                spacing={16}
                justify={"center"}
                alignItems={"center"}
              >
                <Grid item>
                  <ul>
                    {
                      this.state.jsonBody ? Object.keys(this.state.jsonBody).map((key, index) =>  <li>{key}</li> ) : <li>"Fetch response failed"</li>
                    }
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

const BlogWidget = (props) => {
  return(
    <div>
      <Grid
        spacing={0}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <div>
          <Card className={styles['portal-todo']}>
            <CardContent className={classNames(styles['portal-todo__header'], this.props.classes.headerTheme)}>
              <h2>My daily list</h2>
              <div className={styles['portal-todo__header-demo-mountain']} />
              <div className={styles['portal-todo__header-demo-mountain']} />
              <div className={styles['portal-todo__header-demo-cloud']} />
              <div className={styles['portal-todo__header-demo-sun']} />
            </CardContent>
            <CardContent>
              <List>
                {this.state.todos.map(todo => (
                  <ListItem
                    key={todo.id}
                    onClick={() => this.onTodoChecked(todo)}
                    button
                  >
                    <Checkbox
                      tabIndex={-1}
                      disableRipple
                      checked={todo.checked}
                      onChange={() => this.onTodoChecked(todo)}
                    />
                    <ListItemText
                      style={{ textDecoration: todo.completed ? 'line-through' : '' }}
                      primary={todo.text}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <form onSubmit={this.onSubmit} noValidate autoComplete="off" className={styles['portal-text-centered']}>
            <Button type="button" onClick={() => this.onCheckAll(true)}>Select all</Button>
            <Button type="button" onClick={() => this.onCheckAll(false)}>Deselect all</Button>
            <TextField
              id="name"
              label="Name"
              value={this.state.newTodo}
              margin="normal"
              onChange={this.onInputChange}
            />
            <Button
              type="submit"
              disabled={this.state.newTodo === ''}
            >
              Add item
            </Button>
          </form>
          <div style={{ display: this.showButtons() ? 'block' : 'none' }} className={styles['portal-text-centered']}>
            <Button type="button" onClick={() => this.onCompleteAll(true)}>Complete Selected</Button>
            <Button type="button" onClick={() => this.onCompleteAll(false)}>Uncomplete Selected</Button>
            <Button type="button" onClick={() => this.onDeleteAll()}>Delete Selected</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(themeStyles, { withTheme: true })(Blog);
