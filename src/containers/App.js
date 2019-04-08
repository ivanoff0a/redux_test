import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import User from '../components/User'
import Page from '../components/Page'
import { setYear } from '../actions/PageActions'
import { getDataTodos } from "../actions/todosAction";
import { getDataPhotos } from "../actions/photosAction";

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
    this.props.getPhotos();
  }

  render() {
    const { user, page, setYear, todos, photos } = this.props;
    console.log(todos);
    console.log(photos);
    return <div>
      <User name={ user.name } />
      <Page photos={ page.photos } year = { page.year } setYear={setYear}/>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user:  state.user,
    page: state.page,
    todos: state.todos,
    photos: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
      setYear: (year) => {dispatch(setYear(year))},
      getTodos: () => {dispatch(getDataTodos())},
      getPhotos: () => {dispatch(getDataPhotos())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
