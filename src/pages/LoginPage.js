
import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from "styled-components"
import {Tabs, Row, Col, message} from 'antd'

import LoginForm from '../components/LoginForm'
import {loadCode, appLogin} from "../AppOpenLogin";
import config from '../projectConfig'

const SectionWrapper = styled.section`
    padding: 25px 34px 18px;
    background: hsla(0,0%,100%,.3);
    .ant-tabs-tab {
        font-size: 14px;
    }
`
const SectionWithLogo = styled.section`
    width: 500px;
    user-select: none;
    position: relative;
    text-align: center;
    & > img {
        width: 200px;
    }
    & > div {
        margin-bottom: 50px;
        color: #19B393;
        padding-top: 9px;
    }
`


class LoginPage extends Component{
    constructor(nProps) {
        super(nProps)

        this.state = {
            isPwdLogin: 1
        }
        this.changeTab = this.changeTab.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.changeImg = this.changeImg.bind(this)
    }
    componentWillMount() {
        this.changeImg()
    }
    changeTab(key) {
        this.setState({
            isPwdLogin: !!+key
        })
    }

    submitForm(data) {
        appLogin(data).then(res => {
            console.log('res:',res)
            if(res.data && res.data && res.data.userId){
                window.top.location = `/v1/${res.data.accountId}`
                
            }else {
                this.changeImg()
            }
        }).catch(e => {
            console.log('e',e)

            if (e.response && e.response.data) {
                message['error'](e.response.data.message)
            }
            this.changeImg()
        })
    }

    changeImg() {
        loadCode().then(url => {
            this.setState({
                captchaUrl: url
            })
        })
    }

    render() {

        const TabPane = Tabs.TabPane

        return (<div style={{display: 'flex', 
            justifyContent:'center', 
            flexDirection: 'column', 
            alignItems:'center',
            height:'100%',
            width:'100%',
            backgroundImage: `url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")`,
            backgroundPosition: 'center 110',
            backgroundSize: '100%'
          }}>
            <section style={{marginBottom: 150}}>
                <SectionWithLogo>
                    <img src={config.logo} alt="logo"/>
                    <div style={{color:'#9da9a6'}}>{config.projectName}</div>
                </SectionWithLogo>
                <SectionWrapper>
                    <LoginForm
                        accountId={'s'}
                        isPwdLogin={this.state.isPwdLogin}
                        submitForm={this.submitForm}
                        changeImg={this.changeImg}
                        captchaUrl={this.state.captchaUrl}/>
                </SectionWrapper>
            </section>
        </div>)
    }

}

const mapStateToProps = (state, ownProps) => {

    return {}

}

export default connect(mapStateToProps, {

})(LoginPage)
