# Hoe werkt een API?

Een API (Application Programming Interface) is een manier waarop twee systemen met elkaar communiceren. Dit proces kan worden weergegeven in vier stappen:


---

## Stappen in detail:

### 1. 📱 **De gebruiker stuurt een verzoek**
Een gebruiker (bijvoorbeeld via een applicatie of website) vraagt informatie op, zoals de huidige temperatuur in Gent.  
Dit gebeurt via een HTTP-verzoek (GET, POST, etc.) naar een API.

### 2. 🌐 **De API ontvangt het verzoek**
De server die de API host, ontvangt het verzoek en kijkt of deze geldig is.  
Bijvoorbeeld: Is de API-sleutel correct? Is het verzoek correct geformuleerd?

### 3. 🛠️ **De server verwerkt het verzoek**
De server zoekt de gevraagde informatie in een database of voert berekeningen uit.  
Bijvoorbeeld: De server haalt weergegevens op van Gent.

### 4. 🌐 **De API stuurt een antwoord terug**
De API verpakt het antwoord (meestal in **JSON-formaat**) en stuurt het terug naar de applicatie.  

### 5. 📱 **De gebruiker ziet het resultaat**
De applicatie toont de ontvangen gegevens aan de gebruiker, bijvoorbeeld:  
"Het is momenteel 15°C in Gent."

---

## Visueel schema

```plaintext
[Applicatie/Frontend]  
        |
        ▼  
    [API Verzoek]  
        |  
        ▼  
 [API Server/Backend]  
        |  
        ▼  
    [Database of Externe Service]  
        |  
        ▼  
    [API Antwoord]  
        |  
        ▼  
[Applicatie toont de data]
```
