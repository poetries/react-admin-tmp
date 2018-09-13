import React from 'react';
import styled, {css, withTheme} from 'styled-components';
import {FontAwesome} from './FontAwesome';
import {Button} from './Button';

const alignMapping = {
	table 	: 'left',
	chart 	: 'right'
};

const iconMapping = {
	table 	: 'table',
	chart 	: 'line-chart'
};

const Span = styled.span`
	${props => {
		let {theme, themeSize = 'md', status} = props;
		
		theme = theme.tableChartSwitcher.span;

		return css`
			display: inline-block;
			position: relative;
			width: ${theme.width[themeSize]};
			height: ${theme.height[themeSize]};
			line-height: ${theme.height[themeSize]};
			font-size: ${theme.fontSize[themeSize]};
			padding: 0 ${theme.padding[themeSize]};
			border: 1px solid #ddd;
			background-color: ${theme.backgroundColor[status]};
			border-radius: 3px;
			text-align: ${alignMapping[status]};
			vertical-align: ${theme.verticalAlign[themeSize]};
			&:hover {
				cursor: pointer;
			}
		`;
	}}
`;

const StyledButton = styled(Button)`
	${props => {
		let {theme, status, themeSize = 'md'} = props;
		
		theme = theme.tableChartSwitcher.button;

		return css`
			position: absolute;
			marginTop: ${theme.marginTop[themeSize]};
			opacity: 1 !important;
			right: ${status === 'table' ? 0 : 'auto'};
			left: ${status === 'chart' ? 0 : 'auto'};
			box-shadow: 0 0 1px 1px #ddd;
		`;
	}}
`;

const Switch = (props) => {
	const {theme, status, themeSize = 'md', onClick} = props;
	const icon = <FontAwesome
		hover
		icon={iconMapping[status]}
		themeColor='basic'
		className={status === 'pending' ? 'fa-fw fa-pulse' : ''}
		style={{width: '1.2em'}}
	/>;

	return (
		<Span theme={theme} themeSize={themeSize} status={status} onClick={onClick}>
			<FontAwesome hover icon="bar-chart" themeColor="primary" style={{display: status === 'table' ? 'inline-block' : 'none', top: '0'}} />
			<StyledButton theme={theme} themeSize={themeSize} themeColor="info" status={status} disabled={props.status === 'pending'} >
				{icon}
			</StyledButton>
			<FontAwesome hover icon="table" themeColor="primary" style={{display: status === 'chart' ? 'inline-block' : 'none', top: '0'}} />
		</Span>
	);
};

export const TableChartSwitcher = withTheme(Switch); // 非styled方式生成的组件，为了获得themeProvider传来的theme，须经高阶函数withTheme()加工


/* ----- 用法示例 ----- */

// import {TableChartSwitcher, FontAwesome} from 'PathTo.../components/StyledComponents';
// import {yesdat, nfyg} from 'PathTo.../components/elements/Themes';
// import {ThemeProvider} from 'styled-components';

// render({
// 	return (
// 		<ThemeProvider theme={yesdat}>
// 			<div>
// 				<TableChartSwitcher themeSize="sm" status='table' />} />
// 			</div>
// 		</ThemeProvider>
// 	);
// })

/* ----- 用法说明 ----- */

// Basic
// - status属性支持两种不同状态（table, chart），对应主图标（fa-table, fa-line-chart）
// - 事件处理函数传给onClick即可
// - 本身没有state，切换时请从更高级组件传入props.status

// Theme
// - 该组件基于StyledButton和FontAwesome元件
// - 实际应用中，ThemeProvider应包裹整个APP，搭配Themes.js模块，简单传入{yesdat}或{nfyg}即可实现对整个APP的主题控制
// - 具体到组件（以TableChartSwitcher为例）:
// --- 尺寸由themeSize属性（可选）决定，取值包括xs, sm, md，对应尺寸取值定义在Themes中
// --- 暂不支持自定义色彩
