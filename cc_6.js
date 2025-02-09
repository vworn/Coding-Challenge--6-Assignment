// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; // Calculate total profit
    console.log(`Total Profit: $${profit}`); // Print the profit
}
// Test cases
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate; // Compute sales tax
    console.log(`Sales Tax: $${salesTax}`); // Print the sales tax amount
};
// Test cases
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = {
        "Excellent": 0.2, // 20% bonus for excellent rating
        "Good": 0.1, // 10% bonus for good rating
        "Average": 0.05 // 5% bonus for average rating
    };
    let bonus = salary * (bonusPercentage[performanceRating] || 0); // Calculate bonus based on rating
    console.log(`Bonus: $${bonus}`); // Print the bonus amount
};
// Test cases
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

// Task 4: Parameters and Arguments - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricing = {
        "Basic": 10, // Basic plan costs $10 per month
        "Premium": 20, // Premium plan costs $20 per month
        "Enterprise": 50 // Enterprise plan costs $50 per month
    };
    let totalCost = (pricing[plan] * months) - discount; // Compute total subscription cost with discount
    console.log(`Total Cost: $${totalCost}`); // Print the total cost
}
// Test cases
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"