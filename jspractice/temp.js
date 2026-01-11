// Function to generate unique random PO ID with 3 chars and 2 nums (e.g., ABC12)
function generatePOID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let poID = "";

  for (let i = 0; i < 3; i++) {
    poID += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  for (let i = 0; i < 2; i++) {
    poID += Math.floor(Math.random() * 10);
  }
  return poID;
}

function PO(trainer_name,skill,months,monthly_payment,payment_type,poDate) {
  const poID = generatePOID();
  let result;

  if (payment_type === "monthly") {
    result = months * monthly_payment;
  } else if (payment_type === "daily") {
    result = months * 30 * (monthly_payment / 30);
  } else if (payment_type === "hourly") {
    result = months * 30 * 8 * (monthly_payment / (30 * 8));
  }

  return {
    poID: poID,
    trainer_name: trainer_name,
    skill: skill,
    months: months,
    monthly_payment: monthly_payment,
    payment_type: payment_type,
    poDate: poDate,
    totalAmount: result,
  };
}


function invoice(poID, purchaseOrder) {

  const poDate = new Date(purchaseOrder.poDate);
  const currentDate = new Date();
  const diffTime = currentDate - poDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 30) {
    const tdsRate = 0.1; 
    const grossAmount = purchaseOrder.totalAmount;
    const tdsAmount = grossAmount * tdsRate;
    const netAmount = grossAmount - tdsAmount;

    return {
      canRaiseInvoice: true,
      message: "Invoice can be raised",
      daysElapsed: diffDays,
      grossAmount: grossAmount,
      tdsAmount: tdsAmount,
      netAmount: netAmount,
    };
  } else {
    const daysRemaining = 30 - diffDays;
    return {
      canRaiseInvoice: false,
      message: `Wait ${daysRemaining} more days`,
      daysElapsed: diffDays,
      daysRemaining: daysRemaining,
    };
  }
}

const sharathPO = PO(
  "Sharath Kumar",
  "Java Full Stack Developer",
  6,
  100000,
  "monthly",
  "2025-12-01"
);
console.log(sharathPO)
const invoiceCheck = invoice(sharathPO.poID, sharathPO);
console.log(invoiceCheck)