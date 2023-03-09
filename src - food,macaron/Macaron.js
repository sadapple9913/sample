
//클래스형 컴포넌트 render안에 함수가있다
//rce
// import React, { Component } from 'react'

// export class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron;


//함수형 컴포넌트 render없이 바로 함수
//rfce
import React from 'react'

// function Macaron(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>NO. {props.propsid}</h1>
//       <h2>Name. {props.propsname}</h2>
//       <img src={props.propsimage} alt={props.propsname}/>
//     </div>
//   )
// }


// function Macaron(props) {//구조분해할당1 속성을 따로 지정
//   console.log(props);
//   const {propsid, propsname, propsimage} = props
//   return (
//     <div>
//       <h1>NO. {propsid}</h1>
//       <img src={propsimage} alt={propsname}/>
//       <h2>Name. {propsname}</h2>
//     </div>
//   )
// }


function Macaron({propsid, propsname, propsimage}){//구조분해할당2 처음부터 속성을 분해해서 받음
  return (
    <div>
      <h1>NO. {propsid}</h1>
      <img src={propsimage} alt={propsname}/>
      <h2>Name. {propsname}</h2>
    </div>
  )
}
export default Macaron;