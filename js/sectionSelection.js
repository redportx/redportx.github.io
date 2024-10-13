function navigateToSection(hash) {
    // Update the hash in the URL without reloading
    location.hash = hash;
    console.log(location.hash);
    hash=hash.replace("#","");
    
    // Call the showSection function to display the correct section
    showSection(hash);
}

function showSection(section) {
    // Hide all sections first
    document.getElementById("homePage").style.display = 'none';
    document.getElementById("firstDate-Her").style.display = 'none';
    document.getElementById("engagementStory").style.display = 'none';
    document.getElementById("eventDetails").style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById("firstDate-His").style.display = 'none';
    
    // Show the corresponding section
    if (section) {
        document.getElementById(section).style.display = 'block';
    } else {
        document.getElementById('homePage').style.display = 'block'; // Default to home
    }
}

// On page load, check the hash and show the correct section
window.onload = function() {
    const hash = window.location.hash.substring(1); // Get the hash without '#'
    showSection(hash);
}

// Handle hash changes (if user clicks on links or changes URL manually)
window.onhashchange = function() {
    const hash = window.location.hash.substring(1); // Get the hash without '#'
    showSection(hash);
}
