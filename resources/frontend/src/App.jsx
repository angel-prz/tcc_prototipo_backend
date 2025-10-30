import { RouterProvider } from 'react-router-dom';
import router from './config/routes';
import './styles/main.css';

import PacienteProvider from './contexts/PacienteProvider';
import { AuthProvider } from './contexts/AuthProvider';
import ThemeProvider from './contexts/ThemeProvider';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <PacienteProvider>
            <RouterProvider router={router} />
        </PacienteProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
