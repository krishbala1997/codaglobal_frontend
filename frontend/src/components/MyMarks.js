import React, { Component } from 'react'
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react';
import GlobalService from '../service/GlobalService';
export default class MyMarks extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
             markList: []
        }
    }
    componentDidMount = ()=>{
        const {userId} = this.props;
        this.apiService.obtainMarks({"id": userId+""},this.updateMark)
    }
    updateMark = (markList)=>{
        this.setState({
            markList
        })
    }
    render() {
        const {markList} = this.state
        const markData = markList.map((data,index)=>
            (
                <Table.Row key={data.id}>
                    <Table.Cell>
                        <Label ribbon>{data.sname}</Label>
                    </Table.Cell>
                    <Table.Cell>{data.mark}</Table.Cell>
                </Table.Row>
            )
        )
        return (
            <Table celled compact unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Subject</Table.HeaderCell>
                        <Table.HeaderCell>Mark</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {markData}
                    
                </Table.Body>

                {/* <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Button primary>Edit</Button>
                    </Table.HeaderCell>
                </Table.Row>
                
                </Table.Footer> */}
            </Table>
        )
    }
}
