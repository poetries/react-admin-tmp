/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {loginAfter, logout, initMsg } from './actions'
import {yesdat, nfyg} from './components/elements/Themes'
import {ThemeProvider} from 'styled-components'
import AlertContainer from 'react-alert';
import 'antd/dist/antd.css'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import { 
	Layout, 
	Menu, 
	Breadcrumb, 
	Row, 
	Col, 
	Divider, 
	Icon, 
	Popconfirm, 
	Modal,
	Button,
	message,
	BackTop 
} from 'antd';
import config from './projectConfig'
import SideMenu from './components/SideMenu'

const { Header, Footer, Content, Sider } = Layout;

class App extends Component {
	state = { visible: false }
	alertOptions = {
		offset: 14,
		position: 'top right',
		theme: 'light',
		time: 3000,
		transition: 'scale'
	}
    constructor(props){
		super(props)
		
        const { accountId } = props;
        this.props.loginAfter({accountId })
		this.state = {
			open: false,
		}
		this.toggleOpen = this.toggleOpen.bind(this)
		this.onSetOpen = this.onSetOpen.bind(this)
		this.showPopup = this.showPopup.bind(this)

		this.logoutLogin = this.logoutLogin.bind(this);

		// 导航选中状态
		this.linkTo = this.linkTo.bind(this);
		this.state = {
			selectedKeys: []
		}
	}
	showPopup({msg:txt,showType:type}) {
		if (!txt)return
		let icon = <Icon type="check-circle" />
		if(type === 'error'){
			icon = <Icon type="info-circle" />
		}
		this.msg.show(txt, {
			type,
			icon
		})
		this.props.initMsg()
	}
	logoutLogin() {
		this.setState({visible: true});
	}
	onSetOpen(open) {
		this.setState({open: open});
	}


	toggleOpen(ev) {
		this.setState({open: !this.state.open});

		if (ev) {
			ev.preventDefault();
		}
	}

	linkTo(item) {
		// this.props.context.location.push(item.key);
	}
	
	componentWillReceiveProps(nProps){
		const {popUpMsg} = nProps;
		if(popUpMsg){
			this.showPopup(popUpMsg.toJS())
		}
		this.setState({
			// selectedKeys: [nProps.context.location.pathname]
		});
	}
	componentDidMount(nProps) {

	}
	componentWillUnmount() {
		
	}

    render() {
		const theme = yesdat;
		const { loginInfo,isShowLogin } = this.props;
		const accountId = loginInfo.getIn(['accountId'])
        return (
			<ThemeProvider theme={theme} >
				<Layout className="layout">
					<Header className="header">
						<Row>
							<Col span="16">
								<div style={{display:'inline-block',verticalAlign:'top'}}>
									<img src={config.logo} alt="Logo" />
									<h1 style={{fontSize:'120%',color:'#fff',display:'inline-block',marginLeft:'10px'}}>{config.projectName}</h1>
								</div>
							</Col>
							<Col span="8" className="right" style={{color:'#ffffffa6',textAlign:'right'}}>
								<Icon type="user" />
								{loginInfo.getIn(['accountName'])}
								<Divider type="vertical" style={{margin:'0 20px'}} />
								<a onClick={this.logoutLogin} data-account-id="{loginInfo.getIn(['accountId'])}">
									<Icon type="logout" /> 退出
								</a>
							</Col>
						</Row>
					</Header>
					<Layout>
						<SideMenu 
						   accountId={accountId}
						/>
						<Layout>
							<Content style={{padding: '0 50px'}}>
								<div className="App page">
									{this.props.children}
								</div>
							</Content>
							<Footer>
								&copy;{moment().format('YYYY')}
								<BackTop style={{right:30,bottom:30}} />
							</Footer>
						</Layout>
					</Layout>
					<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
					<Modal
			          title="退出登录"
			          visible={this.state.visible}
			          onOk={()=>{
			          	this.setState({visible: false})
			          	this.props.logout()
			          }}
			          onCancel={()=>this.setState({visible: false})}
			        >
			          <p>确认退出系统？</p>
		        	</Modal>
				</Layout>
				
			</ThemeProvider>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
		loginInfo 		: state.get('loginInfo'),
		isShowLogin 	: state.get('isShowLogin'),  // 是否已登录
		accountId   	: ownProps.match,
		popUpMsg 		: state.get('popUpMsg'),
		context			: state.get('routing'),
	}
}

export default connect(mapStateToProps, {
    loginAfter,
	logout,
	initMsg
})(App)