import React, { useEffect } from 'react';
import {
    BrowserRouter
} from "react-router-dom";
import { listen } from './redux/listener';
import { AppRoutes } from './routes';

function App() {
    useEffect(() => {
        listen();
    }, []);

    return (
        <BrowserRouter>
            <div>
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
