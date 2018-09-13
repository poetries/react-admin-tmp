import React, {Component} from 'react'
import styled from 'styled-components'
import {CSSTransitionGroup} from 'react-transition-group'
import {FontAwesome,StyledCloseButton} from '../components/StyledComponents'


const Container = styled.section`
	.drawer-appear {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		z-index : 999;
		transform: translateX(100%);
	}
	.drawer-appear.drawer-appear-active {
		transform: translateX(0);
		transition: transform .5s ease-in;
	}
`

export default class DrawerPage extends Component{

	constructor(){
		super()

	}
	render(){
		return (
			<Container>
				<CSSTransitionGroup
					transitionName="drawer"
					transitionAppear={true} transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}
					// transitionEnterTimeout={500}
					// transitionLeaveTimeout={300}
				>
					<section style={{position: 'fixed', zIndex: '100', left: 50, top:0, right: 0, bottom: 0}}>
						<div style={{position: 'fixed', backgroundColor: 'rgba(160, 160, 160, .3)', left: 0, right: 0, top: 0, height: 45}}/>
						<div style={{position: 'fixed', backgroundColor: 'rgba(160, 160, 160, .3)', width: 50, left: 0, top: 45, bottom: 0}}/>
						<div style={{position: 'fixed', backgroundColor: 'rgba(160, 160, 160, .3)', width: 175, left: 50, top: 45, bottom: 0}}/>
						<div style={{position: 'fixed', backgroundColor: '#F3F4F6', left: 225, top: 45, right: 0, bottom: 0, overflow: 'scroll'}} >
							<StyledCloseButton title="点击收起" onClick={this.props.onClose}><FontAwesome icon="angle-double-right" themeSize="2x" style={{color: '#98560f', cursor: 'pointer'}}/></StyledCloseButton>
							{this.props.children}
						</div>
					</section>
				</CSSTransitionGroup>
			</Container>
		)
	}
}
