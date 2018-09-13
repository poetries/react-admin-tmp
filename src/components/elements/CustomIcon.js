import React from 'react'
import styled, {css} from 'styled-components'

export const CustomIcon = styled.i`
	${(props) => {
		const {iconName, size, themeName, hover} = props

		return css`
			display: inline-block;
			width: ${size}px;
			height: ${size}px; 
			background: url(/assets/vendor/theme/${themeName}/img/icon-${iconName}-base.png) 50% 50% no-repeat;
			background-size: contain;
			vertical-align: -1px;
			margin-left: 0.25em;
			cursor: ${hover ? 'pointer' : 'normal'};
		`
	}}
`