import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import 'style/model.less';
import {userAddrList} from '@/api/address.js';
import MainFoot from '@/components/MainFoot.jsx';


class Clock extends Component {
	constructor(props){    
		super(props);      
		this.state = {  
            date:new Date()
        };   
        
	}
    componentDidMount(){  //挂载成功
        this.timerID = setInterval(()=>{    
            this.tick()
        },1000)
        userAddrList().then((res)=>{
        	
        	if(res.code == 1000){
        		
        	}
        })
    }
    componentWillUnmount(){  //卸载
        clearInterval(this.timerID)
    }
    tick = ()=>{      
        this.setState({    
            date:new Date()
        })
        this.setState((prevState,props)=>{   
            return {
                date:new Date()
            }
        })
    }
	render(){     
		return(
			<div>
				<h1>投资</h1>
				
				 <Link to={{pathname: '/Mine'}}>进入我的页面</Link>
                 <MainFoot title="Home"/>
			</div>
		)
    }
}
export default connect(
    (state)=>{
        return {
            inputVal: state.inputVal,
            CHANGE_CHICSHI:state.CHANGE_CHICSHI,
        }
    }
)(Clock)