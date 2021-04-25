import React, { Component } from 'react'

class Message extends Component{
  constructor(){
    super()
    this.state={
      message: " welcome visitor"
      }
    }
    changemessahe(){
    this.setState({
      message: " Thanks for Subscribing "
      })
    }

 render() {
   return(
       <div>
     <h1>{this.state.message}</h1>
       <button onClick={()=>this.changemessahe()}>Subscribe</button>
       </div>
   )
}
}

export default Message

