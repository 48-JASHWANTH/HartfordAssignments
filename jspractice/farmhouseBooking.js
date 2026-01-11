"use strict";
// Farmhouse Booking System

// Customer Information using const and let
const customerName = "John Smith";
const bookingDate = "2026-01-15";
const farmhouseName = "Sunset Valley Farmhouse";

let numberOfCustomers = 4;
const basePricePerDay = 20000;
const taxRate = 0.18; // 18% tax
const extraPersonIncrementRate = 0.1; // 10% increment

// Calculate initial total amount
function calculateTotalAmount(customers, basePrice, tax) {
  const subtotal = basePrice;
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount;
  return {
    subtotal: subtotal,
    taxAmount: taxAmount,
    total: total,
  };
}

// Calculate total for initial 4 customers
console.log("========== FARMHOUSE BOOKING DETAILS ==========");
console.log(`Customer Name: ${customerName}`);
console.log(`Farmhouse: ${farmhouseName}`);
console.log(`Booking Date: ${bookingDate}`);
console.log(`Number of Customers: ${numberOfCustomers}`);
console.log("===============================================\n");

const initialBooking = calculateTotalAmount(
  numberOfCustomers,
  basePricePerDay,
  taxRate
);

console.log("Initial Booking (4 customers):");
console.log(`Base Price: ₹${initialBooking.subtotal.toLocaleString()}`);
console.log(`Tax (18%): ₹${initialBooking.taxAmount.toLocaleString()}`);
console.log(`Total Amount: ₹${initialBooking.total.toLocaleString()}`);
console.log("-----------------------------------------------\n");

// Adding one extra person
numberOfCustomers = numberOfCustomers + 1; // Now 5 customers

// Calculate with extra person increment
const extraPersonIncrement = initialBooking.total * extraPersonIncrementRate;
const newTotal = initialBooking.total + extraPersonIncrement;

console.log(`Adding 1 Extra Person (Total: ${numberOfCustomers} customers):`);
console.log(`Previous Total: ₹${initialBooking.total.toLocaleString()}`);
console.log(
  `Extra Person Increment (10%): ₹${extraPersonIncrement.toLocaleString()}`
);
console.log(`New Total Amount: ₹${newTotal.toLocaleString()}`);
console.log("===============================================");

// function sum() {
//   result = 2 + 2;
//   return result;
// }

// console.log(sum());

const arr = [1, 2, 3, 4, 5];
// arr = [3, 4, 5, 6, 7];
arr[3] = 10;
arr.push(6);
console.log(arr);

//create an employee data,name, email, phpne number and keep emp id as symbol and print the employee data
const empId = Symbol("empId");
const employee = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: "123-456-7890",
  [empId]: "EMP12345",
};
const employee2 = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  phoneNumber: "123-456-7890",
  [empId]: "EMP12345",
};

console.log("Employee Data:");
console.log(employee);
console.log(employee2);
console.log(`Name: ${employee.name}`);
console.log(`Email: ${employee.email}`);
console.log(`Phone Number: ${employee.phoneNumber}`);
console.log(`Employee ID (Symbol): ${employee[empId]}`);

//Bus booking system
const busBooking = {
  baseKm: 100,
  baseHours: 24,
  basePrice: 5000,
  extraKmRate24hrs: 5,
  extraKmRateMoreThan24hrs: 3,
};

const bookingData = [
  { km: 20, price: 5000 },
  { km: 30, price: 7000 },
  { km: 40, price: 9000 },
  { km: 50, price: 12000 },
];

console.log("\nBooking Examples:");
bookingData.forEach((booking, index) => {
  console.log(
    `Booking ${index + 1}: ${booking.km} km, ${booking.hours} hrs → ₹${
      booking.price
    }`
  );
});

console.log(busBooking);
console.log(bookingData);

function sayHello() {
  console.log("Hello, welcome to the Farmhouse Booking System!");
}

sayHello();

var sayHello = function () {
  console.log("ji");
};

//Procssing of the payments for the freelancer(daily, monthly, hourly) the payment should happen after 30 days after raising the invoice. (Create a purchase order first, and create an invoice and calculate total amount, sharath kumar, java fsd, monthly paying per month 100000, 6 months and 10% tdx deduction)

