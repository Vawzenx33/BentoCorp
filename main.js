document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value
      };
      
      fetch('https://your-api-gateway-url/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
  });
  