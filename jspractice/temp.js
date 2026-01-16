// // Function to generate unique random PO ID with 3 chars and 2 nums (e.g., ABC12)
// function generatePOID() {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let poID = "";

//   for (let i = 0; i < 3; i++) {
//     poID += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   for (let i = 0; i < 2; i++) {
//     poID += Math.floor(Math.random() * 10);
//   }
//   return poID;
// }

// function PO(trainer_name,skill,months,monthly_payment,payment_type,poDate) {
//   const poID = generatePOID();
//   let result;

//   if (payment_type === "monthly") {
//     result = months * monthly_payment;
//   } else if (payment_type === "daily") {
//     result = months * 30 * (monthly_payment / 30);
//   } else if (payment_type === "hourly") {
//     result = months * 30 * 8 * (monthly_payment / (30 * 8));
//   }

//   return {
//     poID: poID,
//     trainer_name: trainer_name,
//     skill: skill,
//     months: months,
//     monthly_payment: monthly_payment,
//     payment_type: payment_type,
//     poDate: poDate,
//     totalAmount: result,
//   };
// }

// function invoice(poID, purchaseOrder) {

//   const poDate = new Date(purchaseOrder.poDate);
//   const currentDate = new Date();
//   const diffTime = currentDate - poDate;
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//   if (diffDays >= 30) {
//     const tdsRate = 0.1;
//     const grossAmount = purchaseOrder.totalAmount;
//     const tdsAmount = grossAmount * tdsRate;
//     const netAmount = grossAmount - tdsAmount;

//     return {
//       canRaiseInvoice: true,
//       message: "Invoice can be raised",
//       daysElapsed: diffDays,
//       grossAmount: grossAmount,
//       tdsAmount: tdsAmount,
//       netAmount: netAmount,
//     };
//   } else {
//     const daysRemaining = 30 - diffDays;
//     return {
//       canRaiseInvoice: false,
//       message: `Wait ${daysRemaining} more days`,
//       daysElapsed: diffDays,
//       daysRemaining: daysRemaining,
//     };
//   }
// }

// const sharathPO = PO(
//   "Sharath Kumar",
//   "Java Full Stack Developer",
//   6,
//   100000,
//   "monthly",
//   "2025-12-01"
// );
// console.log(sharathPO)
// const invoiceCheck = invoice(sharathPO.poID, sharathPO);
// console.log(invoiceCheck)

//find the total cost for flat per sqft 2500 rs, car parking - 1lakh, after 5th floor high raise charges per sqft - 10 rs more calculate flat for 2bhk and 3bhk

// (function () {
//   const baseRatePerSqft = 2500;
//   const carParkingCost = 100000;
//   const highRiseChargePerSqft = 10;

//   // 2BHK flat details
//   const bhk2 = {
//     type: "2BHK",
//     sqft: 1000,
//     floor: 6,
//   };

//   // 3BHK flat details
//   const bhk3 = {
//     type: "3BHK",
//     sqft: 1500,
//     floor: 7,
//   };

//   function calculateCost(flatDetails) {
//     let ratePerSqft = baseRatePerSqft;

//     // Add high rise charge if floor is above 5
//     if (flatDetails.floor > 5) {
//       ratePerSqft += highRiseChargePerSqft;
//     }

//     const flatCost = flatDetails.sqft * ratePerSqft;
//     const totalCost = flatCost + carParkingCost;

//     return {
//       type: flatDetails.type,
//       sqft: flatDetails.sqft,
//       floor: flatDetails.floor,
//       ratePerSqft: ratePerSqft,
//       flatCost: flatCost,
//       carParkingCost: carParkingCost,
//       totalCost: totalCost,
//     };
//   }
//   const cost2BHK = calculateCost(bhk2);
//   const cost3BHK = calculateCost(bhk3);
//   console.log(cost2BHK);
//   console.log(cost3BHK);
// })();

//write a function "download files" that takes call backs and prints download completed after 2 secs then call the call back to print file opened.

// function downloadFiles(callback) {
//   setTimeout(() => {
//     console.log("Download completed");
//     callback();
//   }, 2000);
// }

// downloadFiles(() => {
//   console.log("File opened");
// });

//write a function check that takes exam score and a call back function to get assignment score, then print pass if total score is more than 40 else print fail.
function check(examScore, getAssignmentScore) {
  const assignmentScore = getAssignmentScore();
  const totalScore = examScore + assignmentScore;

  if (totalScore >= 40) {
    console.log(`Pass - Total Score: ${totalScore}/100`);
  } else {
    console.log(`Fail - Total Score: ${totalScore}/100`);
  }
}

check(40, () => {
  return 30;
});

const arr = [1, 2, 3, 4, 5];

const evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr);

const sqArr = evenArr.map((num) => num * num);
console.log(sqArr);

const sum = sqArr.reduce((a, b) => a + b, 0);
console.log(sum);

/*You are given N numbers in the form of an array. You have to select K numbers from these numbers.

You can only select numbers from the ends (either front or last).

The selected number gets erased from the array.

You want to maximize the sum of the selected K numbers.Array: [5, 6, 4, 8, 7, 7, 6, 5, 4]
K = 4 explin the mathamatically */

//id, title, price, stock, brand in the format .table
// Fetch products from dummyjson.com with async/await and error handling
async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const products = data.products;

    // Display in table format
    console.table(
      products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
      }))
    );
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
}

// Call the function
fetchProducts();

// Shopping Cart Application
async function shoppingCart() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const products = data.products;

    // Cart array to store items
    const cart = [];

    // Function to add item to cart
    function addToCart(productId, quantity) {
      const product = products.find((p) => p.id === productId);

      if (!product) {
        console.log("Product not found!");
        return;
      }

      if (quantity > product.stock) {
        console.log(`Not enough stock! Available: ${product.stock}`);
        return;
      }

      const cartItem = {
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        brand: product.brand,
        quantity: quantity,
        total: product.price * quantity,
      };

      // Reduce stock when adding to cart
      product.stock -= quantity;

      cart.push(cartItem);
      console.log(`Added ${quantity} x ${product.title} to cart`);
      console.log(`Remaining stock for ${product.title}: ${product.stock}`);
    }

    // Function to display cart
    function viewCart() {
      if (cart.length === 0) {
        console.log("Cart is empty!");
        return;
      }

      console.log("\n--- Shopping Cart ---");
      console.table(cart);

      const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);
      console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
    }

    // Function to view products with updated stock
    function viewProducts() {
      console.log("\n--- Available Products ---");
      console.table(
        products.map((product) => ({
          id: product.id,
          title: product.title,
          category: product.category,
          price: product.price,
          stock: product.stock,
          brand: product.brand,
        }))
      );
    }

    // Example usage
    viewProducts(); // Show initial products

    addToCart(1, 2); // Add product with id 1, quantity 2
    addToCart(5, 1); // Add product with id 5, quantity 1
    addToCart(10, 3); // Add product with id 10, quantity 3

    viewCart();
    viewProducts(); // Show updated products with reduced stock
  } catch (error) {
    console.error("Error in shopping cart:", error.message);
  }
}

// Call the shopping cart function
shoppingCart();
