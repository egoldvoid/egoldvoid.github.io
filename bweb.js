function showSubActivities() {
    const activities = {
        explore: [
            { name: "Boat Tour", url: "https://www.getyourguide.com/amsterdam-l36/cruises-boat-tours-tc48/" },
            { name: "Canal Bike", url: "https://www.stromma.com/en-nl/amsterdam/sightseeing/canal-tours/pedal-boat/" },
            { name: "Evening Canal Cruise", url: "https://flagshipamsterdam.com/cruise/amsterdam-evening-cruise/" }
        ],
        museums: [
            { name: "Rijksmuseum", url: "https://www.rijksmuseum.nl/en" },
            { name: "Van Gogh Museum", url: "https://www.vangoghmuseum.nl/en" },
            { name: "Anne Frank's House :(", url: "https://www.google.com/aclk?sa=l&ai=DChcSEwjq5fjum_6EAxWGbkcBHWZ2BW8YABACGgJxdQ&ase=2&gclid=CjwKCAjwzN-vBhAkEiwAYiO7oIoFo7bsZw-AK5kfJ7xd57ACKaakpepca8DEuHAwPCLytg8B5FNwHxoCUXkQAvD_BwE&sig=AOD64_09ACV_xi_idNOrlmgd9Mbg7Rhffg&q&nis=4&adurl&ved=2ahUKEwik2e_um_6EAxUwFlkFHd1mABMQ0Qx6BAgGEAE" }
        ],
        culture: [
            { name: "Walk through the Jordaan", url: "https://www.tripadvisor.com/Attraction_Review-g188590-d190575-Reviews-The_Jordaan-Amsterdam_North_Holland_Province.html" },
            { name: "Visit the Flower Market", url: "https://www.amsterdam.info/shopping/flowermarket/" },
            { name: "Explore the Pijp", url: "https://www.iamsterdam.com/en/explore/neighbourhoods/de-pijp" }
        ],
        outdoors: [
            { name: "Vondelpark", url: "https://www.amsterdam.info/parks/vondelpark/" },
            { name: "Bike around the city", url: "https://www.google.com/search?q=pictures+of+bicycles&oq=pictures+of+bicycles&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDMyNDhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" },
            { name: "Visit Amsterdamse Bos", url: "https://www.amsterdamsebos.nl/english/" }
        ],
        eat: [
            { name: "note: none of this looks especially good, but it's local and authentic at least??"},
            { name: "Stroopwafel", url: "https://vanwonderen.co/" },
            { name: "Bitterballen", url: "https://www.bitterballenamsterdam.com/" },
            { name: "Dutch pancakes", url: "https://www.dutchpancakemasters.com/" },
            { name: "Raw herring", url: "https://m.facebook.com/pages/Stubbes-Haring/480492398652703" },
            { name: "Cheese", url: "http://www.amsterdamcheesecompany.com/" },
            { name: "Poffertjes", url: "http://www.poffertjesalbertcuyp.nl/" },
            { name: "Snert", url: "http://www.zwaantje-restaurant.nl/" },
            { name: "Tompounce", url: "https://www.patisserieholtkamp.nl/" }
        ],
        nightlife: [
            { name: "Check out a club in Leidseplein", url: "https://10best.usatoday.com/destinations/netherlands/amsterdam/nightlife/leidsepleins-best-dance-clubs/" },
            { name: "Visit a brown cafe", url: "https://thingstodoinamsterdam.com/blog/best-brown-cafe-in-amsterdam/" },
            { name: "Jazz club", url: "https://www.iamsterdam.com/en/whats-on/concerts-and-gigs/jazz-venues" }
        ],
        surprise: [
            { name: "recent flicks from my life", url: "https://www.instagram.com/eligold.kindafit" }
        ]
    };

    const selectedActivity = document.getElementById("activity-select").value;
    const subActivities = activities[selectedActivity] || [];
    const displayArea = document.getElementById("sub-activities");

    displayArea.innerHTML = '';

    const list = document.createElement('ul');
    for (const activity of subActivities) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = activity.url; 
        link.textContent = activity.name; 
        link.target = "_blank"; 
        item.appendChild(link);
        list.appendChild(item);
    }
    displayArea.appendChild(list);
}
