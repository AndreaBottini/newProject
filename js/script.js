$(document).ready(function() {
    let urlApi = 'https://jsonplaceholder.typicode.com/users/1/posts';
    let data; // Variabile per conservare i dati

    // Funzione per popolare la tabella con i dati
    function insertDataTable(dati) {
        const table = $('#dati-tabella tbody');
        table.empty(); // Cancella il contenuto attuale della tabella
        dati.forEach((x) => { 
            table.append(
                `<tr><td>${x.id}</td><td>${x.title}</td><td>${x.body}</td><td>${x.userId}</td></tr>`
            );
        });
    }

    // Esegui la chiamata API e popola la tabella iniziale
    fetch(urlApi)
        .then((response) => response.json())
        .then((response) => {
            data = response; // Conserva i dati nella variabile
            insertDataTable(data);
        });

    // Gestore eventi per la select
    $("#filter-select").on("change", function() {
        const utenteSelezionato = $(this).val();
        if (utenteSelezionato === "all") {
            // Selezionato "Tutti", mostra tutti i dati
            insertDataTable(data);
        } else {
            // Filtra i dati in base all'utente selezionato
            const datiFiltrati = data.filter((dato) => dato.userId == utenteSelezionato);
            insertDataTable(datiFiltrati);
        }
    });
});

