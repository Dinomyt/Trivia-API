let apiUrl = 'https://icanhazdadjoke.com/';
// let dadJoke = document.getElementById('dadJoke');
let dadJokeImg = document.getElementById('dadJokeImg');

// ------------------------------------------------------------------------------------Start of------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------API Functions---------------------------------------------------------------------------------------- //

async function randomDadJoke() {
    console.log("Ran the function randomDadJoke()");
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json' // Ensure correct response format
            }
        });

        if (!response.ok) { // Check for HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON data
        console.log(data);
        // dadJoke.innerText = data.joke;
        let imgID = data.id;
        let imgSrc = `https://icanhazdadjoke.com/j/${imgID}.png`;
        dadJokeImg.src = imgSrc;

    } catch (error) {
        console.error('Error fetching API data:', error);
        dadJoke.innerText = 'Error fetching joke. Try again later.'; // Display error message to the user
    }
}

// -------------------------------------------------------------------------------------End of-------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------API Functions---------------------------------------------------------------------------------------- //




// ------------------------------------------------------------------------------------Start of-------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------Event Listeners---------------------------------------------------------------------------------------- //

document.getElementById("generateDadJokeBtn").addEventListener("click", function() {
    randomDadJoke();
});

// -------------------------------------------------------------------------------------End of--------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------Event Listeners---------------------------------------------------------------------------------------- //
