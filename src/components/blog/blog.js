import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import dayjs from "dayjs";
import { Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import Card from "../../containers/apps/todo/todo.component";
import styles from "../../containers/apps/todo/todo.module.scss";
import LinkListWidget from "../widgets/link-list-widget/link-list-widget.component";

import themeStyles from "./blog.style";
import scss from "./blog.module.scss";

import BlogOverview from "./components/blog-overview/blog-overview.component";
import BlogView from "./components/blog-view/blog-view.component";


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogViewId: this.props.match.params.id ? this.props.match.params.id : null,
      archiveDrawerOpen: false,
      linkListOpen: true,
    };
  }


  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.blogViewId && !nextProps.match.params.id) {
      this.setState({ blogViewId: null });
    }
    else if (!this.state.blogViewId && nextProps.match.params.id) {
      this.setState({ blogViewId: nextProps.match.params.id });
    }
  }

  setBlogId = (id) => {
    this.setState({ blogViewId: id });
  };

  render() {
    const {
      classes,
      width
    } = this.props;


    const { blogViewId } = this.state;

    const placeholderLinks = [
      { label: "Link 1", props: { onClick: ()=>{console.log("clicked link 1")} } },
      { label: "Link 2", props: { onClick: ()=>{console.log("Clicked link 2")} } },
      { label: "Link 3", props: { onClick: ()=>{console.log("Clicked link 3")} } }
    ];

    return (
      <Grid
        container
        direction='row'
        spacing={ 0 }
        justify='center'
        alignItems='center'
      >
        <Grid item className={ classNames(scss.panel, classes.background) }>
          <Grid container spacing={0} direction={isWidthDown("sm", width, true) ? "column" : "row"}>
            <Grid item md={10} sm={12}>
              {
                !!blogViewId
                ? <BlogView id={ blogViewId } />
                : <BlogOverview setBlogId={ this.setBlogId } />
              }
            </Grid>
            <Grid item md={2} sm={12}>
              <LinkListWidget fullWidth links={ placeholderLinks } />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


Blog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(Blog);

const BlogWidget = (props) => {
  return (
    <div>
      <Grid
        spacing={ 0 }
        container
        direction='row'
        alignItems='center'
        justify='center'
      >
        <div>
          <Card className={ styles["portal-todo"] }>
            <CardContent className={ classNames(styles["portal-todo__header"], this.props.classes.headerTheme) }>
              <h2>My daily list</h2>
              <div className={ styles["portal-todo__header-demo-mountain"] } />
              <div className={ styles["portal-todo__header-demo-mountain"] } />
              <div className={ styles["portal-todo__header-demo-cloud"] } />
              <div className={ styles["portal-todo__header-demo-sun"] } />
            </CardContent>
            <CardContent>
              <List>
                { this.state.todos.map(todo => (
                  <ListItem
                    key={ todo.id }
                    onClick={ () => this.onTodoChecked(todo) }
                    button
                  >
                    <Checkbox
                      tabIndex={ -1 }
                      disableRipple
                      checked={ todo.checked }
                      onChange={ () => this.onTodoChecked(todo) }
                    />
                    <ListItemText
                      style={ { textDecoration: todo.completed ? "line-through" : "" } }
                      primary={ todo.text }
                    />
                  </ListItem>
                )) }
              </List>
            </CardContent>
          </Card>
          <form onSubmit={ this.onSubmit } noValidate autoComplete='off' className={ styles["portal-text-centered"] }>
            <Button type='button' onClick={ () => this.onCheckAll(true) }>Select all</Button>
            <Button type='button' onClick={ () => this.onCheckAll(false) }>Deselect all</Button>
            <TextField
              id='name'
              label='Name'
              value={ this.state.newTodo }
              margin='normal'
              onChange={ this.onInputChange }
            />
            <Button
              type='submit'
              disabled={ this.state.newTodo === "" }
            >
              Add item
            </Button>
          </form>
          <div style={ { display: this.showButtons() ? "block" : "none" } } className={ styles["portal-text-centered"] }>
            <Button type='button' onClick={ () => this.onCompleteAll(true) }>Complete Selected</Button>
            <Button type='button' onClick={ () => this.onCompleteAll(false) }>Uncomplete Selected</Button>
            <Button type='button' onClick={ () => this.onDeleteAll() }>Delete Selected</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};