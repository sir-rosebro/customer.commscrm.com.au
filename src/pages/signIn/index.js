
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './signin.scss';
import { signIn } from '../../redux/actions';


const SignIn = () => {
    const onFinish = (values) => {
      console.log('Finish:', values);
    };

    useSignIn();
    return (
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
   );
}

function useSignIn() {
    const dispatch = useDispatch();
    const { signningIn, currentUser, errorMessage } = useSelector(({auth}) => auth);
    const signInUser = useCallback((data) =>  dispatch(signIn(data)), []); 
    console.log({signningIn, currentUser, errorMessage});
    
    useEffect(() => {
        signInUser({username: 'heubert', password: '123'});
    }, [signInUser]);
}

export default SignIn;