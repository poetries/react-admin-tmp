import styled,{css} from 'styled-components'
import {Col} from 'react-bootstrap'

export {Button} from './elements/Button'
export {FontAwesome} from './elements/FontAwesome'
export {Switcher} from './elements/Switcher'
export {Tab} from './elements/Tab'
export {TableChartSwitcher} from './elements/TableChartSwitcher'
export {ButtonAppExtract, ButtonAppExtracted} from './elements/ButtonAppExtract'
export {TextVerticalMiddle} from './elements/TextVerticalMiddle'
export {SectionHeader} from './elements/SectionHeader'
export {TableWrapper} from './elements/TableWrapper'
export {SmallSelectWrapper} from './elements/SmallSelectWrapper'
export {SmallMutedText} from './elements/SmallMutedText'
export {CustomIcon} from './elements/CustomIcon'
export {PopupCalendarRange} from './PopupCalendarRange'



export const StyledCloseButton = styled.a`
	display: inline-block;
	padding: 5px 14px 6px;
	height: 40px;
	background-color: #ED881E;
	color: #98560f;
	position: fixed;
	left: 181px;
	&:hover,
	&:focus {
		text-decoration: none;
		cursor: pointer;
	}
	border-radius: 8px 0 0 8px;
`

export const BiztableOuterWrap=styled.div`
	margin-left: 150px;
	@media (max-width : 800px){
		margin-left: 0px;
	}
`

export const WrapSearchBox=styled.div`
	
	width : 200px;
	@media (max-width : 800px){
		width : 100%;
		padding-left:15px;	
		margin-top:-14px;
	}
	>div{
		@media (max-width : 800px){
			width : 100%  !important;
		}
	}
	>div>input {
		width:200px !important;
		padding-left:25px !important;
		@media (max-width : 800px){
			width : 100%  !important;
		}
    }
`
export const WrapStatusFilter=styled.div`
	width : 150px;
	@media (max-width : 800px){
		float:left !important;
		padding-left : 15px;
	}
`

export const LightInfoTxt=styled.span`
	color : #DEDEDE;
	font-size : 11px
`




export const PanelBlock = styled.div`
    text-align: left;
    background-color: #fff;
    height: 64px;
    border: 1px solid #ddd;
    & > i {
        display: inline-block;
        width: 70px;
        height: 64px;
        float: left;
    }   
`
export const PanelBlockText = styled.div`
    marginLeft: 70px;
`
export const SmallStrongBlueText = styled.strong`
    font-size: 12px;
    color: ${props => props.theme.original.LightBlue.base};
    & > a {
        color: ${props => props.theme.original.LightBlue.base};
    }
`
export const GrayTextBlock = styled(Col)`
    backgroundColor: #F7F8FA;
    border: 1px solid #ddd;
    float: left;
    text-align: left;
    padding:5px 8px;
    marginRight: 15px;
    @media (min-width : 800px) {
        width : 150px;
    }
    @media (max-width : 600px){
        marginRight : 0px;
        height : 90px;
    }
`
export const BigStrongText = styled.strong`
    font-size: 16px;
`
