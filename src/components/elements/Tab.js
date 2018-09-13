import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	padding: 7px 25px;
	background-color: #333;
	color: #fefefe;
	line-height: 1.42857143;
	border: 1px solid transparent;
	border-radius: 4px 4px 0 0;
	position: relative;
	top: 6px;
	display: block;
	text-decoration: none;
	&:hover {
		border-bottom-color: transparent;
		background-color: #222;
		color: #eee;
		text-decoration: none;
	}
	&:focus,
	&.active {
		top: 0;
		padding: 13px 25px 7px;
		background-color: #fff;
		color: #333;
		text-decoration: none;
		border-color: #ddd;
		border-bottom-color: transparent;
		&:hover {
			border-bottom-color: transparent;
			background-color: #eee;
			color: #333;
		}
	}
`;

const Ul = styled.ul`
	border-bottom: 1px solid #ddd; 
	padding-left: 0; 
	margin-bottom: 0;
	line-height: 1.42857143; 
	display: block;
	&:before {
		content: " ";
		display: table;
		box-sizing: border-box;
	};
	&:after {
		content: " ";
		display: table;
		box-sizing: border-box;
		clear: both;
	};
	box-sizing: border-box;
`;

const Li = styled.li`
	display: block;
	float: left;
	margin-bottom: -1px;
`;

export class Tab extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: 'package#first'
		}	
	}

	handleClick(e) {
		const path = e.target.href.split('/')[3];
		this.setState({
			active: path
		});
	}

	render() {
		return (
			<section className="m-15">
				<Ul>
					<Li>
						<StyledLink href="/package#first" 
							className={this.state.active == 'package#first' ? 'active' : ''}
							onClick={this.handleClick.bind(this)} 
						>按人群扩展</StyledLink>
					</Li>
					<Li>
						<StyledLink href="/package#second" 
							className={this.state.active == 'package#second' ? 'active' : ''}
							onClick={this.handleClick.bind(this)}
						>按APP扩展</StyledLink>
					</Li>
				</Ul>
				<div id="first" style={{border: '1px solid #ddd', borderTop: 0, display: this.state.active === 'package#first' ? 'block' : 'none', padding: '15px', borderRadius: '0 0 4px 4px' }}>
					人群<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga temporibus eius, eligendi dignissimos, fugit ut perspiciatis esse molestias quidem voluptatem at illum repudiandae commodi iure illo, libero voluptatibus sit laudantium.	
				</div>
				<div id="second" style={{border: '1px solid #ddd', borderTop: 0, display: this.state.active === 'package#second' ? 'block' : 'none', padding: '15px', borderRadius: '0 0 4px 4px' }}>
					APP<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolorum, quos, nemo autem vel impedit ipsam, sit eligendi distinctio nam enim! Nisi alias sint quasi unde, mollitia quos praesentium voluptates.
				</div>
			</section>
		);
	}
}
