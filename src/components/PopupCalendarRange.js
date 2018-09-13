
import React, {Component} from 'react'
import {connect} from 'react-redux'
import CalendarRange from './CalendarRange'
import {Popover, ButtonToolbar, Overlay, Form, Col, FormGroup} from 'react-bootstrap'
import {CustomIcon} from './elements/CustomIcon'
import {Button} from './elements/Button'
import {FontAwesome} from './elements/FontAwesome'

export class PopupCalendarRange extends Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.hide = this.hide.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    state = {
        show : false,
        target : null,
        date: null
    }
    handleClick(e){
        this.setState({
            target : e.target,
            show   : !this.state.show
        })
    }
    hide(e) {
        e.preventDefault()
        this.setState({
            show: false,
            target: null
        })
    }
    onConfirm(e, bizId, prevDate, nextDate) {
        e.preventDefault()
        if (prevDate.beginDate !== nextDate.beginDate || prevDate.endDate !== nextDate.endDate) {
            this.props.onConfirm(nextDate)
        }
    }
    onChange(date) {
        this.setState({date})
    }
    componentDidMount() {
        const date = this.props
        this.setState({date})
    }
    render(){
        const {bizId, header, vid, theme, showIcon, placement = "bottom", date} = this.props

        return (
        <span style={{position: 'relative', display: 'inline-block'}}>
            <a href="javascript:;" onClick={this.handleClick} className="editable editable-click">
                {this.props.children}
                <CustomIcon iconName="edit" size="12" themeName={theme.themeName} style={{
                    backgroundImage: showIcon ? `url(/assets/vendor/theme/${theme.themeName}/img/icon-edit-base.png)` : 'none'
                }}/>
            </a>
            <Overlay
                show={this.state.show}
                target={this.state.target}
                container={this}
                containerPadding={10}
                placement={placement}
                // rootClose
                // onHide={this.hide}
            >
                <Popover id={vid} title={header} style={{overflow:'visible', minWidth: '320px'}}>
                    <Form inline style={{overflow:'visible'}}>
                        <Col sm={4} smPull={1} style={{paddingBottom:8}}>
                            <CalendarRange
                                date={date}
                                onChange={this.onChange}
                            />
                        </Col>
                        <Col sm={8} smPush={3}>
                            <FormGroup>
                            <ButtonToolbar>
                                <Button
                                    style={{marginLeft:15}}
                                    themeSize="sm"
                                    themeColor="success"
                                    onClick={e => {
                                        this.onConfirm(e, bizId, date, this.state.date)
                                        this.hide(e)
                                    }}>
                                    <FontAwesome icon="check"/>
                                </Button>
                                <Button themeSize="sm"
                                        onClick={this.hide}>
                                    <FontAwesome icon="times"/>
                                </Button>
                            </ButtonToolbar>
                            </FormGroup>
                        </Col>
                    </Form>
                    
                </Popover>
            </Overlay>
        </span>

        )
    }
}