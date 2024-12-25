document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const resumeFile = document.getElementById('resume').files[0];
    const photoFile = document.getElementById('profile-photo').files[0];

    // Create object URLs for the uploaded files
    const resumeUrl = URL.createObjectURL(resumeFile);
    const photoUrl = URL.createObjectURL(photoFile);

    // Display profile details
    document.getElementById('display-name').innerText = name;
    document.getElementById('display-email').innerText = email;
    document.getElementById('display-resume').href = resumeUrl;
    document.getElementById('display-photo').src = photoUrl;

    // Show profile display and hide form
    document.getElementById('profile-display').classList.remove('hidden');
    document.getElementById('profile-form').classList.add('hidden');
    document.getElementById('form-title').innerText = 'Edit Profile';

    // Add event listener for the edit button
    document.getElementById('edit-button').addEventListener('click', function() {
        // Hide profile display and show form
        document.getElementById('profile-display').classList.add('hidden');
        document.getElementById('profile-form').classList.remove('hidden');
        document.getElementById('form-title').innerText = 'Create Profile';

        // Reset form fields
        document.getElementById('profile-form').reset();
    });
});