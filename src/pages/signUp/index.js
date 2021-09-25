import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useHistory } from 'react-router-dom';

import { signup } from '../../redux/actions';
import { Form, Input, Row, Col, Checkbox, Button } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
import './signup.scss';
const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, currentUser, errorMessage, redirect } = useSelector(
        ({ auth }) => auth
    );
    const signupUser = useCallback((data) => dispatch(signup(data)), []);
    console.log(loading, currentUser, errorMessage);
    const [form] = Form.useForm();
    const [isAddressSame, setAddressSame] = useState(true);

    const onFinish = (values) => {
        signupUser({
            id: 100,
            password: values.password,
            businessName: values.business_name,
            contactName: values.contact_name,
            contactNumber: values.home_number,
            mobile: values.mobile,
            email: values.email,
            billingAddress: values.billing_address,
            shippingAddress: values.billing_address,
            accountNumber: values.account_number,
        });
    };

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect]);

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <span>+61</span>
        </Form.Item>
    );

    <Spin />;

    return (
        <div className={`sign_up ${loading ? 'overlay' : false}`}>
            {loading && <Spin size="large" />}
            <div className="sign_up_box">
                <div className="sign_up_image_wrapper">
                    <div className="sign_up_image_title">
                        <h1>Set up your account</h1>
                        <h3>Fill in your profile details.</h3>
                    </div>
                    <img
                        src="/img/sign_up.png"
                        alt="people getting connceted via internet"
                    />
                </div>
                <div className="form_wrapper">
                    <Form
                        {...formItemLayout}
                        form={form}
                        layout="vertical"
                        name="register"
                        size="large"
                        onFinish={onFinish}
                        initialValues={{
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Row gutter={8}>
                                <Col span={12}>
                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        tooltip="Put alphanumeric minimum 6 characters"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (
                                                        !value ||
                                                        getFieldValue(
                                                            'password'
                                                        ) === value
                                                    ) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject(
                                                        new Error(
                                                            'The two passwords that you entered do not match!'
                                                        )
                                                    );
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            name="business_name"
                            label="Business Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input business name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="contact_name"
                            label="Contact Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input contact name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Row gutter={8}>
                                <Col span={12}>
                                    <Form.Item
                                        name="home_number"
                                        label="Home Number"
                                        tooltip="Put alphanumeric minimum 6 characters"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input addonBefore={prefixSelector} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="mobile"
                                        label="Mobile"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please confirm your password!',
                                            },
                                        ]}
                                    >
                                        <Input addonBefore={prefixSelector} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            name="billing_address"
                            label="Billing Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input billing address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Checkbox
                            checked={isAddressSame}
                            onChange={() => setAddressSame(!isAddressSame)}
                        >
                            Billing address is same as shipping address.
                        </Checkbox>

                        {!isAddressSame && (
                            <Form.Item
                                name="shipping_address"
                                label="Shipping Address"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input shipping address!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        )}

                        <Form.Item
                            name="account_number"
                            label="Account Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input account number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(
                                                  new Error(
                                                      'Should accept agreement'
                                                  )
                                              ),
                                },
                            ]}
                        >
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={loading}
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
