import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import MyProfileEdit from '../components/MyProfileEdit'
import GlobalService from '../service/GlobalService';
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
            editMode:false,
            userData: {},
        }
    }
    componentDidMount = ()=>{
        const {userId} = this.props;
        this.apiService.obtainProfile({"id": userId+""},this.updateProfile)
    }
    updateProfile = (value)=>{
        this.setState({
            userData:value
        })
    }
    editProfile = ()=>{
        this.setState({editMode:true})
    }
    updateHandler = (userData)=>{
        console.log(userData,"*************#")
        this.setState({
            userData,
            editMode: false
        })
    }
    render() {
        console.log(this.props, "-----")
        const {name,email} = this.state.userData;
        const {editMode} = this.state;
        if(editMode){
            return (<MyProfileEdit userData={this.state.userData} updateHandler={this.updateHandler}/>)
        }
        else{
            return  (<Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{email}</Card.Meta>
                    <Card.Description>
                        I am a student
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button primary onClick={this.editProfile}>
                        Edit
                    </Button>
                </Card.Content>
            </Card>)
        } 
        
    }
}
