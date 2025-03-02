// Function to change the language of the page
function changeLanguage() {
    const language = document.getElementById('languageSelect').value;

    if (language === 'hi') {
        // Hindi Translation
        document.getElementById('featuredTitle').textContent = 'हमारी प्रमुख संग्रह';
        document.getElementById('product1Title').textContent = 'क्लासिक सफेद शर्ट';
        document.getElementById('product2Title').textContent = 'नीली जीन्स';
        document.getElementById('product3Title').textContent = 'सर्दी का जैकेट';
        document.getElementById('product1Price').textContent = '₹199';
        document.getElementById('product2Price').textContent = '₹299';
        document.getElementById('product3Price').textContent = '₹399';
        document.getElementById('homeLink').textContent = 'घर';
        document.getElementById('shopLink').textContent = 'खरीदें';
        document.getElementById('aboutLink').textContent = 'हमारे बारे में';
        document.getElementById('contactLink').textContent = 'संपर्क करें';
        document.getElementById('cartLink').textContent = 'कार्ट (0)';
    } else {
        // English (default)
        document.getElementById('featuredTitle').textContent = 'Our Featured Collection';
        document.getElementById('product1Title').textContent = 'Classic White Shirt';
        document.getElementById('product2Title').textContent = 'Blue Jeans';
        document.getElementById('product3Title').textContent = 'Winter Jacket';
        document.getElementById('product1Price').textContent = '₹1999';
        document.getElementById('product2Price').textContent = '₹2999';
        document.getElementById('product3Price').textContent = '₹3999';
        document.getElementById('homeLink').textContent = 'Home';
        document.getElementById('shopLink').textContent = 'Shop';
        document.getElementById('aboutLink').textContent = 'About';
        document.getElementById('contactLink').textContent = 'Contact';
        document.getElementById('cartLink').textContent = 'Cart (0)';
    }
}

// Search Functionality (for now it only alerts the search term)
function searchProduct() {
    const searchQuery = document.getElementById('searchBar').value;
    alert(`You searched for: ${searchQuery}`);
}

// Buy Now functionality (simulates purchase)
function buyNow(productName, productPrice) {
    alert(`You have successfully purchased the ${productName} for ₹${productPrice}.`);
}
