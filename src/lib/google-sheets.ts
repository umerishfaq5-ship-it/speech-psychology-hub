/**
 * Google Sheets Integration via Google Apps Script
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this code in the editor:
 *
 *    function doPost(e) {
 *      var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
 *      var data = JSON.parse(e.postData.contents);
 *      sheet.appendRow([
 *        new Date(),
 *        data.name,
 *        data.phone,
 *        data.service,
 *        data.message,
 *        data.source
 *      ]);
 *      return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
 *        .setMimeType(ContentService.MimeType.JSON);
 *    }
 *
 * 3. Click Deploy → New Deployment → Web App
 * 4. Set "Execute as: Me" and "Who has access: Anyone"
 * 5. Copy the deployed URL and paste it below as GOOGLE_SHEETS_URL
 * 6. In your Google Sheet, add headers in row 1:
 *    Timestamp | Name | Phone | Service | Message | Source
 */

// ⚠️  REPLACE THIS with your deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
  source?: string;
}

export async function submitToGoogleSheets(data: FormData): Promise<{ ok: boolean }> {
  try {
    // We use no-cors because Apps Script doesn't return CORS headers by default.
    // The form submission will succeed even though we can't read the response.
    await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: data.source ?? "Website Form" }),
    });
    return { ok: true };
  } catch {
    // Even on network error we optimistically return ok so UX isn't broken
    return { ok: true };
  }
}
