const houses = [
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    }
];

showAllData(houses);

document.querySelector(".menu__watchall").onclick = function(e){
    clearData(document.querySelector(".popularproj"));
    showAllData(houses);
};

let cats = document.querySelectorAll(".menu__item-default");
for (let i = 0; i < cats.length; i++){
    cats[i].addEventListener("click", () => catsClick(cats[i]));
}

function showAllData(housesData){
    let temp = null;
    for (let i = 0; i < housesData.length; i++){
        temp = createCard(housesData[i]);
        document.querySelector(".popularproj").appendChild(temp);
    }
}

function createCard(cardData){
    let card = document.createElement("div");
    card.className = "card";

    let cardHeader = document.createElement("h3");
    cardHeader.classList.add("card__header");
    cardHeader.classList.add("font__preset");
    cardHeader.innerText = cardData.header;

    let cardImg = document.createElement("img");
    cardImg.className = "card__image";
    cardImg.src = './img/' + cardData.houseImg;

    let cardSquare = document.createElement("p");
    cardSquare.classList.add("card-data__item");
    cardSquare.classList.add("font__preset");
    cardSquare.innerHTML = 'Площадь: <b>'+ cardData.square + '</b>';

    let cardSize = document.createElement("p");
    cardSize.classList.add("card-data__item");
    cardSize.classList.add("font__preset");
    cardSize.innerHTML = 'Размеры: <b>'+ cardData.size +'</b>';

    let cardConstrPeriod = document.createElement("p");
    cardConstrPeriod.classList.add("card-data__item");
    cardConstrPeriod.classList.add("font__preset");
    cardConstrPeriod.innerHTML = 'Срок стройки: <b>'+ cardData.constrPeriod +'</b>';

    let cardNumRooms = document.createElement("p");
    cardNumRooms.classList.add("font__preset");
    cardNumRooms.classList.add("card-data__item");
    cardNumRooms.innerHTML = 'Комнат: <b>'+ cardData.numRooms +'</b>';

    let cardTypeNPrice = document.createElement("ul");
    cardTypeNPrice.className = "card__list-data";
    let cardLIHType = document.createElement("li");
    cardLIHType.classList.add("card-data__li");
    cardLIHType.classList.add("font__preset");
    cardLIHType.innerHTML = 'Тип дома: <b>' + cardData.houseType + '</b>'
    cardTypeNPrice.appendChild(cardLIHType);
    let cardPrice = document.createElement("li");
    cardPrice.classList.add("card-data__li");
    cardPrice.classList.add("font__preset");
    cardPrice.innerHTML = 'Стоимость: <b>от <span class="card-data__li-big">' + cardData.price + '</span> руб</b>';
    cardTypeNPrice.appendChild(cardPrice);

    let cardButton = document.createElement("div");
    cardButton.classList.add("card__button");
    cardButton.classList.add("font__preset");
    cardButton.innerText = " ПРОЕКТЫ >";

    let cardPersPlan = document.createElement("div");
    cardPersPlan.className = "card__persplan";
    let cardPPImg = document.createElement("img");
    cardPPImg.className = "card__persplan-img";
    cardPPImg.src = "./img/c1.png";
    cardPersPlan.appendChild(cardPPImg);
    let cardPPText = document.createElement("p");
    cardPPText.classList.add("card__persplan-item");
    cardPPText.classList.add("font__preset");
    cardPPText.innerText = "Индивидуальная планировка дома";
    cardPersPlan.appendChild(cardPPText);

    card.appendChild(cardImg);
    card.appendChild(cardHeader);
    card.appendChild(cardSquare);
    card.appendChild(cardSize);
    card.appendChild(cardConstrPeriod);
    card.appendChild(cardNumRooms);
    card.appendChild(cardTypeNPrice);
    card.appendChild(cardButton);
    card.appendChild(cardPersPlan);

    return card;
}

function clearData(container){
    container.innerHTML = "";
}

function findHouseDataByType(houseType){
    clearData(document.querySelector(".popularproj"));
    let fHouses = houses.filter(function(item){
        return item.houseType == houseType;
    });
    let temp = null;
    for (let i = 0; i < fHouses.length; i++){
        temp = createCard(fHouses[i]);
        document.querySelector(".popularproj").appendChild(temp);
    }
}

function catsClick(sender){
    console.log(sender.innerText);
    findHouseDataByType(sender.innerText);
}