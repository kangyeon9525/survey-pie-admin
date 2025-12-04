import { Route, Routes } from 'react-router-dom';

import BuilerPage from './pages/BuilderPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/builder" element={<BuilerPage />} />
      </Routes>
      <ListPage />
    </div>
  );
}

export default App;
