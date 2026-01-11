function genid() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 3; i++) {
        code += letters[Math.floor(Math.random() * letters.length)];
    }
    code += Math.floor(100 + Math.random() * 900);
    return code;
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function mail(msg) {
    console.log("📧 EMAIL SENT TO ACCOUNTS:");
    console.log(msg);
}

function createPO(trainer, training, payment) {
    let res = 0;

    if (payment.type === "Hourly") {
        res = payment.rate * payment.duration;
    } else if (payment.type === "Daily") {
        res = payment.rate * payment.duration;
    } else if (payment.type === "Monthly") {
        res = payment.rate * payment.duration;
    }

    return {
        poNumber: genid(),
        trainer,
        training,
        payment,
        res
    };
}


function inv(po) {
    let today = new Date();
    let trainingEnd = new Date(po.training.endDate);

    if (today < trainingEnd) {
        console.log("Invoice cannot be generated before training ends.");
        return null;
    }

    return {
        invoiceNumber: genid(),
        poNumber: po.poNumber,
        trainerName: po.trainer.name,
        courseName: po.training.courseName,
        totalAmount: po.totalAmount,
        invoiceDate: today,
        dueDate: addDays(today, 30),
        status: "UNPAID"
    };
}


function overdue(invoice) {
    let today = new Date();

    if (invoice.status === "UNPAID" && today > invoice.dueDate) {
        invoice.status = "OVERDUE";
        mail(
            `Invoice ${invoice.invoiceNumber} is OVERDUE.
Amount: ₹${invoice.totalAmount}`
        );
    }
}


let trainer = {
    name: "Raj Kumar",
    email: "raj@trainer.com",
    experience: "8 years"
};

let training = {
    courseName: "Full Stack JavaScript",
    clientName: "ABC Corp",
    startDate: "2025-01-01",
    endDate: "2025-01-05"
};

let payment = {
    type: "Daily",      
    rate: 5000,
    duration: 5         
};


let po = createPO(trainer, training, payment);
console.log("PURCHASE ORDER CREATED");
console.log(po);

let invoice = inv(po);
if (invoice) {
    console.log("INVOICE GENERATED");
    console.log(invoice);

    invoice.dueDate = addDays(new Date(), -1);

    overdue(invoice);
    console.log("📄 FINAL INVOICE STATUS:", invoice.status);
}
