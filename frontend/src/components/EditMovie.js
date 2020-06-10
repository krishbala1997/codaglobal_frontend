import React, { Component } from 'react'
import { Formik } from 'formik';
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'
import * as Yup from 'yup';
import GlobalService from '../service/GlobalService';

export default class EditMovie extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
             movie: ''
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
    render() {
        console.log(this.state,"------")
        let {          
            title,plot,crew,genere,relasedate,language,imageLink,posterLink
        } = this.state.movie;
        console.log(this.state.movie,"--------------->")
        return (
            <Formik
                        initialValues={{ 
                            title1: this.state.movie.title,
                            plot: plot,
                            crew: crew,
                            genere: genere,
                            relasedate: new Date(),
                            language: language,
                            imageLink: imageLink,
                            posterLink: posterLink,
                            
                            }}
                        validationSchema= {
                            Yup.object({
                                title   : Yup.string().required("Required field"),
                                plot: Yup.string().required("Required field")
                            })

                        }
                        onSubmit={(values) => {
                            values["id"] = this.props.movId+""
                            const {viewChangeHandler} = this.props
                            this.apiService.updateMovie(values,viewChangeHandler)
                            console.log(values)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Field>
                                        <label>title({this.state.movie.title})</label>
                                        <input  type="text"
                                            name="title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title1} 
                                             
                                        />
                                        {errors.title && touched.title && errors.title}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>plot({this.state.movie.plot})</label>
                                        <input  type="text"
                                            name="plot"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.plot} 
                                        />
                                        {errors.plot && touched.plot && errors.plot}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>crew({this.state.movie.crew})</label>
                                        <input  type="text"
                                            name="crew"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.crew} 
                                        />
                                        {errors.crew && touched.crew && errors.crew}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>genere({this.state.movie.genere})</label>
                                        <input  type="text"
                                            name="genere"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.genere} 
                                        />
                                        {errors.genere && touched.genere && errors.genere}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>relasedate({this.state.movie.relasedate})</label>
                                        <input  type="date"
                                            name="relasedate"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.relasedate} 
                                        />
                                        {errors.relasedate && touched.relasedate && errors.relasedate}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>posterLink({this.state.movie.posterLink})</label>
                                        <input  type="text"
                                            name="posterLink"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.posterLink} 
                                        />
                                        {errors.posterLink && touched.posterLink && errors.posterLink}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>language({this.state.movie.language})</label>
                                        <input  type="text"
                                            name="language"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.language} 
                                        />
                                        {errors.language && touched.language && errors.language}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>imageLink({this.state.movie.imageLink})</label>
                                        <input  type="text"
                                            name="imageLink"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.imageLink} 
                                        />
                                        {errors.imageLink && touched.imageLink && errors.imageLink}
                                    </Form.Field>
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            )}
                            
                    </Formik>
        )
    }
}
