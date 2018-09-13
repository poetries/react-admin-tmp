import React, {Component} from 'react'
import {connect} from 'react-redux'
import { 
	Breadcrumb, 
	Row, 
	Col, 
	Divider, 
	Spin, 
	Icon, 
	DatePicker, 
	Input, 
	Button, 
	Table, 
	Modal, 
	Alert,
	List
} from 'antd';
import { Link } from 'react-router-dom'
import {
	fetchCustomers
} from '../actions/';

import { } from '../config/constants';
import HeaderBreadCrumb from '../components/HeaderBreadCrumb'
import DrawerPage from '../components/DrawerPage'

class IndexPage extends Component{

	state = {
	  show:false
	}
	constructor(props) {
		super(props);

	}

    componentDidMount(){
		this.props.fetchCustomers()
    }

    render(){
		const {
			loginInfo,
			customerList
		} = this.props;

		const accountId = loginInfo.getIn(['accountId'])
		
        return (
			<section>
				<HeaderBreadCrumb />
				<Row className="mod" style={{textAlign:'center',fontSize:'120%'}}>
					<List
              			size="large"
              			bordered
              			dataSource={customerList}
              			renderItem={item => (<List.Item>{item.customerId}-{item.customerName}-{item.createdTime}</List.Item>)}
        			/>
				</Row>
			</section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		loginInfo 			: state.get('loginInfo'),
		customerList 		: state.getIn(['customerList','data']).toJS()
    } 
}

export default connect(mapStateToProps, {
	fetchCustomers
})(IndexPage)