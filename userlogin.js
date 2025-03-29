document.addEventListener("DOMContentLoaded", function () {

    // ===================== REGISTER FUNCTION =====================
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let regName = document.getElementById("registerName").value.trim();
        let regPhone = document.getElementById("registerPhone").value.trim();
        let regEmail = document.getElementById("registerEmail").value.trim();
        let regPassword = document.getElementById("registerPassword").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Check if any field is empty
        if (regName === "" || regPhone === "" || regEmail === "" || regPassword === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Check if passwords match
        if (regPassword !== confirmPassword) {
            alert("Passwords do not match. Please type the correct password.");
            return;
        }

        // Check if user already exists
        if (localStorage.getItem(regEmail)) {
            alert("Email already registered! Try logging in.");
            return;
        }

        // Store user data in localStorage
        localStorage.setItem(regEmail, JSON.stringify({ 
            name: regName, 
            phone: regPhone,
            password: regPassword 
        }));

        alert("Account created successfully! You can now log in.");
    });

    // ===================== LOGIN FUNCTION =====================
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        let storedUser = localStorage.getItem(email);

        if (!storedUser) {
            alert("User not found! Please register first.");
            return;
        }

        let userData = JSON.parse(storedUser);

        if (password === userData.password) {
            alert(`Welcome, ${userData.name}! Login successful.`);
            
            // Store user name in localStorage
            localStorage.setItem("userName", userData.name);
            
            // Redirect to welcome page instead of index.html
            window.location.href = "welcome.html"; 
        } else {
            alert("Invalid email or password!");
        }
    });

    // ===================== PASSWORD SHOW/HIDE =====================
    function togglePassword(inputId, iconId) {
        let input = document.getElementById(inputId);
        let icon = document.getElementById(iconId);

        icon.addEventListener("click", () => {
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("ri-eye-off-fill");
                icon.classList.add("ri-eye-fill");
            } else {
                input.type = "password";
                icon.classList.remove("ri-eye-fill");
                icon.classList.add("ri-eye-off-fill");
            }
        });
    }

    // Enable Show/Hide Password Feature
    togglePassword("registerPassword", "toggleRegisterPassword");
    togglePassword("confirmPassword", "toggleConfirmPassword");
    togglePassword("loginPassword", "toggleLoginPassword");

    // ===================== SWITCH BETWEEN LOGIN & REGISTER =====================
    document.getElementById("loginButtonRegister").addEventListener("click", () => {
        document.getElementById("loginAccessRegister").classList.add("active");
    });

    document.getElementById("loginButtonAccess").addEventListener("click", () => {
        document.getElementById("loginAccessRegister").classList.remove("active");
    });

});
