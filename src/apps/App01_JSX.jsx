import './App.css';

function App() {
  const name = 'James'; // 자바스크립트 영역
  const foods = ['피자', '삼겹살', '불고기'];
  return (
    <>  
      <h1 style={{backgroundColor:"beige"}}>name: {name}</h1>
      <hr />    {/*반드시 닫는 태그가 있어야 함*/}
      <img src="https://picsum.photos/200/200" className='photo' />
      <br />
      <ul>
        {foods.map(food => (
          <li>{food}</li>
        ))};
      </ul>
    </>
  );
}

export default App;
