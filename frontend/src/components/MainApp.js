import React, { Component } from 'react'
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import AdminHome from './AdminHome';
import UserHome from './UserHome';

class MainApp extends Component {
    constructor(props) {
        super(props)
        
        // this.state = {
        //     role: this.props.data.role 
        // }
    }
    logoutHandler = ()=>{
        localStorage.clear();
        window.location.href = "http://localhost:3000/";
    }
    render() {
        let mainpage
        const {role, userId} = this.props.data;
        console.log(userId,"userId");
        if(role=="admin"){
            mainpage = <AdminHome userid={userId}/>
        }
        else{
            mainpage = <UserHome userid={userId}/>
        }
        return (
            <Container>
                <Header logoutHandler={this.logoutHandler}/>
                {mainpage}
            </Container>
        )
    }
}

export default MainApp;