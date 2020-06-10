import React, { Component } from 'react'
import GlobalService from '../service/GlobalService';
import { Button, Card, Image } from 'semantic-ui-react';
import ViewMovie from './ViewMovie';
export default class MoviesForUser extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
            movieList: [],
            view: '',
            movId: ''
        }
    }
    componentDidMount = ()=>{
        const {userId} = this.props;
        this.apiService.obtainMovieList({"type":"user"},this.updateList)
    }
    updateList = (movieList)=>{
        this.setState({
            movieList
        })
    }
    viewHandler = (movId)=>{
    this.setState({
            movId,
            view:'view'
        })
    }
    viewChangeHandler = ()=>{
        this.setState({
            view:''
        })
    }
    
    render() {
        const {movieList,view,movId} = this.state;
        const {userId} = this.props;
        const movList = movieList.map((data,index)=>
            (<Card key={data.id}>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={data.imageLink}
                    />
                    <Card.Header>{data.title}</Card.Header>
                    <Card.Meta>{data.crew}</Card.Meta>
                    <Card.Description>
                        {data.plot}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={()=>this.viewHandler(data.id)}>
                        View
                    </Button>
                    
                </div>
                </Card.Content>
            </Card>
            )
        )
        let mainpagenew
        if(view=="view"){
            mainpagenew = <ViewMovie movId={movId} userId={userId} viewChangeHandler={this.viewChangeHandler}/>
        }
        else{
            mainpagenew = (
                <Card.Group>
                    {movList}
                </Card.Group>
            )
        }

        
        return (
            <>
            {mainpagenew}
            </>
            
        )
    }
}
