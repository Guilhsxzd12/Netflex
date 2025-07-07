import React, { useState } from "react";
import { motion } from "framer-motion";

const moviesData = [
  {
    category: "Lançamentos",
    items: [
      {
        id: "jurassic-park",
        title: "Jurassic Park",
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        description:
          "Um parque temático com dinossauros clonados vira uma armadilha mortal.",
        watchLink: "https://drive.google.com/drive/folders/example_jurassic_park",
      },
    ],
  },
  {
    category: "Ação",
    items: [
      {
        id: "action-movie-1",
        title: "Missão Impossível",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8f/Mission_Impossible_Fallout_poster.jpg",
        description: "Ethan Hunt enfrenta sua missão mais difícil.",
        watchLink:
          "https://drive.google.com/drive/folders/example_mission_impossible",
      },
    ],
  },
  {
    category: "Terror",
    items: [
      {
        id: "horror-movie-1",
        title: "Invocação do Mal",
        image:
          "https://upload.wikimedia.org/wikipedia/pt/2/28/Invocacao_do_Mal_Poster.jpg",
        description: "Fenômenos sobrenaturais assustam família.",
        watchLink: "https://drive.google.com/drive/folders/example_horror_1",
      },
    ],
  },
  {
    category: "Suspense",
    items: [
      {
        id: "suspense-movie-1",
        title: "Garota Exemplar",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/0b/Gone_Girl_Poster.jpg",
        description:
          "Mistério envolvendo desaparecimento e segredos obscuros.",
        watchLink: "https://drive.google.com/drive/folders/example_suspense_1",
      },
    ],
  },
];

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md z-50 p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Netflex</h1>
      </header>

      <main className="pt-20 px-6">
        {moviesData.map(({ category, items }) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <motion.div
              className="flex space-x-4 overflow-x-scroll scrollbar-hide"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              {items.map((movie) => (
                <motion.div
                  key={movie.id}
                  className="min-w-[160px] rounded overflow-hidden cursor-pointer relative"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedMovie(movie)}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="bg-gray-800 p-2 text-center font-semibold">
                    {movie.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}

        {selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6">
            <div className="bg-gray-800 rounded-lg max-w-lg w-full relative p-6">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={() => setSelectedMovie(null)}
              >
                &times;
              </button>
              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                className="w-full rounded mb-4"
              />
              <h3 className="text-3xl font-bold mb-2">{selectedMovie.title}</h3>
              <p className="mb-4">{selectedMovie.description}</p>
              <div className="flex space-x-4">
                <a
                  href={selectedMovie.watchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 rounded px-4 py-2"
                >
                  Assistir
                </a>
                <a
                  href="https://livepix.gg/luxstore/comprar?valor=1.50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2"
                >
                  Comprar R$1,50
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
