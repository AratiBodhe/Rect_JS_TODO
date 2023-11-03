import logo from './logo.svg';
import './App.css';
import { TodoScreen } from './views/TodoScreen';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
   <div className="App">
      <TodoScreen/>
    </div>
    </Provider>
  );
}

export default App;
