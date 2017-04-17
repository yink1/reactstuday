/*
* @Author: yizeqing
* @Date:   2017-04-15 13:47:13
* @Last Modified by:   yizeqing
* @Last Modified time: 2017-04-15 15:21:40
*/

'use strict';
const data = new Map();
data.set('id001','con1');
data.set('id002','con2');
data.set('id003','con3');
data.set('id004','con4');
const Key = React.createClass({
	getDefaultprops(){
		return{

		}
	},
	getInitialState(){
		return{
			dragId:null,
			rightData:this.props.data,
			leftData:new Map()
		}
	},
	drag(e){
		this.state.dragId = e.target.id;
	},
	drop(e){
		var val = this.state.rightData.get(this.state.dragId);
		this.state.leftData.set(this.state.dragId,val);
		this.forceUpdate();
	},
	
	render(){
		const rightList=[];
		const leftList=[];
		for (let item of this.state.rightData) {
			rightList.push(
				<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
				)
		}
		for (let item of this.state.leftData) {
			leftList.push(
				<p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
				)
		}
		return <div>
			<div className="divleft" id="divleft" onDragEnter={function(e){e.preventDefault}} onDragOver={function(e){e.preventDefault}} onDrop={this.drop}>
				{leftList}
			</div>
			<div className="divright" id="divright">
			{rightList}
			</div>
		</div>
	}
});
ReactDOM.render(
	<Key data={data}/>,document.getElementById('key')
	)