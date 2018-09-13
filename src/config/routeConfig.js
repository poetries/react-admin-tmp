export default [
	{
		path:'/v1/:accountId',
		component:require('../pages/IndexPage').default,
		exact:true,
		text:'首页',//菜单文本
		icon:'home' // 菜单图标 图标类型参考 <Icon type="">
	},
	{
		path:'/v1/:accountId/new1',
		component:require('../pages/NewPage1').default,
		exact:true,
		text:'page1',
		icon:'calculator'
	},
	{
		// 二级菜单配置
		text:'管理',
		icon:'bank',
		children:[
			{
			  path:'/v1/:accountId/new2',
			  component:require('../pages/NewPage2').default,
			  exact:true,
			  text:'page2'
			}
		]
	}
]