const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "img/2018-New-Arrival-Already-Tied-Auto-Gele-African-Ladies-AsoOke-For-Bridal-And-Party-Free-Shipping.jpg_640x640.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est rem ex sequi quo maxime ab eaque, itaque ipsa placeat veritatis distinctio nihil voluptas cum facilis at vero consectetur odit?"
    },
    {
        id: 2,
        name: "sara britte",
        job: "web designer",
        img: "img/5175-a-beautiful-teen-african-american-girl-sitting-on-bleachers-pv.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est rem ex sequi quo maxime ab eaque, itaque ipsa placeat veritatis distinctio nihil voluptas cum facilis at vero consectetur odit?"
    },
    {
        id: 3,
        name: "kate smith",
        job: "model",
        img: "img/bebe-cool.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est rem ex sequi quo maxime ab eaque, itaque ipsa placeat veritatis distinctio nihil voluptas cum facilis at vero consectetur odit?"
    },
    {
        id: 4,
        name: "shatta wale",
        job: "musician",
        img: "img/shatta_wale.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est rem ex sequi quo maxime ab eaque, itaque ipsa placeat veritatis distinctio nihil voluptas cum facilis at vero consectetur odit?"
    },
    {
        id: 5,
        name: "somalia",
        job: "model",
        img: "img/somalia.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est rem ex sequi quo maxime ab eaque, itaque ipsa placeat veritatis distinctio nihil voluptas cum facilis at vero consectetur odit?"
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
})

//show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
   
}

// show next person
nextBtn.addEventListener("click", function() {
    currentItem ++;
    if(currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
preBtn.addEventListener("click", function() {
    currentItem --;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function() {
   currentItem = Math.floor(Math.random() * reviews.length);
   showPerson();
}); 