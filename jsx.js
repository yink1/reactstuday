
const outFn={
	tesk(){
		alert('ok this is outFn'+this.props.grop)
	}
};
const Item = React.createClass({
	getDefaultProps(){
		return {
			grop:'jasp'
		}
	},
	mixins:[outFn],
	render(){
		return <li>
		123 <span>{this.props.grop}</span><br/>
		<button onClick={this.tesk}>{this.props.grop}</button>
		</li>
	}
});
const result=[];
const bale = false;
if(bale){
	result.push(Item);
	result.push(Item)
}else{
	result.push(<h2>234</h2>);
	result.push(<h2>234</h2>);
}
ReactDOM.render(<ul style={{background:'red',listStyle:'none'}} abc='123'>
	{bale?<Item/>: <h4 style={{height:'20px',lineHeight:'20px'}}>判断为假时显示</h4>}
	<Item/>
	<Item/>
	</ul>,
	document.getElementById('ex')
);
ReactDOM.render(<div grop="javad">
{result}
<Item grop="java" />
</div>,
document.getElementById('de')
)


















