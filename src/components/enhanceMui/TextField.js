/**
 * Created by zorochen on 2017/8/11.
 */
import React ,{Component} from 'react'
import styled from 'styled-components'
import {FontAwesome,Button} from '../../components/StyledComponents'

import TextField from 'material-ui/TextField';
export default class ExtTextField extends Component{
	state = {
		uiFocus : false,
		uiHover : false
	}

	render(){
		const {noClear,onChange,...attr} = this.props
		// const errClass = errorText?'input-error':''
		// const focusClass = this.state.uiFocus?'input-focus':''
		return (<div className="wrap-input"
					 onMouseOver={e=>this.setState({uiHover:true})}
					 style={{position : 'relative'}}
					 onMouseOut={e=>this.setState({uiHover:false})}>
			<TextField
				multiLine={false}
				fullWidth={true}
				floatingLabelFixed={this.state.uiHover}
				onFocus={e => this.setState({uiFocus:true})}
				onBlur={e => this.setState({uiFocus:false})}
				hintStyle={{paddingLeft:10}}
				inputStyle={{paddingLeft:10}}
				floatingLabelStyle={{paddingLeft:10}}
				underlineStyle={{borderLeft:'1px solid #E0E0E0',borderRight:'1px solid #E0E0E0',height:14,pointerEvents:'none'}}
				onChange={onChange}
				{...attr}
			/>
			{!noClear &&
			<Button link onClick={e => onChange(e,'')} style={{position:'absolute',top:26,right : 30}}>
				<FontAwesome icon="times-circle"  />
			</Button>
			}
		</div>)
	}
}