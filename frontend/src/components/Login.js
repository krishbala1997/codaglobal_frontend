import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import GlobalService from '../service/GlobalService';
class Login extends Component {
    constructor(props) {
        super(props)
        this.apiService = new GlobalService()
        this.state = {
            isInvalid : false
        }
    }
    validateUserStatus = (res)=>{
        const {handleLogin} = this.props
        console.log(res.status)
        if(res.status){
            handleLogin(res)
        }
        else{
            this.setState({
                isInvalid: true 
            })
        }
    }
    
    render() {
        return (
            <Container className="login-box-container">
                <Segment raised className="login-box">
                    <h2 className="center">Login</h2>
                    {this.state.isInvalid?"Invalid Username / password":""}
                    <Formik
                        initialValues={{ userName: '', password: '' }}
                        validationSchema= {
                            Yup.object({
                                userName: Yup.string().email("Invalid email format").required("Required field"),
                                password: Yup.string().required("Required field")
                            })

                        }
                        onSubmit={(values) => {
                            this.apiService.validateUser(values,this.validateUserStatus)
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
                                        <label>User Name</label>
                                        <input  type="email"
                                            name="userName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName} 
                                        />
                                        {errors.userName && touched.userName && errors.userName}
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Password</label>
                                        <input type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} />
                                        {errors.password && touched.password && errors.password}
                                    </Form.Field>
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            )}
                            
                    </Formik>

                </Segment>
            </Container>
        )
    }
}

export default Login;