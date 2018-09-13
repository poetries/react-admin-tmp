
import React,{Component} from 'react'
import {Form, Input, Row, Col, Icon, Button} from 'antd'
import styled from 'styled-components'

import {loadCode, customLogin} from "../AppOpenLogin";

const FormWrapper = styled.section`
     .login-form-forgot {
      float: right;
    }
     .login-form-button {
      width: 100%;
    }
    & input {
        height: 46px;
        font-size: 18px;
    }
    & button {
        height: 46px;
        font-size: 18px;
    }
    .ant-input-group-addon > .ant-btn {
        height: 44px;
        font-size: 15px;
        font-weight: bolder;
        color: #3289FF;
        padding: 0;
        border: 0;
    }
    .ant-input-group-addon > .ant-btn-clicked:after {
        content: none;
    }
`

class LoginForm extends Component{
    constructor(nProps) {
        super(nProps)

        const {accountId} = nProps
        this.state = {
            accountId,
            email: '',
            password: '',
            codeDisabled: false,
            codeColor: '#3289FF',
            codeText: '获取邮箱验证码'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.verifyCodeClick = this.verifyCodeClick.bind(this)
    }

    handleSubmit(e) {
        const {submitForm} = this.props
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('submit no error')
                submitForm && submitForm(values)
            }
        })
    }

    verifyCodeClick() {
        var countdown = 59;
        const settime = () => {
            var disabled, bgColor, text
            if (countdown == '-1') {
                disabled = false
                bgColor = '#3289FF'
                text = '重新获取验证码'
                countdown = 59;
            } else {
                disabled = true
                bgColor = '#3289FF'
                text = '重新发送 ' + countdown + ' S'
                countdown--;
                setTimeout(function () {
                    settime()
                }, 1000);//1s后执行settime（）函数；
            };
            this.setState({
                codeDisabled: disabled,
                codeColor: bgColor,
                codeText: text
            })
        }
        settime();
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {isPwdLogin, changeImg,captchaUrl} = this.props
        const {codeDisabled, codeText, codeColor} = this.state
        const formItemLayout = {
            wrapperCol: { span: 20,offset: 2}
        }
        const Item = Form.Item
        const codeStyle = {
            width: 98,
            color: codeColor
        }
        return (<FormWrapper>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Item
                        {...formItemLayout}>
                        {getFieldDecorator('email', {
                            validateTrigger: ['onChange'],
                            rules: [{required: true, message: 'Please input your email!'},
                                    {type: 'email',  message: '邮箱格式错误'}]
                        })(<Input placeholder="邮箱" type='email'/>)}
                    </Item>
                    {isPwdLogin &&
                    <Item
                        {...formItemLayout}>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your password!'}]
                        })(<Input type="password" placeholder="密码" />)}
                    </Item>}
                    {!isPwdLogin &&
                    <Item
                        {...formItemLayout}>
                        {getFieldDecorator('a3', {
                            rules: [{ required: true, message: 'Please input your code!'}]
                        })(
                            <Input type="text"
                                   placeholder="6位邮箱验证码"
                                   addonAfter={<Button disabled={codeDisabled} style={codeStyle} onClick={this.verifyCodeClick}>{codeText}</Button>} />)}
                    </Item>}

                    <Item
                        {...formItemLayout}>
                        {getFieldDecorator('captcha', {
                            rules: [{ required: true, message: 'Please input your captcha!'}]
                        })(<Input type='text' placeholder='验证码' addonAfter={
                                <img id="captchaImg" src={captchaUrl}
                                     style={{margin: 0,padding: 0,width:98,height: 44,borderRadius:'0 5px 5px 0',cursor: 'pointer'}}
                                     onClick={changeImg}/>
                        }/>)}
                    </Item>
                    <Row><Col span='20' offset='2'>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Col></Row>
            </Form>
        </FormWrapper>)
    }

}

export default Form.create()(LoginForm)


