import React, {Component} from 'react';
import {Breadcrumb,Icon} from 'antd'
import { Link } from 'react-router-dom'
import config from '../projectConfig'

export default class HeaderBreadCrumb extends Component{
	render(){
		const pathname = location.pathname.replace(/(\/\d+)/,'/:accountId')
		return (<Breadcrumb>
			{config.menu.map(v=>{
				if(v.children){
					return v.children.map(vv=>{
						if(vv.path==pathname){
							return <Breadcrumb.Item key={vv.text}> <Icon type="home" /> {vv.text} </Breadcrumb.Item>
						}
					})
				}
				  
				if(v.path==pathname){
					return <Breadcrumb.Item key={v.text}> <Icon type="home" /> {v.text} </Breadcrumb.Item>
				}
				
				
			})}

		</Breadcrumb>)
	}
}
