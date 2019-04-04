import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import User from '../components/User'
import Page from '../components/Page'
import { setYear } from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page, setYear } = this.props;
    return <div>
      <User name={ user.name } />
      <Page photos={ page.photos } year = { page.year } setYear={setYear}/>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user:  state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
      setYear: (year) => {dispatch(setYear(year))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
