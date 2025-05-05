import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Banner Superior */}
      <div className="top-banner">
        <span>
          <strong>SUPORTE VIA WHATSAPP</strong> por tempo limitado para os primeiros educadores que adquirirem o Kit Inclusivo. <strong>GARANTA AGORA!</strong>
        </span>
        <a 
          href="https://wa.me/5581983012503?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+Kit+Inclusivo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-link"
          aria-label="Falar no WhatsApp sobre o Kit Inclusivo"
        >
          Falar no WhatsApp
        </a>
      </div>

      {/* Cabeçalho */}
      <header>
        <h1>Inclusão de Verdade: Torne-se a professora que seus alunos especiais precisam</h1>
        <p>Um kit completo, visual e prático para transformar sua sala de aula com empatia e estratégia</p>
      </header>

      {/* Conteúdo Principal */}
      <main className="container">
        {/* Imagem Mockup */}
        <img 
          className="mockup"  
          src="/ebook-capa-Juliana.png" 
          alt="Capa do eBook Educando para a Inclusão" 
        />

        {/* Vídeo */}
        <div className="video-container">
          <iframe
            width="700"
            height="390"
            src="https://www.youtube.com/embed/t_-m4nKVe9s"
            title="Apresentação do Kit Educativo Inclusivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="responsive-iframe"
          ></iframe>
        </div>

        {/* Seções */}
        <section className="section">
          <h2>Você sente que sua aula não alcança todos os alunos?</h2>
          <p>Muitos professores enfrentam o desafio diário de adaptar conteúdos para alunos com TEA, TDAH e dificuldades de aprendizagem. E a verdade é: a formação muitas vezes não dá conta da prática real.</p>
        </section>

        <section className="section">
          <h2>Apresentando: Educando para a Inclusão</h2>
          <p>Este eBook foi criado por Juliana Monteiro, professora com 12 anos de experiência, especializada em História, Psicopedagogia e Educação Inclusiva.</p>
          <p>Ele traz uma abordagem prática, acessível e direta sobre como lidar com alunos com necessidades diversas em sala de aula, com foco em atividades que funcionam de verdade.</p>
        </section>

        <section className="section">
          <h2>O que você vai receber:</h2>
          <ul className="feature-list">
            <li>📘 Guia de orientação para elaboração do Plano Educacional Individual (PEI)</li>
            <li>🧾 Modelo de ficha de identificação individual do PEI</li>
            <li>🧠 Dicas de estratégias pedagógicas para alunos do Ensino Fundamental I com dificuldades de aprendizagem</li>
            <li>✨ Guia de orientação de aplicação de reforço positivo segundo o método ABA</li>
            <li>🎴 Cards de reforço positivo para impressão</li>
            <li>📊 Quadro de incentivo para o reforço positivo</li>
          </ul>
        </section>

        <section className="section">
          <h2>Bônus exclusivos:</h2>
          <ul className="bonus-list">
            <li>Manual prático de PEI – R$ 29,00</li>
            <li>Modelo de ficha adaptada – R$ 19,00</li>
            <li>Guia de reforço positivo – R$ 27,00</li>
            <li><strong>Valor total dos bônus: R$ 75,00 – você recebe gratuitamente!</strong></li>
          </ul>
        </section>

        <section className="section">
          <h2>Por que este material é diferente de tudo que você já viu?</h2>
          <p>Enquanto muitos materiais disponíveis no mercado se limitam a teorias complexas e pouco aplicáveis na rotina escolar, o Kit Inclusivo da Juliana Monteiro foi pensado por uma professora atuante, com experiência direta em salas inclusivas.</p>
          <p>Seu conteúdo é visual, objetivo e 100% aplicável – ideal para professores que não têm tempo a perder com adaptações soltas ou estratégias genéricas.</p>
          <p><strong>Diferenciais:</strong></p>
          <ul className="feature-list">
            <li>Desenvolvido por quem vive a realidade da sala de aula</li>
            <li>Fichas ilustradas e planejadas para alunos com TEA e TDAH</li>
            <li>Manual de PEI simplificado e direto</li>
            <li>Não exige formações extras: qualquer professor pode aplicar</li>
          </ul>
        </section>

        <section className="section">
          <h2>Pontos Fortes dos Materiais da Juliana</h2>
          <ul className="feature-list">
            <li><strong>Clareza e linguagem acessível:</strong> Textos escritos com linguagem clara, sensível e respeitosa, mas com precisão conceitual. Até famílias e leitores leigos conseguem entender.</li>
            <li><strong>Base científica atualizada:</strong> Embasamento em DSM, ABA, TEACCH, NJCLD, e autores como Siegel e García Sánchez.</li>
            <li><strong>Organização visual excelente:</strong> Quadros, ícones, checklists e infográficos que facilitam o uso prático.</li>
            <li><strong>Foco na prática pedagógica:</strong> Materiais que vão além da teoria, incluindo fichas do PEI, quadros de incentivo, cartões de reforço positivo e modelos prontos para aplicação.</li>
            <li><strong>Identidade autoral marcante:</strong> Ilustrações originais de DihRôh Monteiro, layout padronizado e abordagem afetiva e única.</li>
          </ul>
        </section>

        <section className="section">
          <h2>O que o seu material entrega de diferencial</h2>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Seu material entrega?</th>
                  <th>Observação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ Conteúdo prático + teórico</td>
                  <td className="text-center">Sim</td>
                  <td>Com base em autores e aplicado à realidade</td>
                </tr>
                <tr>
                  <td>✔️ Inclusão verdadeira (TEA, TDAH)</td>
                  <td className="text-center">Sim</td>
                  <td>Didática sensível e visual adaptada</td>
                </tr>
                <tr>
                  <td>✔️ Quadros e ferramentas funcionais</td>
                  <td className="text-center">Sim</td>
                  <td>Modelos prontos para usar com alunos</td>
                </tr>
                <tr>
                  <td>✔️ Identidade visual consistente</td>
                  <td className="text-center">Sim</td>
                  <td>Ilustrações originais e acolhedoras</td>
                </tr>
                <tr>
                  <td>✔️ Linguagem acessível</td>
                  <td className="text-center">Sim</td>
                  <td>Clareza para famílias, professores e equipes</td>
                </tr>
                <tr>
                  <td>✔️ Organização pedagógica</td>
                  <td className="text-center">Sim</td>
                  <td>Os arquivos se comunicam entre si como uma coleção</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <h2>🧾 O que já existe no mercado</h2>
          <p><strong>✅ O que encontramos com frequência:</strong></p>
          <ul className="feature-list">
            <li>Apostilas genéricas de alfabetização ou atividades para imprimir</li>
            <li>E-books sobre educação inclusiva com foco teórico (pouca aplicação prática)</li>
            <li>Materiais sobre TEA/TDAH feitos por terapeutas, mas sem conexão pedagógica forte</li>
            <li>Cartazes avulsos vendidos como recurso visual, mas sem embasamento técnico ou proposta integrada</li>
          </ul>
          <p><strong>❌ O que geralmente falta:</strong></p>
          <ul className="feature-list">
            <li>Materiais prontos para aplicar em sala e em casa, com didática clara</li>
            <li>Quadros de incentivo e rotina adaptados para crianças neurodivergentes</li>
            <li>Integração entre teoria (ex: PEI, ABA, TEACCH) e prática concreta</li>
            <li>Conteúdo com linguagem inclusiva, afetiva e acessível, como o seu</li>
          </ul>
        </section>

        {/* Depoimento */}
        <div className="testimonial">
          "Usei o material da Juliana e consegui, pela primeira vez, engajar meu aluno com TDAH. Foi emocionante."<br />– Professora Lúcia, PE
        </div>

        {/* CTA Final */}
        <div className="cta">
          <p><strong>Pronto(a) para transformar sua prática?</strong></p>
          <a 
            href="https://pay.hotmart.com/G99344399J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
            aria-label="Adquirir o Kit Inclusivo"
          >
            Quero meu Kit Inclusivo
          </a>
        </div>

        {/* Direitos Autorais */}
        <div className="autorRights">
          <strong>Aviso de Direitos Autorais:</strong><br />
          Esta obra é protegida pela Lei de Direitos Autorais (Lei nº 9.610/98). Todo o conteúdo textual é de autoria de <strong>Juliana Monteiro da Cunha Batista</strong>, e as ilustrações são de autoria de <strong>DihRôh Monteiro</strong>, criadas exclusivamente para este projeto. É vedada a reprodução, distribuição ou uso comercial, total ou parcial, deste material sem a expressa autorização dos autores. Qualquer violação implicará nas sanções previstas em lei.
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        © 2025 Juliana Monteiro. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
