var typed = new Typed(".typing",{
    strings:["","Computer Science Engineer","Software Engineer","Web Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


function calculateAge() {
    const dob = new Date('2001-12-22');  
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("age").innerText = `${age} years old`;
}


window.onload = calculateAge;



function mouseovertext(){

// Number Game Web Application
document.querySelector('#original-content-1').addEventListener('mouseover', function() {
    document.querySelector('#text-1').textContent = "This is a Number Game Web Application. Featuring to challenge users in quickly locating a target number within a grid, enhancing focus and speed."
});

document.querySelector('#original-content-1').addEventListener('mouseout', function() {
    document.querySelector('#text-1').textContent = "";  
});


// Tic Tac Toe Game Web Application
document.querySelector('#original-content-2').addEventListener('mouseover', function() {
    document.querySelector('#text-2').textContent = "This is a Tic Tac Toe Game Web Application. Featuring a simple interface and real-time game logic to track wins, losses, and draws for two players."
});

document.querySelector('#original-content-2').addEventListener('mouseout', function() {
    document.querySelector('#text-2').textContent = "";  
});

// About Jharkhand Web Application
document.querySelector('#original-content-3').addEventListener('mouseover', function() {
    document.querySelector('#text-3').textContent = "This is an About Jharkhand Web Application. Featuring to provide users with comprehensive information about the State’s culture, Districts of Jharkhand, History, Tourism, etc......"
});

document.querySelector('#original-content-3').addEventListener('mouseout', function() {
    document.querySelector('#text-3').textContent = "";  
});

// Stopwatch Web Application
document.querySelector('#original-content-4').addEventListener('mouseover', function() {
    document.querySelector('#text-4').textContent = "This is a Stopwatch Web Application. Featuring track elapsed time with precision."
});

document.querySelector('#original-content-4').addEventListener('mouseout', function() {
    document.querySelector('#text-4').textContent = "";  
});

// Age-Calculator Web Application
document.querySelector('#original-content-5').addEventListener('mouseover', function() {
    document.querySelector('#text-5').textContent = "This is an Age-Calculator Web Application. Featuring quickly and accurately determine a user's age from their date of birth."
});

document.querySelector('#original-content-5').addEventListener('mouseout', function() {
    document.querySelector('#text-5').textContent = "";  
});

// Weather web Application
document.querySelector('#original-content-6').addEventListener('mouseover', function() {
    document.querySelector('#text-6').textContent = "This is a Weather web Application. Featuring accurate and real-time weather information."
});

document.querySelector('#original-content-6').addEventListener('mouseout', function() {
    document.querySelector('#text-6').textContent = "";  
});

// Calculator web Application
document.querySelector('#original-content-7').addEventListener('mouseover', function() {
    document.querySelector('#text-7').textContent = "This is a Calculator web Application. Featuring basic arithmetic operations."
});

document.querySelector('#original-content-7').addEventListener('mouseout', function() {
    document.querySelector('#text-7').textContent = "";  
});

// My Portfolio Web Application
document.querySelector('#original-content-8').addEventListener('mouseover', function() {
    document.querySelector('#text-8').textContent = "This is a My Portfolio Web Application. Featuring to showcase Projects, Skills, Qualification and Achievements with a visually appealing and interactive design."
});

document.querySelector('#original-content-8').addEventListener('mouseout', function() {
    document.querySelector('#text-8').textContent = "";  
});




}

mouseovertext()





