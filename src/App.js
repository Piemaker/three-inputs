import './App.css';
import ThreeInputs from './components/ThreeInputs';
function App() {
  let numberArr = [1,2,3,4,5]
  let name = "Hello Ramp!"
  return (
    <div className='center'>
      <h2>Falsy Input</h2>
      <ThreeInputs input={false}></ThreeInputs>
      <h2>Array Input</h2>
      <ThreeInputs input={numberArr}></ThreeInputs>
      <h2>Any Input</h2>
      <ThreeInputs input={name}></ThreeInputs>
    </div>
  );
}

export default App;
