function getElementById (weatherAndTime) {
    fetchElementById(weatherAndTime);
    fetchApi(weatherAndTime);
}
function fetchElementById(weatherAndTime) {
    console.log(`Fetching element with ID: ${weatherAndTime}`);
    return document.getElementById(weatherAndTime);
}
function fetchApi(weatherAndTime) {
    console.log(`Fetching data from API for: ${weatherAndTime}`);
    return `Data for ${weatherAndTime}`;
}        

    const resultDiv = document.getElementById('result');
    if (weatherAndTime) {
        resultDiv.textContent = `${weatherAndTime} is even.`;
    } else {
        resultDiv.textContent = `${weatherAndTime} is odd.`;
    }
            

// Widget UI
const widget = document.createElement('div');
widget.className = 'widget';
widget.innerHTML = `
    <div class="weather-widget">
        <i class="fas fa-sun"></i>
        <p>Sunny, 25°C</p>
    </div>
    <div class="clock-widget">
        <i class="fas fa-clock"></i>
        <p>12:00 PM</p>
        <div class="date">April 27, 2024</div>
    </div>
`;
