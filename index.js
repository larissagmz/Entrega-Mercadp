const products = [
    {
        title: "Maça",
        price: 8.99,
        category: "frutas",
        image: "./img/maca.jpg",
        imageDescription: "",
    },
    {
        title: "Morango",
        price: 11.99,
        category: "frutas",
        image: "./img/morango.jpg",
        imageDescription: "",
    },
    {
        title: "Mamao",
        price: 12.99,
        category: "frutas",
        image: "./img/mamao.jpg",
        imageDescription: "",
    },
    {
        title: "Acai",
        price: 8.99,
        category: "frutas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Coca",
        price: 10.99,
        category: "bebida",
        image: "./img/coca.jpg",
        imageDescription: "",
    },
    {
        title: "Agua",
        price: 10.99,
        category: "bebida",
        image: "./img/agua.jpg",
        imageDescription: "",
    },
    {
        title: "Whisky",
        price: 20.99,
        category: "bebida",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Suco",
        price: 15.99,
        category: "bebida",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Escova",
        price: 25.99,
        category: "higiene",
        image: "./img/escova.jpg",
        imageDescription: "",
    },
    {
        title: "Sabonete",
        price: 2.99,
        category: "higiene",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Desodorante",
        price: 12.99,
        category: "higiene",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Fio dental",
        price: 10.99,
        category: "higiene",
        image: undefined,
        imageDescription: "",
    },
];
const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});
let drinks = document.querySelector(".drinks-list");
let hygiene = document.querySelector(".hygiene-list");
let fruits = document.querySelector(".fruit-list");
function product(list) {
    for (let i = 0; i < list.length; i++) {
        let img = document.createElement("img");
        if (typeof list[i].image === "undefined") {
            img.src = "./img/no_image.jpg";
        } else {
            img.src = `${list[i].image}`;
        }
        list[i].price = formatador.format(list[i].price);
        let li = document.createElement("li");
        li.className = "product";
        let figure = document.createElement("figure");
        figure.className = "img";
        let div = document.createElement("div");
        div.className = "product-main";
        let h1 = document.createElement("h1");
        h1.innerText = list[i].title;
        h1.className = "product-title";
        let h5 = document.createElement("h5");
        h5.innerText = list[i].category;
        h5.className = "category-product";
        let strong = document.createElement("strong");
        strong.innerText = `${list[i].price}`;
        strong.className = "product-price";
        li.append(figure, div);
        figure.appendChild(img);
        div.append(h1, h5, strong);
        if (list[i].category === "higiene") {
            hygiene.appendChild(li);
        } else if (list[i].category === "frutas") {
            fruits.appendChild(li);
        } else {
            drinks.appendChild(li);
        }
    }
}

product(products);
