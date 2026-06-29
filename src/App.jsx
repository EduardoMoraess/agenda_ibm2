import './App.css';
import logoIBM from './assets/logoIBM.png';
import AgendaCard from './components/AgendaCard';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  // Dados da Agenda
  const agendaData = [
    { dataDay: "terca", hora: "19:30h", dia: "Terça-feira", titulo: "Estudo: Mis. Jailda", },
    { dataDay: "quarta", hora: "15:30h", dia: "Quarta-feira", titulo: "🙏 Culto de Oração", diretor: "Mis. Jailda " },
    { dataDay: "quinta", hora: "19:00h", dia: "Quinta-feira", titulo: "Ensaio com os ministerios Masc. e Fem para o aniversario" },
    { dataDay: "sexta", hora: "19:30h", dia: "Sexta-feira", titulo: "🔥 Culto de Oração", diretor: "Isabele", louvor: "Zenaide" },
    { dataDay: "sabado", hora: "19:30h", dia: "Sábado", titulo: "Aniversario dos ministerios masculino e feminino", diretor: "Mis. Jailda", 
      diretor1: "Pastor Helder" },
    {
      dataDay: "domingo", hora: "9:00h", dia: "Domingo - Manhã", titulo: "Ceia e batismo na Sede", featured: true
      /*extras: [
        { label: "Dir", valor: "Dalvinha" },
        { label: "Estudo/Templo", valor: "Júnior" },
        { label: "Discipulado", valor: "Mis. Jailda" }
      ]*/
    },
    {
      dataDay: "domingo-noite", hora: "19:00h", dia: "Domingo - Noite", titulo: "Culto de aniversário ", featured: true,
      extras: [
        { label: "Dir", valor: "Sandro" },
        { label: "Mensagem", valor: "Pr. Mateus" }
      ]
    },
  ];

  const aniversariantes = [
    // Dias dos aniversarios das pessoas da igreja
    { destaque: "01", texto: "Yasmin e Mariana" },
    { destaque: "14", texto: "Obreiro Jorge" },
  ];

  const pedidosOracao = [
    // Pedidos de oração
    { destaque: "🇧🇷", texto: "Brasil" },
    { destaque: "👨‍👩‍👦‍👦", texto: "Familia" },
    { destaque: "📖", texto: "Pastores e Missionarios" },
    { destaque: "🏥", texto: "Saúde" },
    { destaque: "⛪", texto: "Igreja" },
  ];

  return (
    <div className="app-container">
      <div className="background-overlay"></div>

      <header className="main-header">
        <div className="logo">
          <img src={logoIBM} alt="logoIBM" style={{ width: '300px' }} />
        </div>
        <h1>IBM do Ipsep</h1>
        <p className="subtitle">Agenda Semanal</p>
        <div className="date-badge">29/06 a 05/07</div>
      </header>

      <main className="container">
        <div className="agenda-grid">
          {agendaData.map((item, index) => (
            <AgendaCard key={index} {...item} />
          ))}
        </div>
      </main>

      <InfoSection
        titulo="Aniversariantes do Mês de Junho"
        icone="🎂"
        itens={aniversariantes}
      />

      <InfoSection
        titulo="Pedidos de Oração"
        itens={pedidosOracao}
      />

      <Footer/>
    </div>
  );
}

export default App;