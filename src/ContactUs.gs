function getAllData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var firebaseUrl = "https://kshitijtesting-a6294-default-rtdb.asia-southeast1.firebasedatabase.app";

  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);

  // Access the "contact" key first
  var registerData = base.getData().contact;

  if (typeof registerData === 'object' && registerData !== null) {
    var rows = [];

    // Loop through each entry in the "register" object
    Object.keys(registerData).forEach(function(key) {
      var data = registerData[key];

      // Check if data is an object before processing
      if (typeof data === 'object' && data !== null) {
        // Check the existence of required properties before accessing them
        if ('timestamp' in data && 'fullName' in data && 'message' in data &&
            'email' in data && 'phoneNumber' in data) {
          rows.push([data.timestamp, data.fullName, data.phoneNumber, data.email, data.message]);
        }
      }
    });

    if (rows.length > 0) {
      // Update the range based on the number of columns in each row
      var dataRange = sheet.getRange(3, 2, rows.length, rows[0].length);
      dataRange.setValues(rows);
    } else {
      Logger.log('No data to update in the sheet.');
    }

  } else {
    Logger.log('Data is not in the expected format');
  }
}

scriptId = function getAllData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var firebaseUrl = "https://kshitijtesting-a6294-default-rtdb.asia-southeast1.firebasedatabase.app";

  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);

  // Access the "contact" key first
  var registerData = base.getData().contact;

  if (typeof registerData === 'object' && registerData !== null) {
    var rows = [];

    // Loop through each entry in the "register" object
    Object.keys(registerData).forEach(function(key) {
      var data = registerData[key];

      // Check if data is an object before processing
      if (typeof data === 'object' && data !== null) {
        // Check the existence of required properties before accessing them
        if ('timestamp' in data && 'fullName' in data && 'message' in data &&
            'email' in data && 'phoneNumber' in data) {
          rows.push([data.timestamp, data.fullName, data.phoneNumber, data.email, data.message]);
        }
      }
    });

    if (rows.length > 0) {
      // Update the range based on the number of columns in each row
      var dataRange = sheet.getRange(3, 2, rows.length, rows[0].length);
      dataRange.setValues(rows);
    } else {
      Logger.log('No data to update in the sheet.');
    }

  } else {
    Logger.log('Data is not in the expected format');
  }
}

scriptID = 1hguuh4Zx72XVC1Zldm_vTtcUUKUA6iBUOoGnJUWLfqDWx5WlOJHqYkrt