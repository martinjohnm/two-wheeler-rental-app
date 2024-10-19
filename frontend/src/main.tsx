import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { PrimeReactProvider } from 'primereact/api';


createRoot(document.getElementById('root')!).render(
 
  <RecoilRoot>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </RecoilRoot>
  ,
)
