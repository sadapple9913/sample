import React, {Component} from 'react';

export class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }
  
  componentDidMount(){
    console.log('comopentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는함수')
  }

  componentDidUpdate(){
    console.log('componentWillUnmount함수는 화면이 새로그려지면 즉 업데이트 되면 실행되는 함수')

  }
  componentWillUnmount(){
  console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')

  }

  state = {
    count: 0,
    sum: 0,
    avg: 0,
  }
  add = () =>{
    console.log('더하기');
    // this.state.count = 1;
    // this.setState({count:1});
    this.setState({count:this.state.count + 1});
  }
  minus = () =>{
    console.log('빼기')
    // this.state.count = -1;
    // this.setState({count:-1});
    this.setState(current =>(//current는 this.state
      {
        count: this.state.count - 1 ,
        sum: this.state.sum - 2,
        avg: this.state.avg - 3,})
      )  
    }
  render() {
    return (
      <>
        <div>
          <h1>현재 숫자는 입니다.{this.state.count}</h1>
          <button onClick={this.add}>더하기</button>
          <button onClick={this.minus}>빼기</button>
        </div>
      </>
    );
  }
}

export default App; 
 
