document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("basicPlanForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const inputs = form.querySelectorAll("input");

    // -----------------------------
    // Set minimum date for date picker
    // -----------------------------
    const dateInput = form.querySelector('input[type="date"]');
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    // -----------------------------
    // Validation function
    // -----------------------------
    function validateField(input) {
        const errorSpan = input.nextElementSibling;
        let valid = true;
        let errorMsg = "";

        if (input.hasAttribute("required") && !input.value.trim()) {
            valid = false;
            errorMsg = "This field is required.";
        } else if (input.type === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value.trim())) {
                valid = false;
                errorMsg = "Enter a valid email.";
            }
        } else if (input.type === "tel") {
            const phonePattern = /^[0-9\-\+\s\(\)]{7,15}$/;
            if (!phonePattern.test(input.value.trim())) {
                valid = false;
                errorMsg = "Enter a valid phone number.";
            }
        } else if (input.type === "date") {
            const selectedDate = new Date(input.value);
            selectedDate.setHours(0,0,0,0);
            const todayDate = new Date();
            todayDate.setHours(0,0,0,0);

            if (!input.value) {
                valid = false;
                errorMsg = "Please select a date.";
            } else if (selectedDate < todayDate) {
                valid = false;
                errorMsg = "Select a future date.";
            }
        }

        if (!valid) {
            input.classList.add("border-red-500");
            errorSpan.textContent = errorMsg;
            errorSpan.classList.remove("hidden");
        } else {
            input.classList.remove("border-red-500");
            errorSpan.textContent = "";
            errorSpan.classList.add("hidden");
        }

        return valid;
    }

    // -----------------------------
    // Validate on blur
    // -----------------------------
    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            validateField(input);
        });
    });

    // -----------------------------
    // Prevent Enter from submitting prematurely
    // -----------------------------
    form.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && e.target.tagName === "INPUT") {
            e.preventDefault();
            validateField(e.target);
        }
    });

    // -----------------------------
    // Validate all fields on submit
    // -----------------------------
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let allValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                allValid = false;
            }
        });

        if (allValid) {
            form.classList.add("hidden"); // hide form
            thankYouMessage.classList.remove("hidden"); // show thank you
        }
    });
});
