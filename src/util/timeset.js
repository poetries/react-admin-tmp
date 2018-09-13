
import {isArrayEqual} from './caculate'
export const TIMESETTYPE = {
	ALLDAY : 1,
	WEEKS  : 2,
	CUSTOM : 3
}
export const values2TextArray = (timesets) => {
	let values = timesets.sort((a, b) => (a - b))
	//只按整点的来处理
	if(values.length%2){
		values = values.slice(0,values.length-1)
	}
	if(!values || !values.length) return []

	const typeAndRange = timeSet2TypeAndRange(values)

	if(typeAndRange.timeSetType === TIMESETTYPE.ALLDAY){
		return [{text:'全天'}]
	}else if(typeAndRange.timeSetType === TIMESETTYPE.WEEKS){
		const {beginTimeSet,endTimeSet} = typeAndRange
		return [{text:`每天:${beginTimeSet>=10?'':'0'}${beginTimeSet}~${endTimeSet>=10?'':'0'}${endTimeSet}`}]
	}
	const textInDay = [
		{text:'周日：'},
		{text:'周一：'},{text:'周二：'},{text:'周三：'},
		{text:'周四：'},{text:'周五：'},{text:'周六：'}
	]
	const setupText = (_i) => {

		// textInDay[_i].beginTime = time
		// textInDay[_i].endTime = time

		// console.log(textInDay[_i])
		const beginTime = parseInt(textInDay[_i].beginTime / 2)
		const endTime   = parseInt((textInDay[_i].endTime) / 2) +1
		textInDay[_i].text += `${beginTime>=10?'':'0'}${beginTime}:00~${endTime>=10?'':'0'}${endTime}:00 `

	}
	let preIndex = 0
	values.forEach( (v,i) => {
		const index = parseInt(v/48)
		const time  = v%48
		textInDay[index].show = true
		if(preIndex !== index || i === values.length-1){
			if(preIndex !== index){
				textInDay[index].beginTime = time
				textInDay[index].endTime = time
			}
			setupText(preIndex,time)

		}else if(textInDay[index].preTime != undefined){
			if( textInDay[index].preTime - time === -1 ){
				textInDay[index].endTime = time
			}else{
				setupText(index,time)

			}
		}else{
			textInDay[index].beginTime = time
			textInDay[index].endTime = time
		}
		textInDay[index].preTime = time
		preIndex = index
	})
	return (textInDay.filter(v => v.show)||[])

}
export const timesRange = []
for(var i = 0; i < 24; i++)timesRange.push(i>=10?`${i}`:`0${i}`)

export const allDayTimeSet = []
for(var i = 0 ; i < 7*48;i++)allDayTimeSet.push(i)

export const timeSet2TypeAndRange = (timeSet) => {
	if(!timeSet)return

	let timeSetInWeek = []

	timeSet.forEach(v => {
		const indexInWeek = parseInt(v/48,10)
		if(!timeSetInWeek[indexInWeek]){
			timeSetInWeek[indexInWeek] = []
		}
		timeSetInWeek[indexInWeek].push(v%48)
	})
	const baseWeek = timeSetInWeek[0]
	timeSetInWeek  = timeSetInWeek.splice(1)

	let allSame = timeSetInWeek.length===6
	timeSetInWeek.forEach(v => {
		if(allSame){
			allSame = isArrayEqual(v,baseWeek)
		}
	})
	if(allSame){
		if(baseWeek[0]===0 && baseWeek[baseWeek.length-1] ===47){
			return {
				timeSetType : TIMESETTYPE.ALLDAY
			}
		}
		return {
			timeSetType  : TIMESETTYPE.WEEKS,
			beginTimeSet : baseWeek[0],
			endTimeSet 	 : baseWeek[baseWeek.length-1]
		}
	}else{
		return {
			timeSetType  : TIMESETTYPE.CUSTOM
		}
	}
}