import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Profile from './Profile';
import MyMarks from './MyMarks';
  
export default class StudentHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: 'profile'
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
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                    >
                    <Link to="/profile">Profile</Link>
                    </Menu.Item>
                    <Menu.Item
                        name='marks'
                        active={activeItem === 'marks'}
                        onClick={this.handleItemClick}
                    >
                    <Link to="/mymarks">Marks</Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>    
                        <Menu.Item>
                            <Input
                                transparent
                                icon={{ name: 'search', link: true }}
                                placeholder='Search users...'
                            />
                            
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment attached='bottom'>
                
                    <Switch>

                        <Route path="/profile" component={(props) => <Profile {...props} userId={userid} />} />
                        <Route path="/mymarks" component={(props) => <MyMarks {...props} userId={userid} />} />
                        {/* <Route exact path="/forgotPassword" component={} />
                        <Route exact path="/" component={} />  */}
                    </Switch>
                
                </Segment>
                </Router>
            </>
        )
    }
}
