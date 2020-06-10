import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import StudentList from './StudentList';

export default class TeacherHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: 'studentList'
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
                        name='studentList'
                        active={activeItem === 'studentList'}
                        onClick={this.handleItemClick}
                    >
                    <Link to="/studentList">StudentList</Link>
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

                        <Route path="/studentList" component={(props) => <StudentList {...props} userId={userid} />} />
                        {/* <Route exact path="/forgotPassword" component={} />
                        <Route exact path="/" component={} />  */}
                    </Switch>
                
                </Segment>
                </Router>
            </>
        )
    }
}
