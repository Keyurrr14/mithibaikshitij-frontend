function getAllData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var firebaseUrl = "https://mithibai-kshitij-default-rtdb.firebaseio.com/";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);

  var registerData = base.getData().contact;

  if (typeof registerData === 'object' && registerData !== null) {
    var rows = [];
    var emailContent = "";

    // Get processed keys from the Properties Service
    var scriptProperties = PropertiesService.getScriptProperties();
    var processedKeys = JSON.parse(scriptProperties.getProperty('processedKeys') || '[]');

    // Loop through each entry in the "contact" object
    Object.keys(registerData).forEach(function(key) {
      var data = registerData[key];

      // Add all data to the sheet
      if (typeof data === 'object' && data !== null) {
        if ('timestamp' in data && 'fullName' in data && 'message' in data &&
            'email' in data && 'phoneNumber' in data) {
          rows.push([data.timestamp, data.fullName, data.phoneNumber, data.email, data.message]);

          // Only include unprocessed keys in the email
          if (!processedKeys.includes(key)) {
            emailContent += `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phoneNumber}\nMessage: ${data.message}\nTimestamp: ${data.timestamp}\n\n`;
            processedKeys.push(key); // Mark as processed
          }
        }
      }
    });

    // Write all data to the sheet
    if (rows.length > 0) {
      var startRow = 3; // Starting row in the sheet
      var existingRows = sheet.getLastRow() - startRow + 1;
      if (existingRows > 0) {
        sheet.getRange(startRow, 2, existingRows, 5).clear(); // Clear old data
      }
      var dataRange = sheet.getRange(startRow, 2, rows.length, rows[0].length);
      dataRange.setValues(rows);
    }

    // Update processed keys in the Properties Service
    scriptProperties.setProperty('processedKeys', JSON.stringify(processedKeys));

    // Send an email with only the new data
    if (emailContent) {
      var recipient = "dhruv.agarwal@mithibaikshitij.com, public.relations@mithibaikshitij.com, marketing@mithibaikshitij.com"; 
      var subject = "New Contact Form Submissions";
      var body = `The following new entries were added:\n\n${emailContent}`;
      
      try {
        GmailApp.sendEmail(recipient, subject, body);
        Logger.log('Email sent successfully');
      } catch (error) {
        Logger.log('Error sending email: ' + error.message);
      }
    } else {
      Logger.log('No new records to email.');
    }

  } else {
    Logger.log('Data is not in the expected format');
  }
}

// scriptID = 1hguuh4Zx72XVC1Zldm_vTtcUUKUA6iBUOoGnJUWLfqDWx5WlOJHqYkrt