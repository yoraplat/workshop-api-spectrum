// API URL voor het ophalen van parkeergegevens
const apiUrl = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=-1";

// Het element dat de laadspinner toont
const spinner = $(".loading-state");

// Het element waar de parkeergegevens in worden weergegeven
const container = $(".parking-status-container");

// Functie om data van de API op te halen
function fetchData(url) {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    beforeSend: function () {
      // Verwijder oude parkeergegevens en toon de laadspinner
      container.find(".parking-status").remove();
      spinner.show();
    },
    success: function (response) {
      // Verstop de laadspinner en werk de data bij zodra de API succesvol is
      spinner.hide();
      updateParkingInfo(response.results);
    },
    error: function (xhr, status, error) {
      // Toon een foutmelding als de API-aanroep mislukt
      console.error("Fout bij ophalen van data:", status);
    },
  });
}

// Functie om de opgehaalde parkeergegevens weer te geven
function updateParkingInfo(parkingData) {
  // Sorteer de gegevens op naam (alfabetisch)
  const sortedParkingData = parkingData.sort((a, b) => {
    return a.name.localeCompare(b.name); // Vergelijk de namen alfabetisch
  });

  // Voeg voor elk item in de opgehaalde data een nieuw infobord toe
  sortedParkingData.forEach((item) => {
    container.append(generateParkingTemplate(item));
  });
}

// Functie die een HTML-element maakt voor een parkeerinformatie bord
function generateParkingTemplate(parking) {
  return `
    <a 
      href="https://www.google.com/maps?q=${parking.location.lat},${parking.location.lon}"
      target="_blank"
      class="parking-status"
    >
        <h1 class="parking-name">${parking.name}</h1>
        <p class="free-spaces">Beschikbare plaatsen: <span>${parking.availablecapacity}</span></p>
        <p class="description">${parking.description}</p>
    </a>
  `;
}

// Haal de data op van de API zodra de pagina is geladen
fetchData(apiUrl);
