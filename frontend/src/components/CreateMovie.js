import React, { Component } from 'react'
import { Formik } from 'formik';
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'
import * as Yup from 'yup';
import GlobalService from '../service/GlobalService';
export default class CreateMovie extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
             
        }
    }
    createHandler = ()=>{
        this.props.history.push("/movies")
    }
    render() {
        return (
            <Formik
                        initialValues={{ 
                            title: '',
                            plot: '',
                            crew: '',
                            genere: '',
                            relasedate: new Date(),
                            language: '',
                            imageLink: '',
                            posterLink: '',
                            
                            }}
                        validationSchema= {
                            Yup.object({
                                title: Yup.string().required("Required field"),
                                plot: Yup.string().required("Required field")
                            })

                        }
                        onSubmit={(values) => {
                            values["id"] = this.props.userId
                            this.apiService.createMovie(values,this.createHandler)
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
                                        <label>title</label>
                                        <input  type="text"
                                            name="title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.title} 
                                        />
                                        {errors.title && touched.title && errors.title}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>plot</label>
                                        <input  type="text"
                                            name="plot"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.plot} 
                                        />
                                        {errors.plot && touched.plot && errors.plot}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>crew</label>
                                        <input  type="text"
                                            name="crew"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.crew} 
                                        />
                                        {errors.crew && touched.crew && errors.crew}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>genere</label>
                                        <input  type="text"
                                            name="genere"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.genere} 
                                        />
                                        {errors.genere && touched.genere && errors.genere}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>relasedate</label>
                                        <input  type="date"
                                            name="relasedate"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.relasedate} 
                                        />
                                        {errors.relasedate && touched.relasedate && errors.relasedate}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>posterLink</label>
                                        <input  type="text"
                                            name="posterLink"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.posterLink} 
                                        />
                                        {errors.posterLink && touched.posterLink && errors.posterLink}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>language</label>
                                        <input  type="text"
                                            name="language"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.language} 
                                        />
                                        {errors.language && touched.language && errors.language}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>imageLink</label>
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
