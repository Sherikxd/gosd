import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">GOSD</h1>
        <nav>
          
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>Acerca de Nosotros</h2>
          <p>Somos algo.</p>
        </section>
        <section id="contact">
          <h2>Contáctanos</h2>
          <p>Información de contacto.</p>
          <a href="https://discord.gg/3y5wpgAB8T" target="_blank" rel="noopener noreferrer">Únete a nuestro servidor de Discord</a>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nombre de tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;