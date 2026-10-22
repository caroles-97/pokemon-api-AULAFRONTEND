import { useState, useEffect } from "react";

export default function App() {
  // Estado para guardar o número do Pokémon atual.
  const [id, setId] = useState(1);

  // Estado para guardar os dados do Pokémon retornados pela API.
  const [pokemon, setPokemon] = useState(null);

  // Estado para mostrar se a busca está em andamento.
  const [carregando, setCarregando] = useState(true);

  // useEffect roda sempre que o valor de 'id' mudar.
  // Isso faz a busca de um novo Pokémon quando o usuário clica em Próximo ou Anterior.
  useEffect(() => {
    async function buscarPokemon() {
      // Quando começa a busca, mostra "Carregando...".
      setCarregando(true);

      try {
        // Busca os dados do Pokémon na API do PokéAPI.
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // Converte a resposta em um objeto JavaScript.
        const dados = await resposta.json();

        // Salva os dados do Pokémon no estado.
        setPokemon(dados);
      } catch (erro) {
        // Se der erro, mostra no console e limpa o Pokémon.
        console.error("Erro ao buscar Pokemon:", erro);
        setPokemon(null);
      } finally {
        // Sempre executa ao final, mesmo com erro.
        setCarregando(false);
      }
    }

    buscarPokemon();
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Pokédex</h1>

        {/* Se estiver carregando, mostra mensagem. */}
        {carregando ? (
          <p>Carregando...</p>
        ) : pokemon ? (
          <>
            <div className="bg-slate-100 rounded-xl p-4 mb-4">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="w-40 h-40 mx-auto"
              />
            </div>

            {/* Exibe o número do Pokémon e o nome dele. */}
            <p className="text-gray-400">#{pokemon.id}</p>
            <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>

            {/* Lista os tipos do Pokémon, como fogo, água, planta etc. */}
            <div className="flex justify-center gap-2 mb-6">
              {pokemon.types.map((tipo) => (
                <span
                  key={tipo.type.name}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize"
                >
                  {tipo.type.name}
                </span>
              ))}
            </div>
          </>
        ) : (
          <p className="mb-6">Não foi possível carregar.</p>
        )}

        <div className="flex gap-3">
          {/* Botão para voltar ao Pokémon anterior. */}
          <button
            onClick={() => setId(id - 1)}
            disabled={id === 1}
            className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-40 px-4 py-2 rounded-lg font-medium cursor-pointer disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          {/* Botão para ir para o próximo Pokémon. */}
          <button
            onClick={() => setId(id + 1)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium cursor-pointer"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}