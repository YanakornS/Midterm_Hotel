import { StrictMode, Suspense } from 'react'; // เพิ่ม Suspense ที่นี่
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from "./Routers/Router.jsx";
import { AuthProvider } from './Contexts/AuthContext.jsx';
import SuspenseContent from './component/SuspenseContent.jsx';

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Suspense fallback={<SuspenseContent />}> {/* คลุม AuthProvider และ RouterProvider ด้วย Suspense */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Suspense>
  </StrictMode>
);
