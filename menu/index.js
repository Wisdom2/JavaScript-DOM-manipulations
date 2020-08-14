const menu = [
    {
        id: 1,
        title: "Croissant",
        category: "breakfast",
        price: 15.99,
        img: "./img/51b25d63-783d-4014-bd0e-bd51fd36d5c8croissant.jpg",
        desc: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem quis doloribus, aperiam iusto, optio, placeat amet laudantium explicabo maiores nam. Facere, blanditiis fugit aperiam nulla temporibus quas. Itaque, sequi?`
    },
    {
        id: 2,
        title: "smoothy",
        category: "shakes",
        price: 10.99,
        img: "./img/19-195444_beautiful-hd-food-wallpaper-food-hd-images-download.jpg",
        desc: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem quis doloribus, aperiam iusto, optio, placeat amet laudantium explicabo maiores nam. Facere, blanditiis fugit aperiam nulla temporibus quas. Itaque, sequi?`
    },
    {
        id: 3,
        title: "fried plantain",
        category: "lunch",
        price: 12.99,
        img: "./img/df50005a-068d-4f8d-aa7d-d02710695ed6palntain.jpg",
        desc: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem quis doloribus, aperiam iusto, optio, placeat amet laudantium explicabo maiores nam. Facere, blanditiis fugit aperiam nulla temporibus quas. Itaque, sequi?`
    },
    {
        id: 4,
        title: "grilled salmon",
        category: "lunch",
        price: 12.99,
        img: "./img/9d4849f6-f3f2-4472-8909-40b233027c6asalmon.jpg",
        desc: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem quis doloribus, aperiam iusto, optio, placeat amet laudantium explicabo maiores nam. Facere, blanditiis fugit aperiam nulla temporibus quas. Itaque, sequi?`
    },
    {
        id: 5,
        title: "steak",
        category: "lunch",
        price: 12.99,
        img: "./img/5c683576-09ef-477a-8f64-c076b31710b2Shredded-beef-sauce.jpg",
        desc: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam rem quis doloribus, aperiam iusto, optio, placeat amet laudantium explicabo maiores nam. Facere, blanditiis fugit aperiam nulla temporibus quas. Itaque, sequi?`
    }
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuBtns();
}); 


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return ` <article class="menu-item">
            <img src="${item.img}" class="photo" alt="">
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function displayMenuBtns() {
    const categories = menu.reduce(function(values, item){
        if(! values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const categoryBtns = categories.map(function(category) {
        return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    
    // filter btns
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            } 
        });

        if(category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
        });
    });
}