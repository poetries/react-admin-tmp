import React, {Component} from 'react';
import {connect} from 'react-redux'
import styled ,{withTheme} from 'styled-components'
import {createAd} from '../actions/'
import Spinner from 'react-spinkit'
import {FontAwesome,Button} from '../components/StyledComponents'

const Ul = styled.ul`
   padding: 0;
   margin: 0;
`;

const Li = styled.li`
   display: inline-block;
`;

const ToggleMenu=styled(Button)`
    @media (min-width : 800px){
        display : none
    }
`

class HeaderBar extends Component{
    render(){
        const theme =  this.props.theme.headerBar
        const themeName = this.props.theme.themeName

        return (
            <section  style={{width:'100%',backgroundColor: theme.mainBgcolor,
                height:'45px',color:theme.mainColor}}>
                {this.props.commonLoading &&
                <div style={{position:'absolute',textAlign:'center',height:50,width:200,left:'50%',top:8}}>
                    <Spinner name="circle" color="orange" fadeIn={0}/>
                </div>
				}
                <Ul className="clearfix">
                    <Li className="pull-left">
                        <ToggleMenu link onClick={this.props.onMenu}>
                            <FontAwesome icon="th-list"/>
                        </ToggleMenu>
                        <img src={`/assets/vendor/theme/${themeName}/img/logo.png`} style={{margin: '6px 8px'}} alt="logo"/>
                    </Li>
                    <Li className="pull-left">
                        <span style={{display: 'inline-block', lineHeight: '45px', fontSize: '24px', fontWeight: '500', margin: '0 12px'}}>AGENCY</span>
                    </Li>
                    <Li className="pull-right">
                        <a href="javascript:;" style={{color: theme.darkColor, display: 'inline-block', fontSize: '12px', padding: '0 40px', 
                            borderLeft: `1px solid ${theme.borderColor}`, lineHeight:'45px'}}
                            onClick={e => {this.props.onLogout()}}>退出</a>
                    </Li>
                    <Li className="pull-right">
                        <div style={{color: '#fff', display: 'inline-block', lineHeight: '45px', padding: '0 25px',
                            borderLeft: `1px solid ${theme.borderColor}`}}>
                            
                            <span style={{display: 'inline-block', height: '45px', paddingLeft: '30px',
                                background: `url(/assets/vendor/theme/${themeName}/img/icon-account-base.png) 0 50% no-repeat` }}>{this.props.loginInfo.accountName || '未登录'}</span>
                        </div>
                    </Li>
                </Ul>
            </section>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
    loginInfo : state.loginInfo,
	commonLoading : state.commonLoading
})

export default connect(mapStateToProps,{
	createAd
})(withTheme(HeaderBar))
