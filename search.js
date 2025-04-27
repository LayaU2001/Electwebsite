document.addEventListener("DOMContentLoaded", function () {
    const keyWords = [
        "HTML", "CSS", "JavaScript", "React.js", "Angular", "Vue.js",
        "Bootstrap", "Tailwind CSS", "Responsive Design",
        "DOM (Document Object Model)", "UI/UX Design", "Node.js", "Express.js", "Django", "Flask", "Ruby on Rails",
        "PHP", "Laravel", "REST API", "GraphQL", "Authentication", "Middleware", "SQL", "NoSQL", "MongoDB",
        "PostgreSQL", "MySQL", "Firebase", "Database Optimization", "Git", "Webpack", "NPM (Node Package Manager)",
        "Yarn", "Docker", "Jenkins", "Babel", "CI/CD (Continuous Integration/Deployment)",
        "Full-stack Development", "Server-Side Rendering (SSR)", "Client-Side Rendering (CSR)",
        "Progressive Web Apps (PWA)", "Single Page Application (SPA)", "Cross-Browser Compatibility",
        "Debugging", "Version Control", "API Integration", "Web Performance Optimization"
    ];

    let resultBox = document.querySelector(".result-box");
    let inputBox = document.getElementById("input-box");

    inputBox.addEventListener("keyup", function () {
        let input = inputBox.value.trim();
        let result = [];

        if (input.length) {
            result = keyWords.filter((keyword) => keyword.toLowerCase().includes(input.toLowerCase()));
        }

        display(result);
    });

    function display(result) {
        resultBox.innerHTML = ""; // Clear previous results

        if (result.length) {
            const ul = document.createElement("ul");

            result.forEach(list => {
                const li = document.createElement("li");
                li.textContent = list;
                li.addEventListener("click", () => selectInput(li));
                ul.appendChild(li);
            });

            resultBox.appendChild(ul);
        } else {
            resultBox.innerHTML = "<p style='padding:10px; color:#555;'>No results found</p>";
        }
    }

    function selectInput(list) {
        inputBox.value = list.textContent;
        resultBox.innerHTML = "";
    }
});
