import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import GlobalService from '../service/GlobalService';
export default class StudentList extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
             studentList: []
        }
    }
    componentDidMount = ()=>{
        const {userId} = this.props;
        this.apiService.obtainUserList({"id": userId+""},this.updateUserList)
    }
    updateUserList = (studentList)=>{
        console.log(studentList,"*************#")
        this.setState({
            studentList
        })
    }
    deleteHandler = (stuId)=>{
        const {userId} = this.props;
        const studentList = this.state.studentList.filter((data)=>
            data.id!=stuId
        )
        console.log("stuId",stuId)
        this.apiService.deleteUser({"id": stuId+""},()=>{})
      //  this.apiService.obtainUserList({"id": userId+""},this.updateUserList())
        this.setState({
            studentList
        })
    }
    render() {
        const {studentList} = this.state;
        const stuData = studentList.map((data,index)=>
            (<Card key={data.id}>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Meta>{data.email}</Card.Meta>
                    <Card.Description>
                        I am a student
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        View Marks
                    </Button>
                    <Button basic color='red' onClick={()=>this.deleteHandler(data.id)}>
                        Delete
                    </Button>
                </div>
                </Card.Content>
            </Card>
            )
        )
        return (
            <Card.Group>
                {stuData}
            </Card.Group>
        )
    }
}
