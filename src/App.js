import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </GlobalProvider>
  );
}

export default App;
