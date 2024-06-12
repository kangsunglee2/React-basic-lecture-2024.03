import './App.css';
import Card2 from '../components/Card2';

export default function App() {
  const james = {id:1, name:'James', job:'Back-end programmer'};
  const maira = {id:2, name:'Maria', job:'React JS programmer'};
  return (
    <>  
      <Card2 person={james} />
      <br />
      <Card2 person={maira}/>
    </>
  );
}

