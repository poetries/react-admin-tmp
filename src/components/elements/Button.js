import React from 'react';
import styled, {css} from 'styled-components';

const ButtonBase = (props) => {
	let classNames = [], componentClassName = '', button = null;
	const {input, value, link, href, target, themeSize, className, style, onClick, disabled} = props;

	classNames.push('btn'); // 基于bs的基础按钮样式类
	themeSize && (classNames.push('btn-' + themeSize)); // 基于bs的尺寸样式类：themeSize="block/lg/sm/xs" (bootstrap3 以上版本) 
	className && (classNames.push(className.split(' ').join(' '))); // 保留对其他className的支持
	componentClassName = classNames.join(' ');

	// 根据input或link属性返回input或a标签，默认返回button；
	if (input) {
		button = <input className={componentClassName} style={style} onClick={onClick} disabled={disabled}
			type="button" value={value} />;
	} else if (link) {
		button = <a className={componentClassName} style={style} onClick={onClick} disabled={disabled}
			href={href ? href : 'javascript:;'} target={target ? target : '_blank'}
		> {props.children} </a>;
	} else {
		button = <button className={componentClassName} style={style} onClick={onClick} disabled={disabled}> {props.children} </button>;
	}

	return button;
};

export const Button = styled(ButtonBase)`
	${props => {
		let {theme, themeColor = 'default'} = props;
		
		theme = theme.button;

		if (props.link) {
			return css`
				color: ${props.theme.common.logoAlike};
				&:hover,
				&:focus,
				&:active {
					border-color: transparent;
					box-shadow: none;
					color: ${props.theme.original.Orange.dark};
				} 
			`
		} else {
			return css`
				border-color: ${theme.borderColor[themeColor]};
				background-color: ${theme.backgroundColor[themeColor]};
				background-image: none;
				color: ${theme.color[themeColor]};
				&:focus {
					border-color: ${theme.focus.borderColor[themeColor]};
					background-color: ${theme.focus.backgroundColor[themeColor]};
					background-image: none;
					color: ${theme.focus.color[themeColor]};
				},
				&:hover {
					border-color: ${theme.hover.borderColor[themeColor]};
					background-color: ${theme.hover.backgroundColor[themeColor]};
					background-image: none;
					color: ${theme.hover.color[themeColor]};
				},
				&:active {
					border-color: ${theme.active.borderColor[themeColor]};
					background-color: ${theme.active.backgroundColor[themeColor]};
					background-image: none;
					color: ${theme.active.color[themeColor]};
					&:hover,
					&:focus {
						border-color: ${theme.active.hoverFocus.borderColor[themeColor]};
						background-color: ${theme.active.hoverFocus.backgroundColor[themeColor]};
						background-image: none;
						color: ${theme.active.hoverFocus.color[themeColor]};
					}
				}
			`
		}
	}}
`;

/* ----- 用法示例 ----- */

// import {Button} from 'PathTo.../components/StyledComponents';
// import {yesdat, nfyg} from 'PathTo.../components/elements/Themes';
// import {ThemeProvider} from 'styled-components';

// render({
// 	return (
// 		<ThemeProvider theme={yesdat}>
// 		<div>
// 		   <Button input value="确认" themeSize="sm" cl="default" className="btn-block" onClick={doSomething}/>
// 		   <Button link href="https://www.baidu.com" target="_self"/>
// 		   <Button themeSize="lg" cl="primary"/>
// 		</div>
// 		</ThemeProvider>
// 	);
// })


/* ----- 用法说明 ----- */

// Basic
// - input和link属性指定标签类型为input或a，不指定则默认为button
// - 需显示到界面上的文字由children属性值决定，input标签时由value属性决定
// - 与theme无关的className可通过className传入，多个className以空格隔开即可
// - 事件处理函数传给onClick即可
// - 传入disabled属性以禁用
// - 可以使用style属性传入行内样式

// Theme
// - 基础样式依赖bootstrap 3.x版本（2.x版本themeSize属性值须使用large, small, mini）
// - 实际应用中，ThemeProvider应包裹整个APP，搭配Themes.js模块，简单传入{yesdat}或{nfyg}即可实现对整个APP的主题控制
// - 具体到组件（以Button为例）:
// --- 尺寸由themeSize属性（可选）决定，取值包括large, sm, xs，采用bootstrap的btn-large, btn-sm, btn-xs类样式
// --- 色彩由cl属性（可选）决定，取值包括basic, primary, success, info, warning, danger等，默认为default
// --- 注意：色彩不受bootstrap的btn-primary等类的影响，而是定义在Themes.js模块中！




