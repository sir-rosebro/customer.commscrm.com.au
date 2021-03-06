import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';

import './signin.scss';
import { signIn } from '../../redux/actions';
import Loading from '../../components/loading';

const SignIn = () => {
    const dispatch = useDispatch();
    const [, setToken] = useToken();
    const history = useHistory();
    const { isFetching, loggedInUser } = useSelector(
        ({ auth }) => auth
    );
    console.log(loggedInUser)

    const onFinish = (values) => {
        dispatch(signIn(values));
    };

    useEffect(() => {
        if (loggedInUser) {
            setToken(loggedInUser.token);
            history.push('/dashboard');
        }
    }, [loggedInUser]);

    return (
        <div className="sign_in">
            <Loading isLoading={isFetching}>
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                    />
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
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link className="login-form-forgot" to="/forgot-password">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <Link to="/sign-up">register now!</Link>
                </Form.Item>
            </Form>
        </Loading>
        </div>
    );
};


export default SignIn;
