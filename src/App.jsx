import './App.css';
import logoIBM from './assets/logoIBM.png';
import AgendaCard from './components/AgendaCard';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  // Dados da Agenda
  const agendaData = [
    { dataDay: "terca", hora: "19:00h", dia: "Terça-feira", titulo: "Oração: Mis. Jailda", },
    { dataDay: "quarta", hora: "15:30h", dia: "Quarta-feira", titulo: "🙏 Culto de Oração", diretor: "Gilvanete " },
    { dataDay: "quinta", hora: "19:00h", dia: "Quinta-feira", titulo: "Ensaio com a igreja para o aniversario da Sede no sabado " },
    { dataDay: "sexta", hora: "19:30h", dia: "Sexta-feira", titulo: "🔥 Culto de Oração", diretor: "Mis. Jailda", louvor: "Zenaide" },
    { dataDay: "sabado", hora: "19:30h", dia: "Sábado", titulo: "Culto de aniversario na sede", titulo2: " 6:00H Culto matinal" },
    {
      dataDay: "domingo", hora: "9:00h", dia: "Domingo - Manhã", titulo: "EBD", featured: true,
      extras: [
        { label: "Dir", valor: "Dalvinha" },
        { label: "Estudo/Templo", valor: "Júnior" },
        { label: "Discipulado", valor: "Mis. Jailda" }
      ]
    },
    {
      dataDay: "domingo-noite", hora: "19:00h", dia: "Domingo - Noite", titulo: "Culto de celebração", featured: true,
      extras: [
        { label: "Dir", valor: "Minist. de louvor" },
        { label: "Mensagem", valor: "Mis. Jailda" }
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
        <div className="date-badge">22/06 a 28/06</div>
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