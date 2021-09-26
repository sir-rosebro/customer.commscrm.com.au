import React from "react";
import { Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { forgotPassword } from "../../redux/actions";
import './forgotPassword.scss';

const ForgotPassword = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { loading, currentUser, errorMessage, token } = useSelector(
        ({ auth }) => auth
    );
    console.log(loading, currentUser, errorMessage, token);
    const onFinish = (values) => {
        dispatch(forgotPassword(values));
    };

    return (
        <div className="forgotPassword">
            <div className="formWrapper">
                <p className="forgotPasswordText">
                    Please enter the email address you registerd your account with. We
                    will send you reset password confirmation to this email.
                </p>
                <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                autoComplete="off"
                >
                    <div style={{ overflow: 'hidden' }}>
                        <Form.Item
                        name="email"
                        rules={[
                            { required: true },
                            { type: "email"},
                            { message: 'Please enter valid E-mail address.' },
                        ]}
                        >
                        <Input placeholder="Email" />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>      
            </div>  
        </div>
    )
}

export default ForgotPassword;

// match: [
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     "Please provide a valid email",
//   ],