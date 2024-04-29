const home = document.querySelectorAll("#home");
const about = document.querySelectorAll("#about");
const contact = document.querySelectorAll("#contact");
const education = document.querySelectorAll("#education");

const btnBox = document.getElementById("btn-box");
const logo = document.getElementById("logo");
const offScreenMenu = document.getElementById("off-screen-menu");
const menuToggle = document.getElementById("menu-toggle");
const homeContent = document.getElementById("home-content");
const hireMe = document.getElementById("hire-me");
const letsTalk = document.getElementById("lets-talk");

const containers = [{
        header: "Hi, I'm Joshua Saayo",
        details: "Front-end Developer",
        paragraph: "Welcome to my portfolio I'm Joshua Saayo, a hardworking, Team Leader, Responsible and serious in taking tasks. Check out my projects to learn more about my capabilities as a web developer.",
        buttonDisplay: "flex"
    },
    {
        header: "About Me",
        details: "My Technical Skills",
        paragraph: "• Fundamental knowledge in Computer Hardware Diagnostics and Troubleshooting. <br>• Software Developing using Python. <br>Web designing using CSS, JavaScript, Bootstrap jQuery. <br>• Web development using HTML and PHP with basic knowledge on Laravel.",
        buttonDisplay: "none"
        
    },
    {
        header: "Contacts",
        details: "Let's work together!",
        paragraph: "Mobile Number: +639595224816 <br> Email: saayojoshua@gmail.com",
        buttonDisplay: "none"
    },
    {
        header: "Education",
        details: "My education attainment",
        paragraph: "Graduated in 4 years with a degree of Bachelor of Science in Computer Science 2021-2022",
        buttonDisplay: "none"
    }
];


console.log(containers[1])
const createContainerHTML = (container) => {
    return `
            <h1>${container.header}</h1>
            <h3>${container.details}</h3>
            <p>${container.paragraph}</p>
            <div class="btn-box" id="btn-box" style="display: ${container.buttonDisplay};">
                <a href="mailto:saayojoshua@gmail.com" id="hire-me">Hire me</a>
                <a href="#" id="lets-talk">Let's talk</a>
            </div>
        </div>
    `;
}

const updateContainer = (index) => {
    const container = containers[index];
    const containerHTML = createContainerHTML(container);
    homeContent.innerHTML = containerHTML;
}

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Options for the observer (which mutations to observe)
const config = { 
    attributes: true, 
    childList: true, 
    subtree: true 
};

// Callback function to execute when mutations are observed
const clearScreen = () => {
    // Handle the mutations
    offScreenMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    console.log('DOM has been updated');
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(clearScreen);

// Start observing the target node for configured mutations
observer.observe(homeContent, config);



home.forEach((e) => {
    e.addEventListener("click", () => {
        updateContainer(0)
    })
});

about.forEach((e) => {
    e.addEventListener("click", () => {
        updateContainer(0)
    })
});

contact.forEach((e) => {
    e.addEventListener("click", () => {
        updateContainer(0)
    })
});

education.forEach((e) => {
    e.addEventListener("click", () => {
        updateContainer(0)
    })
});


