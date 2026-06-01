const InfoSection = ({ titulo, icone, itens }) => {
  return (
    <section className="birthday-section">
      <div className="birthday-header">
        {icone && <span>{icone}</span>}
        <h2>{titulo}</h2>
      </div>
      <div className="birthday-list">
        {itens.map((item, index) => (
          <div className="b-item" key={index}>
            {item.destaque && <strong>{item.destaque}</strong>} 
            {item.destaque ? ` - ${item.texto}` : item.texto}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;