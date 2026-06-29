const AgendaCard = ({ dia, hora, titulo, diretor, extras, featured, dataDay,louvor, diretor1 }) => {
    return (
        <section className={`card ${featured ? 'featured' : ''}`} data-day={dataDay}>
            <div className="card-time">{hora}</div>

            <div className="card-content">
                <h2>{dia}</h2>
                <h3>{titulo}</h3>

                {diretor && (
                    <p><strong>Dir.</strong> {diretor}</p>
                )}
                {louvor && (
                    <p><strong>Louvor:</strong>{louvor}</p>
                )}

                {diretor1 &&(
                    <p><strong>Mensagem:</strong>{diretor1}</p>
                )}

                {/* Mapeia detalhes extras (como os de domingo) caso existam */}
                {extras && extras.map((item, index) => (
                    <p key={index}>
                        <strong>{item.label}:</strong> {item.valor}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default AgendaCard;