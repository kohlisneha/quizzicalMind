// server.js

const express = require('express');
const app = express();
const port = 3000;

// Generate a random coupon code
function generateCoupon() {
  // Logic to generate a coupon code goes here
  return 'COUPON123'; // For demonstration purposes, generating a static code
}

// Endpoint to generate a coupon code
app.get('/generate-coupon', (req, res) => {
  const couponCode = generateCoupon();
  res.send(couponCode);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
