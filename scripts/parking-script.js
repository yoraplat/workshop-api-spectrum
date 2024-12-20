const apiUrl = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=-1";
const spinner = $(".loading-state");
const container = $(".parking-status-container");

function fetchData(url) {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    beforeSend: function () {
      // Verwijder bestaande infoborden
      container.find(".parking-status").remove();

      // Toon spinner
      spinner.show();
    },
    success: function (data) {
      // Indien er geen errors zijn bij het ophalen van de data via api,
      // wordt alles in deze functie uitgevoerd.

      spinner.hide();
      updateDisplayedData(data.results);
    },
    error: function (xhr, status, error) {
      // Bij een error wordt de code in deze functie uitgevoerd
      console.error("Request failed with status:", status);
    },
  });
}

function updateDisplayedData(data) {
  // Nieuwe infoborden toevoegen aan html
  data.forEach((item) => {
    container.append(generateInfoTemplate(item));
  });
}

// Deze functie returned een nieuw html element voor de data meegegeven aan de functie
function generateInfoTemplate(data) {
  return `
        <div class="parking-status">
            <h1 class="parking-name">${data.name}</h1>
            <p class="free-spaces">Vrije plaatsen: <span>${data.availablecapacity}/${data.totalcapacity}</span></p>
            <p class="description">${data.description}</p>
        </div>
    `;
}

// Deze functie wordt uitgevoerd wanneer de js code ingeladen is
fetchData(apiUrl);
