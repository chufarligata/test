document.addEventListener('DOMContentLoaded', function() {
    // Define product info
    var productName = "Pura Drop Gummies USA/UK";
    var productImage = "https://i.imgur.com/Fe3L9Uy.png";
    var geoOptions = [
        {text: "Select Country...", value: ""},
        {text: "United Kingdom", value: "offer/index.php"},
        {text: "United States of America", value: "offer/index.php"},
        // {text: "CountryName", value: "AffiliateURL"},
    ];

    // Set product info
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-image').src = productImage;

    // Set Geo Selector options
    var geoSelector = document.getElementById('geo-selector');
    geoOptions.forEach(function(option) {
        var opt = document.createElement('option');
        opt.value = option.value;
        opt.innerHTML = option.text;
        opt.disabled = option.text === "Select Country..." ? true : false;
        opt.selected = option.text === "Select Country..." ? true : false;
        geoSelector.appendChild(opt);
    });

    // Listen for changes on the geo-selector element
    geoSelector.addEventListener('change', function() {
        // Navigate to the selected URL
        var url = this.value;
        if (url !== '') {
            window.location.href = url;
        }
    });

    // Get flags for each country
    const flagsContainer = document.getElementById('flags-container');

    // Ignore the first option "Select Country..." when fetching the flags
    geoOptions.slice(1).forEach(option => {
        fetch(`https://restcountries.com/v3.1/name/${option.text}?fullText=true`)
            .then(response => response.json())
            .then(data => {
                const flagUrl = data[0].flags.svg;
                const img = document.createElement('img');
                img.src = flagUrl;
                img.style.height = '16px';
                img.classList.add('mx-2');
                flagsContainer.appendChild(img);
            })
            .catch(error => console.error('Error:', error));
    });
});
