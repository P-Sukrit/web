// script.js

// Fetch JSON data
fetch('https://meet.lpho.go.th/show_count_smog')
    .then(response => {
        if (!response.ok) {
            console.error('Network response was not ok. Status Code:', response.status);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Display JSON data
        const jsonDataContainer = document.getElementById('jsonDataContainer');
        jsonDataContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    })
    .catch(error => console.error('Error fetching JSON:', error));
