import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'
import * as Yup from 'yup';
import GlobalService from '../service/GlobalService';
import {  Icon, Image, Item, Label } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
export default class ViewMovie extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
             movie: []
        }
    }
    componentDidMount = ()=>{
        
        const {movId} = this.props;
        this.apiService.obtainMovie({"id":movId+""},this.updateMovie)
    }
    
    updateMovie = (movie)=>{
        console.log(movie,"movie")
        this.setState({     
            movie
        })
    }
    handleRate = (e, { rating, maxRating }) =>{
        const {userId} = this.props;
        const {movId} = this.props;
        this.apiService.updateRating({"id":movId+"","userId":userId+"","rating":rating},()=>{})
    }

    render() {
        console.log(this.state,"------")
        const {          
            title,plot,crew,genere,relasedate,language,imageLink,posterLink
        } = this.state.movie;
        console.log(typeof title,"--------------->")
        const paragraph="asass"
        return (
           <Item.Group divided>
    <Item>
      <Item.Image src={imageLink} />

      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{plot}</span>
        </Item.Meta>
        <Item.Description>{crew}</Item.Description>
        <Item.Extra>
          <Label>{relasedate}</Label>
          <Label icon='globe' content={language} />
        </Item.Extra>
        <Rating icon='star' defaultRating={0} maxRating={5} onRate={this.handleRate}/>
      </Item.Content>
    </Item>

    
    
  </Item.Group>
        )
    }
}
