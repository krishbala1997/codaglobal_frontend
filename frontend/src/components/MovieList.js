import React, { Component } from 'react'
import GlobalService from '../service/GlobalService';
import { Button, Card, Image } from 'semantic-ui-react';
import EditMovie from './EditMovie';
import { Rating } from 'semantic-ui-react'
export default class MovieList extends Component {
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
            this.apiService.obtainMovieList({"id":userId},this.updateList)
        }
        updateList = (movieList)=>{
            this.setState({
                movieList
            })
        }
        editHandler = (movId)=>{
        this.setState({
                movId,
                view:'edit'
            })
        }
        viewChangeHandler = ()=>{
            this.setState({
                view:''
            })
        }
        deleteHandler = (movId)=>{
            const movieList = this.state.movieList.filter((data)=>
                data.id!=movId
            )
            console.log("stuId",movId)
            this.apiService.deleteMovie({"id": movId+""},()=>{})
        //  this.apiService.obtainUserList({"id": userId+""},this.updateUserList())
            this.setState({
                movieList
            })
        }
        render() {
            const {movieList,view,movId} = this.state;
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
                            Plot: {data.plot}
                        </Card.Description>
                        <Card.Description>
                            Date: {data.relasedate}
                        </Card.Description>
                        <Card.Description>
                            Crew: {data.crew}
                        </Card.Description>
                        <Rating icon='star' defaultRating={0} maxRating={4} disabled/>
                    </Card.Content>
                    <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={()=>this.editHandler(data.id)}>
                            Edit
                        </Button>
                        <Button basic color='red' onClick={()=>this.deleteHandler(data.id)}>
                            Delete
                        </Button>
                    </div>
                    </Card.Content>
                </Card>
                )
            )
            let mainpagenew
            if(view=="edit"){
                mainpagenew = <EditMovie movId={movId} viewChangeHandler={this.viewChangeHandler}/>
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
