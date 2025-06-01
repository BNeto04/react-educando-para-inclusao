import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Banner Superior */}
      <div className="top-banner">
        <span>
          🎯 Os primeiros educadores que assumirem o protagonismo nesta jornada terão acesso direto ao suporte via WhatsApp. Uma oportunidade exclusiva para quem decide agir agora.
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
        <h1>Torne-se a Educadora que Transforma: Protagonismo, Propósito e Resultados Visíveis</h1>
        <p>Você já faz a diferença — agora é hora de ensinar com liberdade, colher resultados visíveis e conquistar mais tempo para viver melhor.</p>
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
          <h2>Você sabe que seus alunos merecem mais — e sente que tem força para oferecer isso. Mas falta tempo, ferramentas e direção.</h2>
          <p>A maioria das formções não prepara para a sala de aula real. Como educador, você está na linha de frente, enfrentando os desafios da inclusão todos os dias: adaptar conteúdos para alunos com TEA, TDAH e dificuldades de aprendizagem exige mais do que boas intenções. Mas este kit foi feito para quem, como você, quer ver resultados reais sem sacrificar sua energia ou tempo.</p>
        </section>

        <section className="section">
          <h2>Apresentando: Educando para a Inclusão</h2>
          <p>Nascido da prática e da paixão de uma verdadeira heroína da educação, o Kit “Educando para a Inclusão” é o braço direito que você precisa para ensinar com empatia, clareza e impacto.</p>
          <div className="bio-box">
            <p><strong>Quem é Juliana Monteiro?</strong></p>
            <p>Juliana Monteiro é uma educadora que transformou a sala de aula em um palco de impacto e esperança. Com 12 anos de experiência no chão da escola, ela não apenas ensina — ela muda vidas. Especializada em História, Psicopedagogia e Educação Inclusiva, Juliana é a força por trás deste material, criado para empoderar professores como você a ensinar com clareza, economizar tempo e viver com mais leveza. Sua jornada é marcada pela prática: ela enfrentou os desafios reais da inclusão e desenvolveu ferramentas testadas em sala para atender alunos com necessidades diversas, com foco em atividades que funcionam de verdade.</p>
          </div>
          <p>Ele traz uma abordagem prática, acessível e direta sobre como lidar com alunos com necessidades diversas em sala de aula, com foco em atividades que funcionam de verdade.</p>
        </section>

        <section className="section">
          <h2>O que você vai receber:</h2>
          <p>Este kit é um verdadeiro atalho para quem está pronto para transformar vidas. Cada ferramenta foi projetada para economizar seu tempo, potencializar seus resultados e facilitar sua prática — para que você ensine com confiança e leveza, sem complicações.</p>
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
          <p>Você já dá tanto de si em sala de aula, e nós queremos te agradecer com bônus que fazem a diferença. Um gesto de carinho para quem ensina com o coração — porque acreditamos no seu impacto e queremos te ver brilhar ainda mais, sem esperar nada em troca.</p>
          <ul className="bonus-list">
            <li>Manual prático de PEI – R$ 29,00</li>
            <li>Modelo de ficha adaptada – R$ 19,00</li>
            <li>Guia de reforço positivo – R$ 27,00</li>
            <li><strong>Valor total dos bônus: R$ 75,00 – um presente nosso para você, sem custos extras!</strong></li>
          </ul>
        </section>

        <section className="section">
          <h2>Por que este material é diferente de tudo que você já viu?</h2>
          <p>Enquanto outros materiais falam sobre inclusão à distância, este kit fala com você — direto do chão da sala de aula para a realidade de cada aluno. Ele foi feito para quem não tem tempo a perder com teorias desconexas ou adaptações genéricas.</p>
          <p>Com ele, você ensina com propósito, transforma com clareza e ainda ganha tempo para viver melhor. Aqui, você não precisa ser especialista para fazer a diferença: só precisa ser você.</p>
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
            <li><strong>Clareza para Transformar:</strong> Textos que falam sua língua, com sensibilidade e precisão, para que você conecte alunos, famílias e equipes com facilidade.</li>
            <li><strong>Ciência ao Seu Lado:</strong> Embasamento sólido em DSM, ABA, TEACCH, e autores como Siegel e García Sánchez, para que você ensine com confiança e respaldo.</li>
            <li><strong>Organização que Liberta:</strong> Quadros, ícones e checklists que simplificam sua prática e liberam tempo para o que realmente importa — seus alunos e sua vida.</li>
            <li><strong>Prática que Faz a Diferença:</strong> Ferramentas testadas em sala, como fichas de PEI e cartões de reforço, para que você aplique estratégias que funcionam, sem perder energia.</li>
            <li><strong>Autoria que Inspira:</strong> Ilustrações únicas de DihRôh Monteiro, com um toque afetivo que reflete o cuidado que você já carrega no seu dia a dia.</li>
          </ul>
        </section>

        <section className="section">
          <h2>O que o seu material entrega de diferencial</h2>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Ferramenta do Herói</th>
                  <th>Pronta para Você?</th>
                  <th>Impacto Real</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ Teoria que Ganha Vida</td>
                  <td className="text-center">Sim</td>
                  <td>Feita por quem ensina, para quem ensina</td>
                </tr>
                <tr>
                  <td>✔️ Inclusão que Transforma</td>
                  <td className="text-center">Sim</td>
                  <td>Didática visual para alcançar cada aluno</td>
                </tr>
                <tr>
                  <td>✔️ Ferramentas que Simplificam</td>
                  <td className="text-center">Sim</td>
                  <td>Modelos práticos que economizam seu tempo</td>
                </tr>
                <tr>
                  <td>✔️ Estilo que Conecta</td>
                  <td className="text-center">Sim</td>
                  <td>Ilustrações que refletem o cuidado que você já tem</td>
                </tr>
                <tr>
                  <td>✔️ Clareza que Empodera</td>
                  <td className="text-center">Sim</td>
                  <td>Uma linguagem que une você, famílias e equipes</td>
                </tr>
                <tr>
                  <td>✔️ Sistema que Funciona</td>
                  <td className="text-center">Sim</td>
                  <td>Tudo integrado para facilitar sua prática</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section">
          <h2>🧾 O que já existe por aí não é o suficiente</h2>
          <p><strong>✅ O que outros oferecem:</strong></p>
          <ul className="feature-list">
            <li>Apostilas genéricas que não atendem às suas necessidades reais</li>
            <li>E-books teóricos que não sobrevivem ao caos da sala de aula</li>
            <li>Materiais desconexos, sem foco no dia a dia do professor</li>
            <li>Recursos visuais avulsos, sem embasamento ou integração</li>
          </ul>
          <p><strong>❌ O que você não encontra:</strong></p>
          <ul className="feature-list">
            <li>Ferramentas prontas que realmente funcionam em sala de aula</li>
            <li>Quadros e rotinas que fazem sentido para alunos neurodivergentes</li>
            <li>Um sistema que une teoria e prática, economizando seu tempo</li>
            <li>Uma linguagem acolhedora que valoriza sua experiência e conecta todos</li>
          </ul>
        </section>

        {/* Depoimento */}
        <div className="testimonial">
          "Com o kit da Juliana, eu finalmente vi meu aluno com TDAH se engajar de verdade. Foi como se eu tivesse descoberto o caminho para transformar vidas — e o melhor, sem sacrificar meu tempo ou energia." – Professora Lúcia, PE
        </div>

        {/* CTA Final */}
        <div className="cta">
          <p><strong>Você já é um herói em sala de aula — agora é hora de ativar o seu poder: ensinar com clareza, ver o impacto acontecer e viver com mais leveza.</strong></p>
          <a 
            href="https://pay.hotmart.com/G99344399J" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
            aria-label="Adquirir o Kit Inclusivo"
          >
            Quero ser o Educador que Transforma
          </a>
        </div>

        {/* Direitos Autorais */}
        <div className="autorRights">
          <strong>Aviso de Direitos Autorais:</strong><br />
          Este kit é um legado de cuidado e transformação, protegido pela Lei de Direitos Autorais (Lei nº 9.610/98). Criado com paixão por Juliana Monteiro da Cunha Batista (textos) e DihRôh Monteiro (ilustrações), ele é exclusivo para quem acredita na inclusão de verdade. Reprodução, distribuição ou uso comercial sem autorização são proibidos, sob as penas da lei.
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        © 2025 Juliana Monteiro – Uma jornada de inclusão para heróis da educação. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;