import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './component/main/Dashboard';
import AddItem from './component/main/AddItem';
import Layout from './component/layout/Layout';
import ShowManu from './component/main/ShowManu'; // Fixed name casing to match file
import Login from './component/main/Login'; // Fixed name casing to match file

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <Login/>
        }
      />
      <Route
        path="/add-item"
        element={
          <Layout>
            <AddItem />
          </Layout>
        }
      />
      <Route
        path="/show-menu"
        element={
          <Layout>
            <ShowManu />
          </Layout>
        }
      />
      <Route
        path="/dash-board"
        element={
          <Layout>
                       <Dashboard />

          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
