const About = () => {
  return (
    <div className="container mt-2 min-vh-71 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="text-white mb-3">O que é o Movix?</h1>
        <p className="text-secondary">
          O Movix é uma aplicação construída a partir do React que possuí como
          finalidade criar uma interface de fácil navegação entre os filmes dos
          usuários. Para realizar essa função, o Movix utilizada a TMDB Api que
          possui um vasto repositório de filmes.
        </p>
      </div>
    </div>
  );
};

export default About;
