document.getElementById('registrationForm').addEventListener('submit', function(event) {
event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (name && email && phone && password && confirmPassword) {
      if (password === confirmPassword) {
          document.getElementById('message').classList.remove('hidden');
          document.getElementById('registrationForm').reset(); // Reset the form
      } else {
          alert('Passwords do not match.');
      }
  } else {
      alert('All fields are required.');
  }
});

  
  