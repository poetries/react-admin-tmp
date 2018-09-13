/**
 * Created by zorochen on 2017/8/28.
 */

import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import {FontAwesome} from '../../components/StyledComponents'

export default class ExtSelectField extends Component {
	state = {
		uiFocus : false,
		uiHover : false
	}
	render() {
		const {children,floatingLabelText,...attrs} = this.props
		return (<div className="wrap-input" onMouseOver={e=>this.setState({uiHover:true})}
					 onMouseOut={e=>this.setState({uiHover:false})}>
			<SelectField
				floatingLabelFixed={this.state.uiHover}
				dropDownMenuProps={{
					anchorOrigin:{vertical:"center" ,horizontal:'left'},
					targetOrigin:{vertical:"top" ,horizontal:'left'}
				}}
				onFocus={e => this.setState({uiFocus:true})}
				onBlur={e => this.setState({uiFocus:false})}
				underlineStyle={{borderLeft:'1px solid #E0E0E0',borderRight:'1px solid #E0E0E0',height:14,pointerEvents:'none'}}
				hintStyle={{paddingLeft:10}}
				inputStyle={{paddingLeft:10}}
				floatingLabelStyle={{paddingLeft:10}}
				floatingLabelText={<span><FontAwesome icon="globe"/>&nbsp;{floatingLabelText}</span>}
				fullWidth={true}
				{...attrs}
			>
				{children}
			</SelectField>
		</div>)
	}
}


