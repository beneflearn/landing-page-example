document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const inputs = form.querySelectorAll("[data-sb-validations]");

    // Fungsi untuk mengecek input kosong
    function checkInputs() {
        let allFilled = true; // Flag untuk mengecek semua input required

        inputs.forEach((input) => {
            if (input.dataset.sbValidations.includes("required")) {
                if (input.value.trim() === "") {
                    allFilled = false;
                }
            }
        });

        // Toggle tombol submit
        submitButton.classList.toggle("disabled", !allFilled);
    }

    // Event listener untuk input (real-time tombol disable)
    inputs.forEach((input) => {
        input.addEventListener("input", checkInputs);
    });

    // Inisialisasi awal untuk tombol submit
    checkInputs();
});