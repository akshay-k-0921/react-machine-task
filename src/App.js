import styled from 'styled-components';
import './App.css';
import DashBoard from './components/DashBoard';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />
        <Route path='dashboard' element={<DashBoard />} />
      </Routes>
      </Container>
    </Router>
    
  );
}

export default App;

const Container = styled.div`
  display: flex;
`