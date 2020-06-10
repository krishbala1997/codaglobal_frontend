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
export default class AdminHome extends Component {
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
                    <Link to="/movies">Movie List</Link>
                    </Menu.Item>
                    <Menu.Item
                        name='create'
                        active={activeItem === 'create'}
                        onClick={this.handleItemClick}
                    >
                    <Link to="/movieCreate">Create Movie</Link>
                    </Menu.Item>
                    
                </Menu>

                <Segment attached='bottom'>
                
                    <Switch>

                        <Route path="/movies" component={(props) => <MovieList {...props} userId={userid} />} />
                        <Route path="/movieCreate" component={(props) => <CreateMovie {...props} userId={userid} />} />
                        {/* <Route exact path="/forgotPassword" component={} />
                        <Route exact path="/" component={} />  */}
                    </Switch>
                
                </Segment>
                </Router>
            </>
        )
    }
}
