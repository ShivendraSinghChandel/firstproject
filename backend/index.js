const express = require("express");
const fs = require("fs");
const cors = require("cors");
const XLSX = require("xlsx");

const app = express();
app.use(express.json()); // Parse JSON payloads
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/api/send-to-excel", (req, res) => {
  const { name, email, contact, date, message } = req.body; // Include 'date' in destructuring

  // Define the file path for the Excel file
  const filePath = "C:/Users/Siddhant/OneDrive/Desktop/ContactData.xlsx";


  try {
    // Load or create an Excel workbook
    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
    } else {
      workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet([]);
      XLSX.utils.book_append_sheet(workbook, sheet, "Contacts");
    }

    // Convert data to a new row format and add it to the sheet
    const sheet = workbook.Sheets["Contacts"];
    const newRow = { Name: name, Email: email, Contact: contact, Date: date, Message: message }; // Include 'Date'
    const data = XLSX.utils.sheet_to_json(sheet);
    data.push(newRow);
    const updatedSheet = XLSX.utils.json_to_sheet(data);

    // Write the updated sheet back to the workbook and save the file
    workbook.Sheets["Contacts"] = updatedSheet;
    XLSX.writeFile(workbook, filePath);

    // Respond with success message
    res.json({ success: true, message: "Data written to Excel successfully." });
  } catch (error) {
    console.error("Error writing to Excel file:", error);
    res.status(500).json({ success: false, message: "Failed to write data to Excel." });
  }
});

// Set the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
