import Card from "./Card";

const CardList = ({ movies, moviesInfo }) => {
  return (
    <div className="row">
      {movies &&
        moviesInfo &&
        movies.map((movie, i) =>
          // Adiciona a verificação if
          // Se moviesInfo[i] não existe, retorna null e não renderiza o Card
          moviesInfo[i] ? (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
              image={moviesInfo[i].image}
              api_id={moviesInfo[i].id}
            />
          ) : null
        )}
    </div>
  );
};

export default CardList;
