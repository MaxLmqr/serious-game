import React from "react";

const PasswordResult = props => {
  const { passwordResult } = props;
  return (
    <div className="ui container segment">
      <h2> Résultats : </h2>
      <p>
        <strong>Nombre d'essai estimé pour cracker le mot de passe : </strong>{" "}
        {passwordResult.guesses}
        {/* {passwordResult} */}
      </p>
      <p>
        <strong>
          Temps estimé pour cracker ce mot de passe par force brute :
        </strong>{" "}
        {passwordResult.crack_times_display.online_no_throttling_10_per_second}
      </p>
      <p>
        <strong>
          Temps estimé pour cracker ce mot de passe avec une fonction de hash :
        </strong>{" "}
        {
          passwordResult.crack_times_display
            .offline_fast_hashing_1e10_per_second
        }
      </p>
      <p>
        <strong>
          Score de votre mot de passe (de 0 à 4) :{" "}
          <span
            style={{
              fontSize: 30,
              color: passwordResult.score > 2 ? "green" : "red"
            }}
          >
            {passwordResult.score}
          </span>
        </strong>
      </p>
      <p>
        <em>
          Notez qu'il existe des attaques par dictionnaires qui peuvent être
          beaucoup plus efficaces que les résutlats ci-dessus dans le cas où
          votre mot de passe contient des mots répertoriés. Pour cette raison,
          voici quelques explications/conseils à ce sujet.
        </em>
      </p>
    </div>
  );
};

export default PasswordResult;
