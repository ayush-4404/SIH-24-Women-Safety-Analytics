document.addEventListener("DOMContentLoaded", function() {
    const statements = [
        "Women's safety is our priority.",
        "Stronger Together, Safer Together",
        "Empowering Safety, One Step at a Time",
        "Safe Spaces, Confident Women",
        "Safety Starts with Awareness",
        "Empower. Protect. Inspire.",
        "Together We Create Safe Spaces"
    ];

    function getRandomStatement() {
        return statements[Math.floor(Math.random() * statements.length)];
    }

    const statementElement = document.getElementById('statement');
    const randomStatement = getRandomStatement();

    let index = 0;
    const typingSpeed = 100; // Time delay between each character (in ms)
    const typingTime = typingSpeed * randomStatement.length; // Calculate total typing time

    // Update the typing animation duration dynamically
    statementElement.style.animationDuration = `${typingTime / 1000}s`;

    function typeWriter() {
        if (index < randomStatement.length) {
            statementElement.textContent += randomStatement.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});
