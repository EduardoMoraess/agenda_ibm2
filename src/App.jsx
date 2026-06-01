import './App.css';
import logoIBM from './assets/logoIBM.png';
import AgendaCard from './compenents/AgendaCard';
import Footer from './compenents/Footer';
import InfoSection from './compenents/InfoSection';

function App() {
  // Dados da Agenda
  const agendaData = [
    { dataDay: "terca", hora: "19:00h", dia: "Terça-feira", titulo: "Doutrina: Mis. Jailda", diretor: "Francisca" },
    { dataDay: "quarta", hora: "15:30h", dia: "Quarta-feira", titulo: "🙏 Culto de Oração", diretor: "Dalvinha" },
    { dataDay: "quinta", hora: "19:00h", dia: "Quinta-feira", titulo: "Testemunho da irmã Coca. Toda a igreja está convidada" },
    { dataDay: "sexta", hora: "19:30h", dia: "Sexta-feira", titulo: "🔥 Culto de Oração", diretor: "Isabele" },
    { dataDay: "sabado", hora: "19:30h", dia: "Sábado", titulo: "Culto Jovem" },
    {
      dataDay: "domingo", hora: "9:00h", dia: "Domingo - Manhã", titulo: "EBD", featured: true,
      extras: [
        { label: "Dir", valor: "Mis. Jailda" },
        { label: "Estudo/Templo", valor: "Júnior" },
        { label: "Discipulado", valor: "Mis. Jailda" }
      ]
    },
    {
      dataDay: "domingo-noite", hora: "19:00h", dia: "Domingo - Noite", titulo: "Culto de Missões (DIP)", featured: true,
      extras: [
        { label: "Dir", valor: "Dir. Minist. Jovem" },
        { label: "Mensagem", valor: "Mis. Jailda" }
      ]
    },
  ];

  const aniversariantes = [
    // Dias dos aniversarios das pessoas da igreja
    { destaque: "01", texto: "Mis.Jailda Magalhães" },
    { destaque: "03", texto: "Thalita" },
    { destaque: "23", texto: "Marluce" },
    { destaque: "29", texto: "Ana Josefa" },
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
        <div className="date-badge">25/05 a 31/05</div>
      </header>

      <main className="container">
        <div className="agenda-grid">
          {agendaData.map((item, index) => (
            <AgendaCard key={index} {...item} />
          ))}
        </div>
      </main>

      <InfoSection
        titulo="Aniversariantes do Mês de Maio"
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