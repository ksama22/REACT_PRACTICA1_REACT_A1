import './App.css';
// Importa els components del altre arxiu
import { InfoComponent, InputComponent} from './HomePageComponent'

//Funcio pare
function App() {
  return (
    <div className="App">
      <InfoComponent />
      <InputComponent />
      <InputComponent />
      <InputComponent />
    </div>
  );
};
export default App;
