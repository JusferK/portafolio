import './App.css';
import MainFrameComponent from "./components/main-frame-component";
import { PrimeReactProvider } from 'primereact/api';


const App = () => {
  return (
      <PrimeReactProvider>
        <MainFrameComponent />
      </PrimeReactProvider>
  );
};

export default App;
