import React from 'react';
import '../App.css';

function FalaComAGente() {
  return (
    <div>
      {/* Corpo principal */}
      <main>
        <section className="formulario">
          <div className="interface">
            <h2 className="titulo">FALA <span>COMIGO</span>.</h2>
            <form action="#">
              <input type="text" placeholder="Seu Nome Completo" required />
              <input type="email" placeholder="Seu Email" required />
              <input type="tel" placeholder="Seu Celular" />
              <textarea placeholder="Sua Menssagem" required></textarea>
              <div className="btn-enviar">
                <input type="submit" value="ENVIAR" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FalaComAGente;
