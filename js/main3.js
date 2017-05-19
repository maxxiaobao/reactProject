
//获取数据
var Data = getData();

//Province component
var Province = React.createClass({
	render: function(){
		this.props.data.map(function (province){

			// return (<table className='table'><tr>
   //                  <td>{province.name}</td>
   //                  <td>{province.lastInput}</td>
   //                  <td>{province.forms}</td>
   //                  <td>{province.voter}</td>
   //                  <td>{province.update}</td>
   //          	   	</tr>
   //          	   <City data={province.data} />
			// 	   </table>)
			 })
	}
})

//City Component
var City = React.createClass({
	render: function(){
		var tableList = this.props.data.map(function (city){
			console.log(city);
				// return <table className="table city">
		  //               <tr>
		  //                   <td>{city.name}</td>
		  //                   <td>{city.lastInput}</td>
	   //                      <td>{city.forms}</td>
	   //                      <td>{city.voter}</td>
	   //                      <td>{city.update}</td>
    //             	  	</tr>
    //             	  	<District data={city.data}/>
		  //               </table> 
		})
	}
})
//District Component
var District = React.createClass({
	render: function(){
		var tableList = this.props.data.map(function (district){
			console.log(district);
			// return <table className="table district">
	  //               <tr>
	  //                   <td>{district.name}</td>
	  //                   <td>{district.lastInput}</td>
   //                      <td>{district.forms}</td>
   //                      <td>{district.voter}</td>
   //                      <td>{district.update}</td>
   //          	  	</tr>
	  //               </table>  
		})
		// return {tableList}
	}
})
React.render(
	<Province data={Data} />,
	$(".tableDiv")[1]
	)