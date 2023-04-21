// Selectam elemente HTML
const game= document.getElementById("container")
const selectedCards= document.getElementsByClassName("active");
const found_cards= document.getElementsByClassName("found");

const emoji= [
     "😳","😁","😨","😎","🥱", "💀",
     "😳","😁","😨","😎","🥱", "💀",
];

function newGame() {
    game.innerHTML = "";
     shuffle();
    createCards();
}

function createCards() {
    for (let i =0; i<emoji.length; i++) {
        const card= document.createElement("div") ;
        const text= document.createElement("p");

        card.classList.add("card")
        text.textContent = emoji[i];

        card.append(text);
        card.setAttribute("onclick", "match(this)")

        game.append(card);
    }
}

// Functia care ne amesteca valorile
function shuffle() {
    let listLength= emoji.length;
    let randomIndex;
    let temp;

    for (let i=0; i<listLength; i++ )   {
        randomIndex = Math.floor (Math.random() * listLength)
        temp = emoji[i];
        emoji[i]= emoji[randomIndex];
        emoji[randomIndex]= temp

}

}
//Functie care verifica o pereche de carduri 
function match(card) {
    // Daca elementul prezentat este deja gasit, dsu dsca am selectat 2 sau mai mulye caeduri, nu se intampla nimic
    if(card.classList.contains ("found")  || selectedCards.length >=2) {
        return;
    }

    //Altfel adaugam clasa 'active'
    card.classList.add("active");

    // Daca sunt selectate 2 card-uri, le comparam 
    if(selectedCards.length ==2) {
        //Intarziem verificarea cu 1/2s
        setTimeout(function () {
            // Daca card-urile au acelasi emoji 
            if (selectedCards[0].textContent == selectedCards[1].textContent) {

            
                // Adaugam clasa found
                selectedCards[0].classList.add("found")
                selectedCards[1].classList.add("found")
            }

            //Indiferent de situatie scoate calsa 'active'
            selectedCards[1].classList.remove("active");
            selectedCards[0].classList.remove("active");

            //verificam cate card-uri cu clasa 'found' am gasit
            if (found_cards.length == emoji.length) {
                newGame()
            }
        },500 );

    }
}

newGame();