import { Helmet } from 'react-helmet';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </Helmet>

      <div>
        {/* Cabeçalho */}
        <header>
          <div className="interface">
            <div className="logo">
              <a href="/home">
                <img src="..\images\Logo.png" alt="Logo do Site" />
              </a>
            </div>
            <nav className="menu-desktop">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/energia">Energia</a></li>
                <li><a href="/projeto">Projeto</a></li>
                <li><a href="/FalaComAGente">Fala Com A Gente</a></li>
              </ul>
            </nav>
            <div className="btn-contato">
              <a href="/FalaComAGente">
                <button>Entrar</button>
              </a>
            </div>
          </div>
        </header>

        <Outlet /> {/* Renderiza o conteúdo das páginas */}
        
        {/* Rodapé */}
        <footer>
          <div className="interface">
            <div className="line-footer">
              <div className="flex">
                <div className="logo-footer">
                  <img src="images/Logo.png" alt="Logo da marca" />
                </div>
                <div className="btn-projeto">
                  <a href="https://github.com/">
                    <button><i className="bi bi-github"></i></button>
                  </a>
                  <a href="https://www.google.com/intl/pt_br/gmail/about/">
                    <button><i className="bi bi-google"></i></button>
                  </a>
                  <a href="https://web.whatsapp.com/">
                    <button><i className="bi bi-whatsapp"></i></button>
                  </a>
                </div>
              </div>
            </div>
            <div className="line-footer borda">
              <p><i className="bi bi-envelope-fill"></i><a href="mailto:Felipe.benedito@edu.fecap.br">Felipe.benedito@edu.fecap.br</a></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
