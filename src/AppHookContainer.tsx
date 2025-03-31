import App from './App';
import { AppRouter } from './AppRouter';
import { AuthProvider } from './context/Auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';



export const AppHookContainer = () => {
    return (
        <BrowserRouter>
        <AuthProvider>
            <App>
                <AppRouter />
            </App>
        </AuthProvider>
        </BrowserRouter>
    )
}
