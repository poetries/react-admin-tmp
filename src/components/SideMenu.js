
import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import { 
  Layout, 
  Menu, 
  Breadcrumb, 
  Row, 
  Col, 
  Divider, 
  Icon, 
  BackTop 
} from 'antd';
import config from '../projectConfig'

const { Header, Footer, Content, Sider } = Layout;

export default class SideMenu extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render(){
        const {accountId} = this.props
        return (
            <Sider width={140}>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['index']}
                defaultOpenKeys={['finance']}
                style={{ height: '100%', borderRight: 0 }}
                onClick={this.linkTo}
              >
                {config.menu.map(v=>{
                  if(v.children){
                    return <Menu.SubMenu key={v.text} title={<span><Icon type={v.icon} className="nav-icon" />{v.text}</span>}>
                      {v.children.map(vv=><Menu.Item key={vv.text}><Link to={`${vv.path.replace(':accountId',accountId)}`}>{vv.text}</Link></Menu.Item>)}
                    </Menu.SubMenu>
                  }
                  if(v.text && v.icon){
                    return <Menu.Item key={v.text}>
                      <Link to={`${v.path.replace(':accountId',accountId)}`}>
                        <Icon type={v.icon} className="nav-icon" />
                        {v.text}
                      </Link>
                    </Menu.Item>
                  }
                })}

              </Menu>
            </Sider>
        )
    }
}



