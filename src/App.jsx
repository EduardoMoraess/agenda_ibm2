import './App.css';
import logoIBM from './assets/logoIBM.png';
import AgendaCard from './components/AgendaCard';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
  // Dados da Agenda
  const agendaData = [
    { dataDay: "terca", hora: "19:30h", dia: "Terça-feira", titulo: "Estudo: Mis. Jailda", diretor: "Mazinha" },
    { dataDay: "quarta", hora: "15:30h", dia: "Quarta-feira", titulo: "🙏 Culto de Oração", diretor: "Mis.Jailda" },
    { dataDay: "quinta", hora: "19:00h", dia: "Quinta-feira", titulo: "Oração e ensaio com os minist. Masculino Feminino " },
    { dataDay: "sexta", hora: "19:30h", dia: "Sexta-feira", titulo: "Culto de Oração", diretor:"Mis.Jailda", louvor: "Zenaide e Leticia" },
    { dataDay: "sabado", hora: "19:30h", dia: "Sábado", titulo: "Retiro jovem no Shalom ", matutino: "6:00h - Matutino" },
    {
      dataDay: "domingo", hora: "9:00h", dia: "Domingo - Manhã", titulo: "EBD", featured: true,
      extras: [
        { label: "Dir", valor: "Dalvinha " },
        { label: "Estudo/Templo", valor: "Junior" },
        { label: "Discipulado", valor: "Dc° Márcio" }
      ]
    },
    {
      dataDay: "domingo-noite", hora: "19:00h", dia: "Domingo - Noite", titulo: "Culto de Celebração", featured: true,
      extras: [
        { label: "Dir", valor: "Dir. Minist/Feminino " },
        { label: "Mensagem", valor: " Mis. Jailda" }
      ]
    },
  ]

  const aniversariantes = [
    // Dias dos aniversarios das pessoas da igreja
    { destaque: "01", texto: "Ivone" },
    { destaque: "13", texto: "Isaac" },
    { destaque: "14", texto: "Dc° Graça" },
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
        <div className="date-badge">31/08 a 06/09</div>
      </header>

      <main className="container">
        <div className="agenda-grid">
          {agendaData.map((item, index) => (
            <AgendaCard key={index} {...item} />
          ))}
        </div>
      </main>

      <InfoSection
        titulo="Aniversariantes do Mês de Setembro"
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