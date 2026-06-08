const SHEET_ID = "1jmPmD1rBYOvuKitZi2UruszADXGgMgFdmgr6N1ahI1s";
const HEADERS = [
  "timestamp",
  "name",
  "email",
  "response",
  "children",
  "stay",
  "source",
];

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}

function doGet() {
  return HtmlService.createHtmlOutput("RSVP endpoint is live.");
}

function doPost(event) {
  const sheet = getSheet();
  const data = event.parameter || {};

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.response || "",
    data.children || "",
    data.stay || "",
    data.source || "",
  ]);

  return HtmlService.createHtmlOutput("OK");
}
