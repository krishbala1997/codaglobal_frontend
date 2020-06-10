import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';
import MoviesForUser from './MoviesForUser';
export default class UserHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: 'movies'
        }
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state;
        const { userid } = this.props;
        return (
            <>
            <Router>
                <Menu attached='top' tabular>
                    <Menu.Item
                        name='movies'
                        active={activeItem === 'movies'}
                        onClick={this.handleItemClick}
                    >
                    <Link to="/moviesForUser">Movie List</Link>
                    </Menu.Item>
                   
                    
                </Menu>

                <Segment attached='bottom'>
                
                    <Switch>

                        <Route path="/moviesForUser" component={(props) => <MoviesForUser {...props} userId={userid} />} />
                        {/* <Route exact path="/forgotPassword" component={} />
                        <Route exact path="/" component={} />  */}
                    </Switch>
                
                </Segment>
                </Router>
            </>
        )
    }
}
