# Volgorde
## Korte introductie
Over mij:
- Naam
- Opleiding
- Job

Vragen aan studenten:
    - Waarom deze richting
    - Interesses binnen IT
    - Verder studeren

Vragen over mij?

## Doel van workshop
Begrip api en werking hiervan begrijpen en beperkt toepassen adhv jquery

- Vragen wie hier al ervaring mee heeft/kennis

## Voorbeeld van het eindresultaat tonen
- Voorbeeld https://www.parkings.gent/

## Uitleggen wat een API is
### Wat is een API
Een API of Application Programming Interface kan je zien als een toegangspunt (of een brug) tussen websites, servers, programma's en en andere toepassingen die verbonden zijn met het internet.

Dit kan je vergelijken met een ober in een restaurant.
De ober komt naar je tafel, neemt je bestelling op bv. 2 cola's, spaghetti en een pizza. Met deze informatie gaat hij naar de keuken en geeft jouw bestelling door. Wanneer je bestelling klaar is komt de ober naar je tafel met de 2 cola's, spaghetti en de pizza.

In deze situatie stuur je een verzoek (een request) via de ober (API) naar de keuken (server), waarna de keuken jouw bestelling via de ober naar je tafel stuurt (een response).

In deze verzoeken of requests kan je ook kiezen uit verschillende soorten methodes. Zo heb je bv:
- GET: Opvragen van data
- POST: Data opslaan
- PATCH: Data aanpassen
- DELETE: Data verwijderen

Vandaag gaan we enkel focussen op een GET request, maar het principe voor alle methodes blijft hetzelfde. Je stuurt een request naar een api en krijgt hierop een response.

*
Bijkomende video indien nog niet helemaal duidelijk
uitleg api: https://youtu.be/s7wmiS2mSXY?si=e4eUEzIJpc3LSS7M
*

### Waarom werken met een API?
Het grote voordeel aan het werken via een API is dat je als developer exact kan bepalen welke data je toegankelijk maakt voor anderen. Dit zorgt ervoor dat je bv minder kans hebt dat bv een hacker toegang krijgt tot je volledige database. Anderzijds kan je jouw website of applicatie opsplitsen in een backend of frontend wat je code overzichtelijker, sneller en makkelijker te onderhouden maakt.

### Side note
Een API is geen constante verbinding zoals bv een verbinding tussen een server en een database. Om data te ontvangen van een API is er altijd een request (verzoek) nodig, waarop de API reageert met een response (antwoord).
Ook is er geen beperking welke websites/applicaties/servers/software een request kunnen sturen naar een API. Wel kan de toegang geweigerd worden door een API indien een request niet vereiste authenticatie bevat.

## Oorsprong van data (Open data Gent)
https://data.stad.gent/explore/dataset/bezetting-parkeergarages-real-time/api/?sort=-occupation&location=13,51.049,3.71301&basemap=jawg.streets

Vandaag gaan we deze API van stad Gent gebruiken. Dit is een voorbeeld van een simpele API waarbij geen authenticatie vereist is en enkel maar GET request geaccepteerd worden. 
*POST request tonen in postman*