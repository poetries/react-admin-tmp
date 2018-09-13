import React from 'react';
import styled, {css, withTheme} from 'styled-components';
import {FontAwesome} from './FontAwesome';
import {Button} from './Button';

export const iconMapping = {
	unlocked 	: 'unlock',
	locked 	: 'lock',
	pending : 'spinner'
};
const colorMapping = {
	unlocked 	: 'info',
	locked 	: 'primary',
	pending : 'primary'
};
const alignMapping = {
	unlocked 	: 'left',
	locked 	: 'right',
	pending : 'center'
};

const Span = styled.span`
	${props => {
		let {theme, themeSize = 'xs', status} = props;
		
		theme = theme.switcher.span;

		return css`
			display: inline-block;
			position: relative;
			width: ${theme.width[themeSize]};
			height: ${theme.height[themeSize]};
			line-height: ${theme.height[themeSize]};
			font-size: ${theme.fontSize[themeSize]};
			padding: 0 ${theme.padding[themeSize]} 1px;
			border: 1px solid #ddd;
			background-color: ${theme.backgroundColor[status]};
			color: ${theme.color[status]};
			border-radius: 3px;
			text-align: ${alignMapping[status]};
			vertical-align: ${theme.verticalAlign[themeSize]};
		`;
	}}
`;

const StyledButton = styled(Button)`
	${props => {
		let {theme, status, themeSize = 'xs'} = props;
		
		theme = theme.switcher.button;

		return css`
			position: absolute;
			marginTop: ${theme.marginTop[themeSize]};
			opacity: 1 !important;
			right: ${status === 'unlocked' ? 0 : 'auto'};
			left: ${status === 'locked' ? 0 : (status === 'pending' ? theme.left[themeSize] : 'auto')};
			box-shadow: 0 0 1px 1px #ddd;
		`;
	}}
`;

const Switch = (props) => {
	const {theme, status, themeSize = 'xs', onClick} = props;

	const icon = <FontAwesome
		hover
		icon={iconMapping[status]}
		themeColor={colorMapping[status]}
		className={status == 'pending' ? 'fa-fw fa-pulse' : ''}
		style={{width: '1.2em'}}
	/>;

	return (
		<Span theme={theme} themeSize={themeSize} status={status} >
			<StyledButton theme={theme} themeSize={themeSize} status={status} disabled={status === 'pending'} onClick={onClick}>
				{icon}
			</StyledButton>
		</Span>
	);
};

export const Switcher = withTheme(Switch); // 非styled方式生成的组件，为了获得themeProvider传来的theme，须经高阶函数withTheme()加工


/* ----- 用法示例 ----- */

// import {Switcher, Fa} from 'PathTo.../components/StyledComponents';
// import {yesdat, nfyg} from 'PathTo.../components/elements/Themes';
// import {ThemeProvider} from 'styled-components';

// render({
// 	return (
// 		<ThemeProvider theme={yesdat}>
// 			<div>
// 				<Switcher themeSize="sm" status='pending' />} />
// 			</div>
// 		</ThemeProvider>
// 	);
// })

/* ----- 用法说明 ----- */

// Basic
// - status属性支持三种不同状态（unlocked, locked, pending），对应三个主图标（fa-unlock, fa-lock, fa-spinner）
// - 事件处理函数传给onClick即可
// - 本身没有state，切换时请从更高级组件传入props.status

// Theme
// - 该组件基于StyledButton和FontAwesome元件
// - 实际应用中，ThemeProvider应包裹整个APP，搭配Themes.js模块，简单传入{yesdat}或{nfyg}即可实现对整个APP的主题控制
// - 具体到组件（以Switcher为例）:
// --- 尺寸由themeSize属性（可选）决定，取值包括xs, sm, md，对应尺寸取值定义在Themes中
// --- 暂不支持自定义色彩（后续添加支持）
