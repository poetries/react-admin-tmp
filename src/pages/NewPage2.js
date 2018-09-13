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
	Alert 
} from 'antd';
import { Link } from 'react-router-dom'
import {
	
} from '../actions/';

import {

} from '../config/constants';
import HeaderBreadCrumb from '../components/HeaderBreadCrumb'


class NewPage2 extends Component{

	state = {

	}
	constructor(props) {
		super(props);

	}

    componentDidMount(){
		
    }

    render(){
		const {
			loginInfo
		} = this.props;

		const accountId = loginInfo.getIn(['accountId'])
		

        return (
			<section>
				<HeaderBreadCrumb />
				<Row className="mod" style={{textAlign:'center',fontSize:'120%'}}>
					NewPage2
				</Row>
			</section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
		loginInfo 			: state.get('loginInfo')
    } 
}

export default connect(mapStateToProps, {

})(NewPage2)
