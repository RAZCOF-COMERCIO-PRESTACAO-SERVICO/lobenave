class OrgChart extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        .org-chart {
          font-family: 'Montserrat', sans-serif;
          width: 100%;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 1rem;
          overflow-x: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .chart-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 600;
          color: #1a6bb0;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .chart-container {
          display: flex;
          flex-direction: column;
          min-width: 900px;
        }
        
        .level {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .node {
          border-radius: 6px;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          margin: 0 0.5rem;
          min-width: 200px;
          transition: transform 0.3s ease;
        }
        
        .node:hover {
          transform: translateY(-5px);
        }
        
        .node.pca {
          background: #1a6bb0;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .node.director {
          background: #2d3748;
          color: white;
          font-weight: 500;
        }
        
        .node.department {
          background: #fef3c7;
          color: #92400e;
        }
        
        .node.section {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .node.avulsa {
          background: #f3f4f6;
          color: #111827;
          border: 1px dashed #9ca3af;
          min-width: 180px;
        }
        
        .node-name {
          font-weight: 600;
          margin-bottom: 0.3rem;
          font-size: 1rem;
        }
        
        .node-title {
          font-size: 0.85rem;
          margin-bottom: 0.3rem;
        }
        
        .node-responsible {
          font-size: 0.8rem;
          color: #555;
          font-style: italic;
        }
        
        .connector {
          position: absolute;
          width: 2px;
          background: #9ca3af;
          left: 50%;
          top: -1rem;
          height: 1rem;
        }
        
        .horizontal-connector {
          position: absolute;
          height: 2px;
          background: #9ca3af;
          top: 50%;
          width: 100%;
        }
        
        .logo-placeholder {
          height: 2px;
          margin: 1rem auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          border: 2px dashed #d1d5db;
          border-radius: 4px;
          font-size: 0.5rem;
          max-width: 100px;
       }
    

        
    
        
        @media print {
          .org-chart {
            padding: 0;
            max-width: 100%;
            box-shadow: none;
          }
          
          .node {
            box-shadow: none;
            border: 1px solid #e5e7eb;
          }
        }
      </style>
      
      <div class="org-chart">
        <div class="chart-title">ORGANOGRAMA PARA O EXERCÍCIO ECONÓMICO 2025</div>
        <div class="logo-placeholder">
          <img src="IMG/LUB.jfif" alt="logo" style="width:200%">
        </div>
        
        <div class="chart-container">
          <!-- Level 1 - PCA -->
          <div class="level">
            <div class="node pca">
              <div class="node-name">Hermenegildo dos Santos</div>
              <div class="node-title">Presidente do Conselho de Gestão</div>
              <div class="node-responsible">e Director Geral</div>
            </div>
          </div>
          
          <!-- Level 2 - Directors -->
          <div class="level">
            <div class="node director">
              <div class="connector"></div>
              <div class="node-name">Yara Venâncio</div>
              <div class="node-title">Directora do Gabinete de Assistência</div>
              <div class="node-responsible">Responsável pelo Dept. Administrativo</div>
            </div>
            
            <div class="node director">
              <div class="connector"></div>
              <div class="node-name">Gilso Capequel</div>
              <div class="node-title">Director Administrativo e Financeiro</div>
              <div class="node-responsible">Responsável por Contabilidade e Logística</div>
            </div>
            
            <div class="node director">
              <div class="connector"></div>
              <div class="node-name">Isaías Cupessala</div>
              <div class="node-title">Director Comercial</div>
              <div class="node-responsible">Responsável pelo Dept. Comercial</div>
            </div>
            
            <div class="node director">
              <div class="connector"></div>
              <div class="node-name">Paulo Kandjila</div>
              <div class="node-title">Director Técnico</div>
              <div class="node-responsible">Responsável por Produção e Manutenção</div>
            </div>
          </div>
          
          <!-- Level 3 - Departments -->
          <div class="level">
            <!-- Under Gabinete de Assistência -->
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Departamento Administrativo</div>
            </div>
            
            <!-- Under Administrativa e Financeira -->
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Contabilidade e Finanças</div>
            </div>
            
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Logística</div>
            </div>
            
            <!-- Under Comercial -->
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Departamento Comercial</div>
            </div>
            
            <!-- Under Técnica -->
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Produção</div>
            </div>
            
            <div class="node department">
              <div class="connector"></div>
              <div class="horizontal-connector" style="width: 200px; left: -100px;"></div>
              <div class="node-name">Manutenção</div>
            </div>
          </div>
          
          <!-- Level 4 - Sections -->
          <div class="level">
            <!-- Under Departamento Administrativo -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção Administrativa</div>
              <div class="node-title">Responsável: Maria Fernandes</div>
            </div>
            
            <!-- Under Contabilidade e Finanças -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção Contabilidade</div>
              <div class="node-title">Responsável: Joaquim Neto</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção Financeira</div>
              <div class="node-title">Responsável: Amélia Silva</div>
            </div>
            
            <!-- Under Logística -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Armazém</div>
              <div class="node-title">Responsável: Eduardo Pinto</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Transportes</div>
              <div class="node-title">Responsável: Carlos Luís</div>
            </div>
            
            <!-- Under Departamento Comercial -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Vendas</div>
              <div class="node-title">Responsável: Jeremias Gununga</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Marketing</div>
              <div class="node-title">Responsável: Ana Sofia</div>
            </div>
            
            <!-- Under Produção -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Construção</div>
              <div class="node-title">Responsável: Manuel António</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Reparação</div>
              <div class="node-title">Responsável: José Carlos</div>
            </div>
            
            <!-- Under Manutenção -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Manutenção</div>
              <div class="node-title">Responsável: Pedro Miguel</div>
            </div>
          </div>
          
          <!-- Level 4 - More Sections -->
          <div class="level">
            <!-- Additional Sections -->
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Qualidade</div>
              <div class="node-title">Responsável: Luísa Fernandes</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Segurança</div>
              <div class="node-title">Responsável: António José</div>
            </div>
            
            <div class="node section">
              <div class="connector"></div>
              <div class="node-name">Secção de Recursos Humanos</div>
              <div class="node-title">Responsável: Teresa Maria</div>
            </div>
          </div>
          
          <!-- Avulsa Sections -->
          <div class="level" style="margin-top: 2rem;">
            <div class="node avulsa">
              <div class="node-name">Jeremias Gununga</div>
              <div class="node-title">Informática</div>
            </div>
            
            <div class="node avulsa">
              <div class="node-name">Carlos Luís</div>
              <div class="node-title">Tratamento de Superfície</div>
            </div>
            
            <div class="node avulsa">
              <div class="node-name">Amélia Silva</div>
              <div class="node-title">Jurídico</div>
            </div>
            
            <div class="node avulsa">
              <div class="node-name">Eduardo Pinto</div>
              <div class="node-title">Controlo de Qualidade</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-orgchart', OrgChart);