
//http://react-component.github.io/calendar/examples/antd-range-calendar.html


import React ,{Component} from 'react';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-calendar/assets/index.css';
import './calendarFix.css'
import moment from 'moment';
import 'moment/locale/zh-cn';

const now = moment();
now.locale('zh-cn').utcOffset(8);

function isValidRange(v) {
	return v && v[0] && v[1];
}

const formatStr = 'YYYY-MM-DD';

function format(v) {
	return v ? v.format(formatStr) : '';
}

function disabledDate(current) {
	const date = moment();
	date.hour(0);
	date.minute(0);
	date.second(0);
	return current.isBefore(date);  // can not select days before today
}
export default class CalendarRange extends Component{
	constructor(props){
		super(props)
		this.onChange 	   = this.onChange.bind(this)
		this.onHoverChange = this.onHoverChange.bind(this)
	}
	onChange(value){
		if (value.length < 2) return false

		this.setState({value})
		const {useTime} = this.props

		let beginDate = value[0].format('YYYYMMDD'),
			endDate	  = value[1].format('YYYYMMDD')
		if(useTime){
			beginDate = moment(beginDate,'YYYYMMDD').unix()
			endDate   = moment(endDate,  'YYYYMMDD').add(1,'d').add(-1,'s').unix()
		}


		this.props.onChange({
			beginDate 	 ,
			endDate
		})
	}
	onHoverChange(hoverValue) {
		this.setState({ hoverValue });
	}
	state = {
		value : [],
		hoverValue:[],
		disabled:false
	}
	componentDidMount(){
		const {date,useTime} = this.props
		const {beginDate, endDate} = date||{}
		this.setState({
			value : [
				beginDate ? moment(useTime?beginDate*1000:beginDate) : '',
				endDate ? moment(useTime?endDate*1000:endDate) : ''
			]
		})
	}

	render(){
		const calendar = (
			<RangeCalendar
				hoverValue={this.state.hoverValue}
				onHoverChange={this.onHoverChange}
				showWeekNumber={false}
				dateInputPlaceholder={['start', 'end']}
				defaultValue={[now, now.clone().add(1, 'months')]}
				format={formatStr}
				locale={zhCN}
				showOk={true}
			/>
		)
		return (
			<Picker
				value={this.state.value}
				onChange={this.onChange}
				animation="slide-down"
				calendar={calendar}
				style={{zIndex: 1200}}
			>
				{
					({ value }) => {
						return (<span style={{position: 'relative', display: 'inline-block'}}>
							{this.props.customContainer && this.props.customContainer(isValidRange(value) && `${format(value[0])} ~ ${format(value[1])}` || '')}
							{!this.props.customContainer &&
							<input
								placeholder="请选择起止日期"
								style={{ width: 200, backgroundColor: '#fff', fontSize: 12}}
								disabled={this.state.disabled}
								readOnly
								className="input-sm form-control"
								value={isValidRange(value) && `${format(value[0])} ~ ${format(value[1])}` || ''}
							/>
							}
							{!this.props.customContainer &&
								<i className="fa fa-calendar" style={{position: 'absolute', right: '8px', top: '8px'}}/>
							}
							</span>);
					}
				}
			</Picker>
		)
	}
}

