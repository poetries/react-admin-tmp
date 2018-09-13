import React from 'react';
import styled, {css} from 'styled-components';

const Font = props => {
	let classNames = [], componentClassName = '';
	const {icon, themeSize, themeColor, className, style, onClick} = props;

	classNames.push('fa'); // 基于font-awesome及其基本样式
	icon && (classNames.push('fa-' + icon)); // 图标名称，如icon=“lock"，则fa-block
	themeSize && (classNames.push('fa-' + themeSize)); // 基于fa的尺寸样式类：themeSize="lg/2x/3x/4x/5x" 
	className && (classNames.push(className.split(' ').join(' '))); // 保留对其他className的支持
	componentClassName = classNames.join(' ');

	return <i className={componentClassName} style={style} onClick={onClick} aria-hidden="true"></i>;
}

export const FontAwesome = styled(Font)`
	${props => {
		const {theme, themeColor = 'default'} = props;

		return css`
			color : ${theme.fontAwesome.color[themeColor]};
			position: relative;
			top: 1px;
			cursor: ${props.hover ? 'pointer' : 'auto'};
		`;
	}}
`;

/* ----- 用法示例 ----- */

// import {FontAwesome} from 'PathTo.../components/StyledComponents';
// import {yesdat, nfyg} from 'PathTo.../components/elements/Themes';
// import {ThemeProvider} from 'styled-components';

// render({
// 	return (
// 		<ThemeProvider theme={yesdat}>
// 		<div>
// 			<FontAwesome icon="lock" themeSize="lg" themeColor="primary" />
// 			<FontAwesome icon="spinner" themeSize="2x" themeColor="success" className="fa-fw fa-pulse"/>
// 			<FontAwesome icon="book" themeSize="3x" themeColor="info" />
// 			<FontAwesome icon="bus" themeSize="4x" themeColor="warning" />
// 			<FontAwesome icon="check" themeSize="5x" themeColor="danger" />
// 		</div>
// 		</ThemeProvider>
// 	);
// })


/* ----- 用法说明 ----- */

// Basic
// - 需显示到界面上的图标的名称由icon属性值决定，如icon="bell"，对应className为fa-bell
// - 与theme无关的className可通过className传入，多个className以空格隔开即可
// - 事件处理函数传给onClick即可
// - 可以使用style属性传入行内样式

// Theme
// - 基础样式依赖font-awesome
// - 实际应用中，ThemeProvider应包裹整个APP，搭配Themes.js模块，简单传入{yesdat}或{nfyg}即可实现对整个APP的主题控制
// - 具体到组件（以FontAwesome为例）:
// --- 尺寸由themeSize属性（可选）决定，取值包括lg, 1x, 2x, 3x, 4x, 采用font-awesome的fa-lg, fa-1x, fa-2x等类的样式
// --- 色彩由themeColor属性（可选）决定，取值包括basic, primary, success, info, warning, danger等，默认为default
// --- 注意：色彩不受bootstrap的btn-primary等类的影响，而是定义在Themes.js模块中！