const group = document.getElementById("puntos");
const circles = document.querySelectorAll("ellipse");

//console.log(circles.length)

let i = 1;

// Iterate through each circle's ID and set its fill color
Object.keys(fechas).forEach((circleId) => {
  //console.log(fechas[circleId].id);
  
  const cname = "ellipse" + i;
  const circle = document.getElementById(cname);
  //console.log(cname);
  if (circle) {
    circle.style.fill = fechas[circleId].fechaColor;
  }
  i++;
});

// Get references to the card and the container
const card1 = document.getElementById("card");
const cardContent1 = document.getElementById("card-content");
const container1 = document.getElementById("puntos");
const closeBtn1 = card1.querySelector("#close-button");
let mapa = document.getElementById('mapaCompleto')

var cardEventListener = (event) => {
  
  if (event.target.tagName === "ellipse") {
  // Get the ID of the clicked SVG object
    let svgObjectId = event.target.id;
    //console.log(artes[0].puntoId)
    // Check if there is data in the JSON for the clicked SVG object
     svgObjectId  = parseInt(svgObjectId.split("ellipse", 3)[1]-1);
    
    
    
    
   
    if (fechas[svgObjectId]) {
      
      const title = `${fechas[svgObjectId].fechaTitulo}`
      //console.log(title.includes('sin Fecha'))
      if (title.includes('sin Fecha')) {
        displayCards(artes[svgObjectId].puntoId)
    return;
  } else {
    
      displayCards(artes[svgObjectId].puntoId)
    
       
      // Populate the card content based on the JSON data
      cardContent1.innerHTML = `
                <h3 class="p-2"><strong>${fechas[svgObjectId].fechaTitulo}</strong></h3>
                <p class="text-xs lg:text-sm">${fechas[svgObjectId].fechaDescription}</p>
            `;
      let posX = event.clientX-80;
      let posY = event.clientY-40;
     if (isNaN(posX) && isNaN(posY)) {
      posX = event.changedTouches[0].clientX-100;
      posY = event.changedTouches[0].clientY-50;}
    
      // Position the card at the click location
    //que el width sea mayor a 0 y que no salga de mapa-256
    
    if (mapa.clientWidth > 1000) {
    if (posX+256 > mapa.clientWidth ) {
      posX = posX-178;
    }
    if (posX < 0) {
      posX = posX+100
    } } 
    //console.log(window.innerWidth,mapa.clientWidth-256,posX)
    //console.log(window.innerHeight,mapa.clientHeight-192,posY)
   

      card1.style.left = posX + "px";
      card1.style.top = posY + "px";
    
      
    
   // console.log(event.changedTouches[0].clientX,event.changedTouches[0].clientY)
      // Make the card visible
      closeBtn1.style.background = `${fechas[svgObjectId].fechaColor}`;
      
      card1.style.display = "block";
    }
       
  }}}

// Add a click event listener to the container
container1.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log(event.target.puntoId);

    cardEventListener(event);
});

container1.addEventListener("touchend", (event) => {
  event.preventDefault();
  //console.log(event.target.puntoId);
  
    cardEventListener(event);
});

closeBtn1.addEventListener("click", () => {
  card1.style.display = "none";
});



const cardContainer = document.getElementById("card-container");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const toggleModalButton = document.getElementById("toggleModalButton");
const closeModalButton = document.getElementById("closeModalButton");

let activeCard = null;
let currentZIndex = 1;

function createDraggableCard(data, id) {
  if (data.artCard == 0) return
  
  const card = document.createElement("div");
  card.className =
    "card artCard w-5/6 h-5/6 bg-white border p-4 rounded-md shadow-md absolute ";
  const text1 = `
<button class="close-button absolute top-2 right-2 cursor-pointer bg-black">
      
    </button>
    <div id="cardData" class="card-content w-full h-full overflow-auto items-center">
      <p class="text-sm"></p>`
      
  let content = data.content
  //console.log(content)
  let hiddenImage, hiddenMedia = "inline"
  let text2 =""
  let text3 = "";
  content.forEach(entry => { 
    
    
    if (!entry.imagenes) {
      hiddenImage = "hidden"
    } else {
      hiddenImage = "inline"
    }
    
    if (!entry.media) {
      hiddenMedia = "hidden"
    } else {
      hiddenMedia = "inline"
    }
    //console.log(entry.titulo,!entry.imagenes,!entry.media )   
    
    let text = `<div class="grid align-self-center" >
    <a href="https://ucarecdn.com/${entry.imagenes}/-/quality/smart/-/format/auto/" data-fancybox="" data-caption="<strong>${entry.titulo}</strong>- <i>${entry.author}</i>">
    <img src="https://ucarecdn.com/${entry.imagenes}/-/preview/600x600/-/quality/smart/-/format/auto/" loading="lazy" class=" ${hiddenImage} rounded-lg mt-2 mb-2" onerror="this.style.display='none'"></a>
    
    <iframe id="${entry.author}" allowfullscreen src="${entry.media}" height="400px" class="${hiddenMedia} w-11/12 m-auto  rounded-lg mt-2 mb-2" onerror="this.style.display='none'"></iframe>
    
    <p class="text-sm p-2"><strong>${entry.titulo}</strong></p>
    <p class="text-sm"><i>${entry.author}</i></p>
    <p class="text-xs mt-2 mb-2">${entry.ficha}</p>
    <p class="text-xs mt-2 mb-2">${entry.description}</p>
    </div>`
    text2 += text
    
  })
  
 /* content.forEach(entry => {  
    
    let text = `
    
    `
    text3 += text
  })*/

  //<p class="text-xs mt-2 mb-2">${entry.description}</p>
      
   card.innerHTML = text1+text2+text3;
   ;
  card.style.display = "none";
  card.setAttribute("data-id", id); // Set a data attribute for the card's id
  card.style.zIndex = currentZIndex++;

  var mWidth = mapa.clientWidth - 200;
  var mHeight = mapa.clientHeight - 200;
  let posiX, posiY;
     //posiX = Math.random() * (mWidth)
    //posiY = Math.random() * (mHeight)
  posiX =  50
  posiY = 50


  
  card.style.left = `${posiX}px`;
  card.style.top = `${posiY}px`;
  
  //console.log(card.clientWidth,posiX)
  //console.log(card.clientHeight,posiY)

  let isDragging = false;
  let touchOffsetX, touchOffsetY;

  /*
  card.addEventListener("mousedown", (e) => {
    isDragging = true;
    e.preventDefault();
    touchOffsetX = e.clientX - card.getBoundingClientRect().left;
    touchOffsetY = e.clientY - card.getBoundingClientRect().top;
    card.style.zIndex = currentZIndex++;
    activeCard = card;
  });
  */

  /*card.addEventListener("touchstart", (e) => {
    isDragging = true;
    e.preventDefault();
    const touch = e.changedTouches[0];
    touchOffsetX = touch.clientX - card.getBoundingClientRect().left;
    touchOffsetY = touch.clientY - card.getBoundingClientRect().top;
    card.style.zIndex = currentZIndex++;
    activeCard = card;
  });*/

  /*document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault();
      card.style.left = `${e.clientX - touchOffsetX}px`;
      card.style.top = `${e.clientY - touchOffsetY}px`;
    }
  });*/

 /* document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      e.preventDefault();
      const touch = e.changedTouches[0];
      card.style.left = `${touch.clientX - touchOffsetX}px`;
      card.style.top = `${touch.clientY - touchOffsetY}px`;
    }
  });*/

 /* document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
    }
  });
*/
  /*document.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
    }
  });*/

  const closeBtn = card.querySelector(".close-button");
  closeBtn.addEventListener("click", () => {
    card.style.display = "none";
  });

  card.addEventListener("click", () => {
    if (activeCard) {
      activeCard.style.zIndex--;
    }

    card.style.zIndex = currentZIndex++;
    activeCard = card;
  });

  cardContainer.appendChild(card);
}

artes.forEach((data) => {
  createDraggableCard(data, data.puntoId); // Pass the ID to the createDraggableCard function
});

const displayCards = (id) => {
  if (!isNaN(id)) {
    //console.log(id)
    const cards = document.querySelectorAll(".artCard");

    cards.forEach((card) => {
      const cardId = parseInt(card.getAttribute("data-id"))

      if (parseInt(cardId) == id) {
        //console.log(parseInt(cardId), id)
        card.style.display = "block";
      } else {
        //console.log(typeof cardId,typeof id)
        card.style.display = "none";
      }
    });
  }
};


function isMobileDevice() {
  // Check for touch screen
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return true;
  }

  // Check for user agent string containing mobile keywords
  const userAgent = navigator.userAgent.toLowerCase();
  return /(iphone|ipod|ipad|android|blackberry|windows phone)/i.test(userAgent);
}

function showModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Para navegar: </h2>
      <p>Ampliar el mapa con el botón + </p>
      <p>hasta que los puntos se puedan </p>
      <p>presionar con el dedo.</p><br>
      <button onclick="closeModal()">Listo</button>
    </div>`;

  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.addEventListener('click', closeModal);

  document.body.appendChild(overlay);
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay');

  document.body.removeChild(modal);
  document.body.removeChild(overlay);
}

if (isMobileDevice()) {
  
  showModal();

  window.addEventListener('orientationchange', function() {
    if ( screen.orientation.angle === 90 || screen.orientation.angle === 270) {
      closeModal();
    }
  });
}


$("#La Cholla").contents().find("#nestedIframe").contents()





