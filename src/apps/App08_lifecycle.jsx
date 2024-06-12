import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleFile = () => {
    fetch('data/products.json')
      .then(res => res.json())       // JSON parsing
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴');
        console.log(data);
      });
    }
    useEffect(() => {
      fetch('data/products.json')
      .then(res => res.json())       // JSON parsing
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴');
        console.log(data);
        setProducts(data)
      });
    return () => {
      console.log('죽을 때 마지막으로 실행되어야 하는 코드');
    }

    }, [checked]);   // [] 최초에 한번 실행, [checked] 체크트값이 변화했을때 실행
    
  return (
    <div className='card'>    
      <ul>프로덕트 목록
        {
          products.map((products, index) => (
            <li key={index}>{products.name} {products.price}</li> 
          ))
        }
      </ul>
      <button onClick={handleFile}>파일 읽기</button>
      
    </div>
  );
}
