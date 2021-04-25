import React from 'react'

const propsco =(props)=>
{
   console.log(props.name,props.heroname )
   return (
       <div>
       <h1> hello {props.name} place {props.heroname}</h1>
       {props.children}
       </div>
   )

}

export default propsco