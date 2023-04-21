// Selectam elementele html 
const body= document.body;
const darkModeToggler= document.getElementById("darkmode");
const cardsContainer = document.getElementsByClassName("cards-list")[0];
const searchForm=document.getElementById("searchForm");
let searchinput;

// Verificam daca exista search form in pagina
if(searchForm) {
    // Selectam search input din form
    searchinput=searchForm.querySelector("input");
    searchinput.addEventListener("input", searchProjects);
}

let projects=[];


darkModeToggler.addEventListener("click", function() {
    body.classList.toggle("dark-mode");}
);

// Verificam culoarea profilului 
if (window.matchMedia('(prefers-color-scheme: dark)').matches && window.matchMedia) {
    body.classList.toggle ("dark-mode")
}

// Generam elementele HTML pentur un card 
function generateCard(proiect) {
    const li = document.createElement("li")
    const div = document.createElement("div")
    div.classList.add("card");

    const cardImg = document.createElement("img")
    cardImg.src = proiect.img;
    cardImg.alt = proiect.nume;


    div.append(cardImg);

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content");

    const title= document.createElement("h3");
    title.textContent = proiect.nume;
    cardContent.append(title)

    const descriere = document.createElement("p")
    descriere.textContent= proiect.descriere
    cardContent.append(descriere);

    const cardBtn= document.createElement("button");
    cardBtn.textContent = "Mai multe";


    cardBtn.onclick=function() {
        location.href = proiect.link;
    }

    cardContent.append(cardBtn);
    div.append(cardContent);

    li.append(div);

    cardsContainer.append(li)
}

// Functie care returneaza cardul cautat
function searchProjects(event) {
    event.preventDefault();

    // Salvam valoarea din searchInput
    const searchValue=searchinput.value;

    // Filtram lista de proiecte dupa nume 
    const found= projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));

    console.log(found)

    if(!found || !searchValue){
        console.log("No match or no value")
        cardsContainer.innerHTML="";
        projects.forEach(function(proiect) {
            generateCard(proiect);
        })
    
    }else{
        cardsContainer.innerHTML="";
        generateCard(found);
    }
}