document.addEventListener("DOMContentLoaded", function () {

    // Enable/Disable submit button based on input validity
    function toggleSubmitButton() {
        const submitButton = document.getElementById("submitButton");

        const regName = document.getElementById("registerName").value.trim();
        const regEmail = document.getElementById("registerEmail").value.trim();
        const regPhone = document.getElementById("registerPhone").value.trim();
        const regPassword = document.getElementById("registerPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        const nameValid = /^[a-zA-Z\s]{2,50}$/.test(regName);
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(regEmail);
        const phoneValid = /^\d{10}$/.test(regPhone);
        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(regPassword);
        const passwordsMatch = regPassword === confirmPassword;

        submitButton.disabled = !(nameValid && emailValid && phoneValid && passwordValid && passwordsMatch);
    }

    // Add input listeners for real-time validation
    ["registerName", "registerEmail", "registerPhone", "registerPassword", "confirmPassword"].forEach(id => {
        document.getElementById(id).addEventListener("input", toggleSubmitButton);
    });

    // Register Form Submission
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const regName = document.getElementById("registerName").value.trim();
        const regPhone = document.getElementById("registerPhone").value.trim();
        const regEmail = document.getElementById("registerEmail").value.trim();
        const regPassword = document.getElementById("registerPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!regName || !regPhone || !regEmail || !regPassword || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (regPassword !== confirmPassword) {
            alert("Passwords do not match. Please type the correct password.");
            return;
        }

        if (localStorage.getItem(regEmail)) {
            alert("Email already registered! Try logging in.");
            return;
        }

        localStorage.setItem(regEmail, JSON.stringify({
            name: regName,
            phone: regPhone,
            password: regPassword
        }));

        alert("Account created successfully! You can now log in.");
    });

    // Login Form Submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const storedUser = localStorage.getItem(email);

        if (!storedUser) {
            alert("User not found! Please register.");
            return;
        }

        const userData = JSON.parse(storedUser);
        if (password === userData.password) {
            alert(`Welcome, ${userData.name}! Login successful.`);
            localStorage.setItem("userName", userData.name);
            window.location.href = "welcome.html";
        } else {
            alert("Invalid email or password!");
        }
    });

    // Password Show/Hide
    function togglePassword(inputId, iconId) {
        const input = document.getElementById(inputId);
        const icon = document.getElementById(iconId);

        icon.addEventListener("click", () => {
            const isPassword = input.type === "password";
            input.type = isPassword ? "text" : "password";
            icon.classList.toggle("ri-eye-fill", isPassword);
            icon.classList.toggle("ri-eye-off-fill", !isPassword);
        });
    }

    togglePassword("registerPassword", "toggleRegisterPassword");
    togglePassword("confirmPassword", "toggleConfirmPassword");
    togglePassword("loginPassword", "toggleLoginPassword");

    // Switch Login/Register Views
    document.getElementById("loginButtonRegister").addEventListener("click", () => {
        document.getElementById("loginAccessRegister").classList.add("active");
    });

    document.getElementById("loginButtonAccess").addEventListener("click", () => {
        document.getElementById("loginAccessRegister").classList.remove("active");
    });

    // Real-time Validation on Blur
    document.getElementById("registerName").addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && !/^[a-zA-Z\s]{2,50}$/.test(value)) {
            alert("Please enter a valid name (only alphabets and spaces, 2 to 50 characters).");
            setTimeout(() => this.focus(), 0); // Safer approach
        }
    });


    








    document.getElementById("registerEmail").addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
            alert("Please enter a valid email address.");
            setTimeout(() => this.focus(), 0); // Safer approach
        }
    });

    document.getElementById("registerPhone").addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && !/^\d{10}$/.test(value)) {
            alert("Please enter a valid phone number (exactly 10 digits).");
            setTimeout(() => this.focus(), 0); // Safer approach
        }
    });

    document.getElementById("registerPassword").addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
            alert("Password must be at least 8 characters long, contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.");
            setTimeout(() => this.focus(), 0); // Safer approach
        }
    });

    document.getElementById("confirmPassword").addEventListener("blur", function () {
        const regPassword = document.getElementById("registerPassword").value.trim();
        const confirmPassword = this.value.trim();
        if (confirmPassword && confirmPassword !== regPassword) {
            alert("Passwords do not match. Please type the correct password.");
            setTimeout(() => this.focus(), 0); // Safer approach
        }
    });

});


