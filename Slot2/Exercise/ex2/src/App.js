import logo from './logo.svg';
import './App.css';

function App() {
  //Khai báo ham Chao1 nhận 1 tham số name,in ra lời chào
  //tên đó ở console
  let chao1 = (name) => console.log(`Xin chào,${name}!`);
  let person = {
    id:1,
    name:"Bob",
    age:30,
    address:"123 Main St"
  };
    return (
    <>
      <h1>Xin chào</h1>
      <h2>Toi là KhaHN</h2>
      <button onClick={ () => chao1("KhaHN")}>Gọi hàm Chao1 </button>
     <div className="card">
      <h3>Thông tin Person:</h3>
      <p>ID: {person.id}</p>
      <p>Name:{person.name}</p>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
    </div>
    </>
  );
}

export default App;
