import {injectGlobal} from 'styled-components';

injectGlobal`
	body {
		background: #F3F4F6;
		font-size: 14px;
		/* font-family: 'Lucida Sans Unicode', '微软雅黑', Courier; */
	}
	ul, ol {
		list-style: none;
	}
	.ml-15 {
	  margin-left: 15px;
	}
	.mr-15 {
	  margin-right: 15px;
	}
	.mt-15 {
	  margin-top: 15px;
	}
	.mb-15 {
	  margin-bottom: 15px;
	}
	.m-15 {
	  margin: 15px;
	}
	.bg-white {
		background: #fff;
	}
	.text-ellipsis {
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
	}
`;