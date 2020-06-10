import React, { Component } from 'react'
import { Icon, Label, Menu, Table,Button,Form } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import GlobalService from '../service/GlobalService';
export default class MyProfileEdit extends Component {
    constructor(props) {
        super(props)       
        this.apiService = new GlobalService()
        this.state = {
             
        }
    }
    updateHandler = (value)=>{
        console.log(value,"*************")
        this.props.updateHandler(value)
    }
    render() {
        const {id, name, email} = this.props.userData;
        return (
            <Formik
                initialValues={{ name: name, email: email }}
                validationSchema= {
                    Yup.object({
                        email: Yup.string().email("Invalid email format").required("Required field"),
                        name : Yup.string().required("Required field")
                    })

                }
                onSubmit={(values) => {
                    values["id"] = id+"";
                    this.apiService.updateProfile(values,this.updateHandler)
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
                                <label>Name</label>
                                <input  type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} 
                                />
                                {errors.name && touched.name && errors.name}
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} />
                                {errors.email && touched.email && errors.email}
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    )}
                    
            </Formik>
        )
    }
}
