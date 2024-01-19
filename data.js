fetch('https://meet.lpho.go.th/show_count_smog')
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data); // You can replace this with your own logic to display or manipulate the data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
