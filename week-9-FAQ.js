window.onload = (event) => {
    const toggle = function (question, answer) {
        let shouldIShowIt = answer.style.display === "none" || answer.style.display === "";
        let icon = question.querySelector(".icon");
        
        if (shouldIShowIt) {
            answer.style.display = "block";
            if (icon) icon.src = "assets/images/icon-minus.svg";
        } else {
            answer.style.display = "none";
            if (icon) icon.src = "assets/images/icon-plus.svg";
        }
    };
    
    const question1 = document.getElementById("questionButton1");
    let answer1 = document.getElementById("answer1");
    question1.addEventListener("click", () => toggle(question1, answer1));

    const question2 = document.getElementById("questionButton2");
    let answer2 = document.getElementById("answer2");
    question2.addEventListener("click", () => toggle(question2, answer2));

    const question3 = document.getElementById("questionButton3");
    let answer3 = document.getElementById("answer3");
    question3.addEventListener("click", () => toggle(question3, answer3));

    const question4 = document.getElementById("questionButton4");
    let answer4 = document.getElementById("answer4");
    question4.addEventListener("click", () => toggle(question4, answer4));
};