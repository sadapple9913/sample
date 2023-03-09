import React from 'react'

// function Food(props){
//   console.log(props)
//   return (
//     <div>food {props.propsName} , {props.propsName2} , {props.propsName3}</div>
//   )
// }

// function Food(props){//구조분해할당1
//   console.log(props)
//   const {propsName,propsName2,propsName3} = props;
//   return (
//     <div>food {propsName} , {propsName2} , {propsName3}</div>
//   )
// }

function Food({propsName,propsName2,propsName3}){//구조분해할당2
  return (
    <div>food {propsName} , {propsName2} , {propsName3}</div>
  )
}


export default Food;