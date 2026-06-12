const SHEET_ID = "1jmPmD1rBYOvuKitZi2UruszADXGgMgFdmgr6N1ahI1s";
const HEADERS = [
  "timestamp",
  "name",
  "email",
  "response",
  "plus_one",
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
  const usesNewFields = data.plus_one !== undefined;
  const plusOne = usesNewFields ? data.plus_one : data.children;
  const children = usesNewFields ? data.children : data.stay;
  const stay = usesNewFields ? data.stay : data.source;
  const source = data.site_source || (usesNewFields ? data.source : "");

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.response || "",
    plusOne || "",
    children || "",
    stay || "",
    source || "",
  ]);

  return HtmlService.createHtmlOutput("OK");
}
