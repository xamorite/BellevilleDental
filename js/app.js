
const d = new Date();
document.getElementById("demo").innerHTML = d;

 
     
    function updateTicker() {
        var ticker = document.getElementById("loca");
        var currentDate = new Date().toLocaleDateString();
        var currentTime = new Date().toLocaleTimeString();
        var location = "Unknown";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                // Use a geocoding API to get the location from latitude and longitude
                var apiUrl = "https://api.openweathermap.org/geo/1.0/reverse?lat=" + latitude + "&lon=" + longitude + "&limit=1&appid=2d7ecdab97a83914ffacff69de3bc3d1";
                fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    location = data[0].name + ", " + data[0].country;

                    ticker.innerText = location;
                    ticker.style.width = ticker.clientWidth + "px";

                    if (ticker.scrollWidth > ticker.clientWidth) {
                        ticker.animate([
                                { transform: "translateX(0)" },
                                { transform: "translateX(-" + (ticker.scrollWidth - ticker.clientWidth) + "px)" }
                            ], {
                                duration: (ticker.scrollWidth - ticker.clientWidth) * 20,
                                iterations: Infinity
                            });
                    }
                })
                .catch(error => {
                    console.log(error);
                    ticker.innerText = location;
                    ticker.style.width = ticker.clientWidth + "px";
                });
            }, function(error) {
                console.log(error);
                ticker.innerText =  location;
                ticker.style.width = ticker.clientWidth + "px";
            });
        } else {
            ticker.innerText =   location;
            ticker.style.width = ticker.clientWidth + "px";
        }
    }

    updateTicker();
    setInterval(updateTicker, 60000); // Update every minute

// product
const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}



    // rating
  // Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    for (let i = 0; i < star.parentElement.children.length; i++) {
      const st = star.parentElement.children.item(i);
      if(st.classList.contains("fa-star")) {
        st.classList.remove("active")
        // Add the "active" class to the clicked star and any stars with a lower index
        // and remove the "active" class from any stars with a higher index
        // st.classList.add("active")
       
      }
       let current  = star
        while(current != null) {
          current.classList.add("active")
          current = current.previousElementSibling
        }
      }
  });
});

// Update the count displayed on the webpage

let i = 0

let interval = setInterval(() => {
  if(i <= 200) {
    document.getElementById('visitor-count').innerText = i
    i++
  }else {
    clearInterval(interval)
       }
                                 }
);