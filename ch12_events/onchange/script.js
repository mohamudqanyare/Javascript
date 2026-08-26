const countries = {
  somalia: {
    name: "Somalia",
    capital: "Mogadishu",
    continent: "Africa",
    population: "18 Million",
    description:
      "Somalia is located in the Horn of Africa. It has the longest coastline on mainland Africa and is famous for its rich history, beautiful beaches, and vibrant culture.",
  },

  japan: {
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia",
    population: "124 Million",
    description:
      "Japan is known for advanced technology, cherry blossoms, anime, delicious cuisine, and a unique blend of ancient traditions with modern cities.",
  },

  canada: {
    name: "Canada",
    capital: "Ottawa",
    continent: "North America",
    population: "40 Million",
    description:
      "Canada is the world's second-largest country. It is famous for beautiful lakes, forests, wildlife, and friendly people.",
  },

  brazil: {
    name: "Brazil",
    capital: "Brasília",
    continent: "South America",
    population: "216 Million",
    description:
      "Brazil is home to the Amazon Rainforest, Carnival festival, football legends, and diverse wildlife.",
  },

  egypt: {
    name: "Egypt",
    capital: "Cairo",
    continent: "Africa",
    population: "112 Million",
    description:
      "Egypt is famous for the Pyramids of Giza, the Nile River, and one of the world's oldest civilizations.",
  },

  france: {
    name: "France",
    capital: "Paris",
    continent: "Europe",
    population: "68 Million",
    description:
      "France is known for the Eiffel Tower, fashion, art, fine cuisine, and beautiful countryside.",
  },
};

function showCountryInfo() {
  const selectedCountry = document.getElementById("country").value;
  const info = document.getElementById("info");

  if (selectedCountry === "") {
    info.innerHTML = `
            <h2>Select a country</h2>
            <p>Information will appear here.</p>
        `;
    return;
  }

  const country = countries[selectedCountry];

  info.innerHTML = `
        <h2>${country.name}</h2>

        <p><span class="highlight">Capital:</span> ${country.capital}</p>

        <p><span class="highlight">Continent:</span> ${country.continent}</p>

        <p><span class="highlight">Population:</span> ${country.population}</p>

        <p><span class="highlight">Description:</span><br>${country.description}</p>
    `;
}
