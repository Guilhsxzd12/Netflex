
import React, { useState, useEffect } from 'react';
import moviesData from './data/movies.json';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-5 text-3xl font-bold border-b border-gray-700">
        Netflex
      </header>

      <main className="p-5">
        {moviesData.map((category) => (
          <section key={category.category} className="mb-10">
            <h2 className="text-xl font-semibold mb-3">{category.category}</h2>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {category.items.map((movie) => (
                <div
                  key={movie.id}
                  className="min-w-[160px] cursor-pointer"
                  onClick={() => setSelectedMovie(movie)}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="rounded-md mb-2 w-full h-40 object-cover"
                  />
                  <div className="text-sm font-semibold">{movie.title}</div>
                  <div className="text-xs text-gray-400">R$ {movie.price}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {selectedMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-5 z-50">
            <div className="bg-gray-800 rounded-md max-w-lg w-full p-5 relative">
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-2 right-2 text-white text-xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                className="w-full rounded-md mb-3"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedMovie.title}</h3>
              <p className="mb-3">{selectedMovie.description}</p>
              <div className="flex space-x-4">
                <a
                  href={selectedMovie.watchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                  Assistir
                </a>
                <a
                  href={selectedMovie.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
