import React from 'react'
import { BrowserRouter as Router, Route,Link  } from 'react-router-dom'
import { Layout } from 'antd'
import App from './App'
import routeConfig  from './config/routeConfig'

export default  () => <Layout>
	<Route path="/login" exact component={require('./pages/LoginPage').default}/>
	<Route path="/v1/:accountId" render={() => <App>
    	{routeConfig.map(v=>{
			if(v.children){
			  return v.children.map(vv=><Route exact={vv.exact} key={vv.path} path={vv.path} component={vv.component} />)
			} 
			  return <Route exact={v.exact} key={v.path} path={v.path} component={v.component} />
		 })
		}
	</App>}/>
</Layout>

