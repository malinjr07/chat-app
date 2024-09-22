import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from 'routes';
import Dashboard from 'routes/Dashboard';
import SignIn from 'routes/SignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;

