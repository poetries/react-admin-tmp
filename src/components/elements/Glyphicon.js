import React from 'react';
import styled, {css} from 'styled-components';

const Glyph = props => {
	let className = [],
		classNames = '',
		styles = null,
		eventHandler = null;

	className.push('glyphicon');
	(props.children && props.children !== true) && className.push('glyphicon-' + props.children); // 图标名称，如children=“lock"，则fa-block
	(props.themeSize && props.themeSize !== true) && className.push('glyphicon-' + props.themeSize); // 基于fa的尺寸样式类：themeSize="lg/2x/3x/4x/5x" 
	(props.className && props.className !== true ) && className.push(props.className.split(' ').join(' ')); // 保留对其他className的支持
	classNames = className.join(' ');

	(props.style && props.style !== true) && (styles = props.style); // 保留对行内样式的支持
	(props.onClick && props.onClick !== true) && (eventHandler = props.onClick); // 支持click事件处理

	return <i className={classNames} style={styles} onClick={eventHandler} aria-hidden="true"></i>;	

}

export const Glyphicon = styled(Glyph)`
	${props => {
		const theme = props.theme.Glyphicon,
			color = (props.themeColor || 'default');

		return css`
			color : ${theme.color[color]};
		`;
	}}
`;

// 用法同FontAwesome