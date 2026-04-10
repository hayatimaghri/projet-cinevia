const movies=[
    {
         title: "Taken",
        image: "image/taken.jpg",
        category: "Action",
        description: "Un père part sauver sa fille kidnappée par un réseau criminel."
    },
    {
         title: "Extraction",
        image: "image/action 2.jpg",
        category: "Action",
        description: "Un mercenaire protège un enfant au cœur d'une mission dangereuse"
    },
    {
      title: "Titanic",
        image: "image/action 4.jpg",
        category: "Drama",
        description:"Une histoire d'amour tragique à bord d'un navire mythique."   
    },
    {
    title: "Culpa Tuya",
        image: "image/drama 1.jpg",
        category: "Drama",
        description:"Une relation compliquée pleine de secrets et d'émotions."
    },
    {
      title: "My perfect future",
        image: "image/drama 2.jpg",
        category: "Drama",
        description:"Un jeune cherche à construire un avenir parfait malgré les obstacles."  
    },
    {
      title: "Trahisons",
        image: "image/drama 3.jpg",
        category: "Comedy",
        description:"Des trahisons bouleversent une amitié et changent tout."  
    },
    {
        title: "Marsupilami",
        image: "image/comédie 1.jpg",
        category: "Comedy",
        description:"Une aventure drôle avec un animal sauvage très malin."
    },
    {
        title: "Zombie hospital",
        image: "image/comédie 2.jpg",
        category: "Comedy",
        description:"Un hôpital envahi par des zombies crée le chaos."
    },
    {
       title: "Daughter",
        image: "image/comédie 3.jpg",
        category: "Comedy",
        description:"Une jeune fille cache un lourd secret familial." 
    },
    {
       title: "Balleilna",
        image: "image/action 5.jpg",
        category: "Action",
        description: "Une nuit pleine d'action et de dangers inattendus."
    },
    {
        title: "Warin life",
        image: "image/drama 4.jpg",
        category: "Comedy",
        description:"Une histoire de survie dans un monde difficile."
    },
    {
     title: "Madame boubifire",
        image: "image/comédie 4.jpg",
        category: "Comedy",
        description:"Une comédie légère avec des situations amusantes."   
    }
]
function createCard(movie) {
    let card = document.createElement("div");
    card.classList.add("film-card");

    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p class="category">${movie.category}</p>
        <button class="detail-btn">Voir détails</button>`;
  let btn = card.querySelector(".detail-btn");
btn.addEventListener("click",()=>{
    openModal(movie);
});
 
   
    return card;
}

   let  container=document.getElementById("films-container");
   movies.forEach(movie => {
    let card = createCard(movie);
    container.appendChild(card)
   })
   function filterMovies(category){
    let container= document.getElementById("films-container")
    container.innerHTML=""
    let filterfilm;
    if(category==="Tous"){
        filterfilm=movies
    } else{
        filterfilm= movies.filter(movie=> movie.category===category);
    }
        filterfilm.forEach(movie=>{
            let card= createCard(movie);
            container.appendChild(card)
        });
    }
   
   document.addEventListener("DOMContentLoaded", function(){
    filterMovies("Tous");
   
   });
   function openModal(movie){
    document.getElementById("modal").style.display = "flex";

    document.getElementById("modal-img").src = movie.image;
    document.getElementById("modal-title").innerText = movie.title;
    document.getElementById("modal-category").innerText = movie.category;
    document.getElementById("modal-description").innerText = movie.description;

    document.getElementById("add-fav").onclick = () => {
        alert(movie.title + " ajouté aux favoris ❤️");
    };
}
document.getElementById("close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

window.onclick = (e) => {
    let modal = document.getElementById("modal");
    if(e.target === modal){
        modal.style.display = "none";
    }
};
let favorites = [];

function addToFavorites(movie){
    favorites.push(movie);
    alert(movie.title + " ajouté aux favoris ❤️");
    console.log(favorites);
}