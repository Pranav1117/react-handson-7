import './App.css';
import RouterComp from './Router';
import { Provider } from "react-redux";
import store from './Redux/Store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterComp/>
    </div>
    </Provider>
  );
}

export default App;