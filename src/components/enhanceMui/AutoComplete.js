/**
 * Created by zorochen on 2017/8/28.
 */

import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import {FontAwesome} from '../../components/StyledComponents'

export default class ExtAutoComplete extends Component {
	state = {
		uiFocus : false,
		uiHover : false
	}
	render() {
		const {floatingLabelText,hintText,...attrs} = this.props
		return (<div className="wrap-input" onMouseOver={e=>this.setState({uiHover:true})}
					 onMouseOut={e=>this.setState({uiHover:false})}>
				<AutoComplete
					maxSearchResults={40}
					menuCloseDelay={50}
					floatingLabelFixed={this.state.uiHover}
					hintText={hintText||'输入过滤'}
					onFocus={e => this.setState({uiFocus:true})}
					onBlur={e => this.setState({uiFocus:false})}
					menuProps={{maxHeight:400}}
					// onUpdateInput={this.handleUpdateInput}
					floatingLabelText={<span><FontAwesome icon="search"/>&nbsp;{floatingLabelText}</span>}
					fullWidth={true}
					openOnFocus={true}
					hintStyle={{paddingLeft:10}}
					inputStyle={{paddingLeft:10}}
					floatingLabelStyle={{paddingLeft:10}}
					underlineStyle={{borderLeft:'1px solid #E0E0E0',borderRight:'1px solid #E0E0E0',height:14,pointerEvents:'none'}}
					{...attrs}
				/>
		</div>)
	}
}

