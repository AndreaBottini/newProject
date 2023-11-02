$(document).ready(function() {
    let urlApi = 'https://jsonplaceholder.typicode.com/users/1/posts'
    fetch(urlApi)
        .then((response) => response.json())
        .then((data) => {
            function insertDataTable() {
                const table = $('#dati-tabella tbody')
                data.forEach((x) => { 
                    table.append(
                        `<tr><td>${x.id}</td><td>${x.title}</td><td>${x.body}</td><td>${x.userId}</td></tr>`)
                });
            }
            insertDataTable() 
        }) 
});

