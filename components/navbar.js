class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #1a6bb0;
padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo i {
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
        }
        a:hover {
          opacity: 0.8;
        }
        a.active {
          font-weight: bold;
          border-bottom: 2px solid white;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
@media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          ul {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: #0b2c4d;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            gap: 0;
            height: calc(100vh - 70px);
            overflow-y: auto;
          }
          ul.open {
            transform: translateY(0);
          }
          li {
            width: 100%;
            text-align: center;
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          li:last-child {
            border-bottom: none;
          }
          a {
            padding: 0.8rem 2rem;
            display: block;
            width: 100%;
          }
          .mobile-menu-btn {
            display: block;
            font-size: 1.5rem;
          }
          .logo {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.8rem;
          }
          .logo {
            font-size: 1.1rem;
          }
          ul {
            top: 60px;
            height: calc(100vh - 60px);
          }
        }
</style>
      <nav>
        <div class="logo">
          <i data-feather="anchor"></i>
          <span>
          <img src="IMG/LUB.jfif" alt="logo" style= "width: 20%" >
          </span>
        </div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="#about" class="active">Sobre Nós</a></li>
          <li><a href="#orgchart">Organograma</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#partners">Parceiros</a></li>
          <li><a href="#team">Equipa</a></li>
          <li><a href="#news">Notícias</a></li>
<li><a href="#gallery">Galeria</a></li>
          <li><a href="#recruitment">Recrutamento</a></li>
          <li><a href="#contact">Contactos</a></li>
        </ul>
</nav>
      <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const mobileMenu = this.shadowRoot.querySelector('ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });

    // Replace feather icons
    setTimeout(() => {
      feather.replace();
    }, 100);
  }
}

customElements.define('custom-navbar', CustomNavbar);