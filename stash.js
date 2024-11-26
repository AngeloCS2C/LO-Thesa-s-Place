const motivations = [
    "Plan your weddings, birthdays, seminars, and more in our fully equipped venue.",
    "Stroll through our picturesque nature park and enjoy Instagrammable spots.",
    "Discover breathtaking spots for your perfect photos.",
    "Unwind and relax in our serene and comfortable spaces."
];

let motivationIndex = 0;
const motivationContent = document.getElementById("motivation-content");

// Function to update the motivational text
function updateMotivation() {
    motivationContent.textContent = motivations[motivationIndex];
    motivationIndex = (motivationIndex + 1) % motivations.length;
}

// Trigger the first update immediately
updateMotivation();

// Set up the interval for subsequent updates
setInterval(updateMotivation, 4000);


// Open Modal
function openModal() {
    document.getElementById("booking-modal").style.display = "block";
}

// Close Modal
function closeModal() {
    document.getElementById("booking-modal").style.display = "none";
}

// Calculate Total Cost
function calculateTotal() {
    const persons = document.getElementById("persons").value;
    const entranceFee = 25;
    const reservationFee = 300;
    let total = reservationFee;

    if (persons > 0) {
        total += persons * entranceFee;
    }

    document.getElementById("total-display").textContent = `Total: ₱${total}`;
}

// Form Submission
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();
    closeModal();
    alert("Booking successfully submitted!");
});
