import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// components 
import DashBoard from './components/DashBoard';
import SideBar from './components/SideBar';
import CommingSoon from './components/CommingSoon';

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
        <Route path='support' element={<CommingSoon />} />
        <Route path='plugins' element={<CommingSoon />} />
        <Route path='help' element={<CommingSoon />} />
      </Routes>
      </Container>
    </Router>
    
  );
}

export default App;

const Container = styled.div`
  display: flex;
`