import './App.css';
import logoIBM from './assets/logoIBM.png';
import AgendaCard from './components/AgendaCard';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  // Dados da Agenda
  const agendaData = [
    { dataDay: "terca", hora: "19:30h", dia: "Terça-feira", titulo: "Estudo: Mis. Jailda", diretor: "Zenaide" },
    { dataDay: "quarta", hora: "15:30h", dia: "Quarta-feira", titulo: "🙏 Culto de Oração", diretor: "Dalvinha" },
    { dataDay: "quinta", hora: "19:00h", dia: "Quinta-feira", titulo: "Reunião de minist. Masculino e Feminino" },
    { dataDay: "sexta", hora: "19:30h", dia: "Sexta-feira", titulo: "🔥 Culto de Oração", diretor: "Mis. Jailda", louvor: "Zenaide" },
    { dataDay: "sabado", hora: "19:30h", dia: "Sábado", titulo: "Culto Jovem", matutino: "6:00h - Matutino" },
    {
      dataDay: "domingo", hora: "9:00h", dia: "Domingo - Manhã", titulo: "EBD", featured: true,
      extras: [
        { label: "Dir", valor: "Alex" },
        { label: "Estudo/Templo", valor: "Junior" },
        { label: "Discipulado", valor: "Mis. Jailda " }
      ]
    },
    {
      dataDay: "domingo-noite", hora: "19:00h", dia: "Domingo - Noite", titulo: "Culto de Celebração", featured: true,
      extras: [
        { label: "Dir", valor: "Ministerio Feminino" },
        { label: "Mensagem", valor: "Semin. Hilbert" }
      ]
    },
  ]

  const aniversariantes = [
    // Dias dos aniversarios das pessoas da igreja
    { destaque: "06", texto: "Mazinha" },
    { destaque: "10", texto: "Italo" },
    { destaque: "17", texto: "Natalia" },
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
        <div className="date-badge">10/08 a 16/08</div>
      </header>

      <main className="container">
        <div className="agenda-grid">
          {agendaData.map((item, index) => (
            <AgendaCard key={index} {...item} />
          ))}
        </div>
      </main>

      <InfoSection
        titulo="Aniversariantes do Mês de Agosto"
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