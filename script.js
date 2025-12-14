document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("gameSearch");
  const cards = document.querySelectorAll(".game-card");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();

      if (title.includes(query)) {
        card.style.display = "";      // 🔥 CSS default use
      } else {
        card.style.display = "none";
      }
    });
  });
});



const navLinks = document.querySelectorAll(".nav-right a");
const currentPage = window.location.pathname.split("/").pop();

// default home
const page = currentPage === "" ? "index.html" : currentPage;

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === page) {
    link.classList.add("active");
  }
});



<script>
const games = {
  gta5:{
    title:"Grand Theft Auto V",
    price:"₹40",
    image:"images/gta5.jpg",
    type:"Steam PC • Offline Activation",
    specs:["Platform: PC","Mode: Story","Storage: 95GB"]
  },
  rdr2:{
    title:"Red Dead Redemption 2",
    price:"₹40",
    image:"images/rdr2.jpg",
    type:"Steam PC • Offline Activation",
    specs:["Platform: PC","Mode: Story","Storage: 120GB"]
  }
  // add other games here
};

const params = new URLSearchParams(window.location.search);
const key = params.get("game");
const g = games[key];

if(!g){
  // ❌ GAME NOT FOUND
  document.querySelector(".container").style.display="none";
  document.getElementById("notFound").style.display="block";
}else{
  // ✅ GAME FOUND
  document.getElementById("gameTitle").innerText = g.title;
  document.getElementById("gamePrice").innerText = g.price;
  document.getElementById("gameImage").src = g.image;
  document.getElementById("gameType").innerText = g.type;

  document.getElementById("orderBtn").href =
   `https://wa.me/91XXXXXXXXXX?text=Game:%20${g.title}%0APrice:%20${g.price}`;

  const ul = document.getElementById("gameSpecs");
  ul.innerHTML="";
  g.specs.forEach(s=>{
    const li=document.createElement("li");
    li.innerText=s;
    ul.appendChild(li);
  });
}
</script>
