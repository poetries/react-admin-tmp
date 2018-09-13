import * as Colors from './Colors';

const yesdatColors = {
	basic: '#fff',
	default: Colors.lightGray,
	primary: Colors.ElegentBlack.base,
	success: Colors.darkGreen,
	info: Colors.lightGreen,
	warning: Colors.colorWarning,
	danger: Colors.colorDanger,

	logoAlike: Colors.Orange.base
};

export const yesdat = {
	themeName: 'yesdat',
	common: yesdatColors,
	original: Colors,
	container: {
		backgroundColor: '#fff',
		lightGrayBgcolor: Colors.LightGray.lighter
	},
	button: {
		borderColor 	: {
			basic 	: '#bbb',
			default : '#ccc',
			primary : '#222',
			success : '#546310',
			info 	: '#9aba05',
			warning : '#eea236',
			danger 	: '#b8b8b8'
		},
		backgroundColor : {
			basic 	: yesdatColors.default,
			default : yesdatColors.basic,
			primary : yesdatColors.primary,
			success : yesdatColors.success,
			info 	: yesdatColors.info,
			warning : yesdatColors.warning,
			danger 	: yesdatColors.danger
		},
		color 			: {
			basic 	: '#fff',
			default : '#333',
			primary : '#fff',
			success : '#fff',
			info 	: '#fff',
			warning : '#fff',
			danger 	: '#fff'
		},
		focus 			: {
			borderColor 		: {
				basic 	: '#ababab',
				default : '#8c8c8c',
				primary : '#121212',
				success : '#374508',
				info 	: '#8a9f02',
				warning : '#985f0d',
				danger 	: '#aaa',
			},
			backgroundColor 	: {
				basic 	: '#b8b8b8',
				default : '#e6e6e6',
				primary : '#252525',
				success : '#546310',
				info 	: '#9aba05',
				warning : '#ec971f',
				danger 	: '#a13a39'
			},
			color 				: {
				basic 	: '#fff',
				default : '#333',
				primary : '#fff',
				success : '#fff',
				info 	: '#fff',
				warning : '#fff',
				danger 	: '#fff'
			}
		},
		hover 			: {
			borderColor 		: {
				basic 	: '#ababab',
				default : '#adadad',
				primary : '#151515',
				success : '#48590d',
				info 	: '#86a903',
				warning : '#d58512',
				danger  : '#adadad'
			},
			backgroundColor 	: {
				basic 	: '#b8b8b8',
				default : '#e6e6e6',
				primary	: '#252525',
				success	: '#546310',
				info	: '#9aba05',
				warning : '#ec971f',
				danger 	: '#9f3938'	
			},
			color 				: {
				basic 	: '#fff',
				default : '#333',
				primary : '#fff',
				success : '#fff',
				info 	: '#fff',
				warning : '#fff',
				danger 	: '#fff'
			}
		},
		active 			: {
			borderColor 		: {
				basic 	: '#ababab',
				default : '#adadad',
				primary : '#151515',
				success : '#48590d',
				info 	: '#86a903',
				warning : '#d58512',
				danger  : '#adadad'
			},
			backgroundColor 	: {
				basic 	: '#b8b8b8',
				default : '#e6e6e6',
				primary : '#252525',
				success : '#546310',
				info 	: '#9aba05',
				warning : '#ec971f',
				danger 	: '#a13a39'
			},
			color 				: {
				basic 	: '#fff',
				default : '#333',
				primary : '#fff',
				success : '#fff',
				info 	: '#fff',
				warning : '#fff',
				danger 	: '#fff'
			},
			hoverFocus 	: {
				borderColor 	: {
					basic 	: '#a2a2a2',
					default : '#8c8c8c',
					primary : '#111111',
					success	: '#374508',
					info 	: '#7a9602',
					warning : '#985f0d',
					danger 	: '#9e9e9e'
				},
				backgroundColor : {
					basic 	: 'bbb',
					default : '#d4d4d4',
					primary : '#212121',
					success : '#425809',
					info 	: '#86a903',
					warning : '#d58512',
					danger 	: '#a13a39'
				},
				color 			: {
					basic 	: 'fff',
					default : '#333',
					primary : '#fff',
					success : '#fff',
					info 	: '#fff',
					warning : '#fff',
					danger 	: '#fff'
				}
			}
		}
	},
	fontAwesome: {
		color 	: {
			basic 	: yesdatColors.basic,
			default : yesdatColors.default,
			primary : yesdatColors.primary,
			success : yesdatColors.success,
			info 	: yesdatColors.info,
			warning : yesdatColors.warning,
			danger 	: yesdatColors.danger
		}
	},
	glyphicon: {
		color 	: {
			basic 	: yesdatColors.basic,
			default : yesdatColors.default,
			primary : yesdatColors.primary,
			success : yesdatColors.success,
			info 	: yesdatColors.info,
			warning : yesdatColors.warning,
			danger 	: yesdatColors.danger
		}
	},
	switcher: {
		span: {
			width: {
				xs: '44px',
				sm: '56px',
				md: '68px',
			},
			height: {
				xs: '18px',
				sm: '22px',
				md: '26px',
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				md: '14px',
			},
			padding: {
				xs: '3px',
				sm: '4px',
				md: '7px'
			},
			verticalAlign: {
				xs: '-5px',
				sm: '-6px',
				md: '-9px'
			},
			backgroundColor: {
				unlocked: yesdatColors.info,
				locked: yesdatColors.default,
				pending: yesdatColors.default
			},
			color: {
				unlocked: '#fff',
				locked: '#333',
				pending: '#333'
			}
		},
		button: {
			marginTop: {
				xs: '-3px',
				sm: '-5px',
				md: '-5px'
			},
			left: {
				xs: '18%',
				sm: '16%',
				md: '17%'
			}
		}
	},
	tableChartSwitcher: {
		span: {
			width: {
				xs: '44px',
				sm: '56px',
				md: '68px',
			},
			height: {
				xs: '18px',
				sm: '22px',
				md: '26px',
			},
			fontSize: {
				xs: '12px',
				sm: '14px',
				md: '14px',
			},
			padding: {
				xs: '3px',
				sm: '4px',
				md: '7px'
			},
			verticalAlign: {
				xs: '-5px',
				sm: '-6px',
				md: '-9px'
			},
			backgroundColor: {
				table: yesdatColors.default,
				chart: yesdatColors.default,
			},
			color: {
				table: '#333',
				chart: '#333'
			}
		},
		button: {
			backgroundColor: {
				basic 	: yesdatColors.basic,
				default : yesdatColors.default,
				primary : yesdatColors.primary,
				success : yesdatColors.success,
				info 	: yesdatColors.info,
				warning : yesdatColors.warning,
				danger 	: yesdatColors.danger
			},
			marginTop: {
				xs: '-3px',
				sm: '-5px',
				md: '-5px'
			},
			left: {
				xs: '18%',
				sm: '16%',
				md: '17%'
			}
		}
	},
	dataDigPanel: {
		taxonomyList: {
			color: yesdatColors.info
		},
		resultPill: {
			backgroundColor: yesdatColors.info
		}
	},
	headerBar: {
		mainBgcolor: yesdatColors.primary,
		btnBgcolor: Colors.LightBlue.base,
		mainColor: yesdatColors.basic,
		darkColor: yesdatColors.default,
		borderColor: Colors.ElegentBlack.lighter
	},
	sideMenu: {
		styledLink: {
			backgroundColor: yesdatColors.logoAlike,
			borderColor: Colors.ElegentBlack.lighter
		},
		container: {
			backgroundColor: yesdatColors.primary,
			subBgcolor: Colors.ElegentBlack.light
		}
	},
	slider: {
		themeColor: yesdatColors.logoAlike
	},
	table: {
		headerBgcolor: Colors.LightGray.light
	}
};