import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*O HTML diz ao React:

"A partir deste elemento HTML (div id ="root"), esta será a raiz da aplicação React."*/
/*(div id ="root")  O createRoot() existe porque o React precisa de saber:

"Onde é que eu vou desenhar esta aplicação no HTML?"*/

/*<App /> representa a utilização do componente App. Quando o React encontra essa sintaxe, ele executa o componente e renderiza a interface que ele devolve.*/