import Macaron from "./Macaron";
import Food from "./Food";
import cakes from "./cakes.json";

function App() {
  return (
    <>
    <div className='app'>안녕하세요 뚱땅뚱땅</div>
    {cakes.map(cake =>(
      <Macaron 
      propsid ={cake.id}
      propsname ={cake.name}
      propsimage ={cake.images}
      />
    ))}

    <Food
     propsName={"I love 김치"} 
     propsName2={"Me Too"}
     propsName3={"배고파"}
    />

    </>

    //컴포넌트가 2개이상이면 부모요소로 묶어줘야함
  );
}

export default App; //내보내줘야됨
 
// 앱컴포넌트