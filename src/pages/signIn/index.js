
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './signin.scss';
import { signIn } from '../../redux/actions';


const SignIn = () => {

  const dispatch = useDispatch();
  const { loading, currentUser, errorMessage } = useSelector(({auth}) => auth);
  console.log(loading, currentUser, errorMessage);
  const signInUser = useCallback((data) =>  dispatch(signIn(data)), []);
  const onFinish = (values) => {
    signInUser({email: values.username, password: values.password});
    console.log(currentUser);
  };

  //  useSignIn();
    return (
      <div className="sign_in">
        <Form
      name="normal_login"
      className="login-form"
      size="large"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
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
  
      </div>
       );
}

// function useSignIn() {
//     const dispatch = useDispatch();
//     const { loading, currentUser, errorMessage } = useSelector(({auth}) => auth);
//     const signInUser = useCallback((data) =>  dispatch(signIn(data)), []);
//     console.log(loading, currentUser, errorMessage);
//     useEffect(() => {
//         signInUser({username: 'heubert', password: '123'});
//     }, [signInUser]);
// }

export default SignIn;