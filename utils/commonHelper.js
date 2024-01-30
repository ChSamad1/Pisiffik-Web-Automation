const { expect } = require('@playwright/test');

async function toastermsg(page, toaster, expectedText) {
    const toastrmsg = await page.locator(toaster).textContent();
    await expect(toastrmsg).toContain(expectedText);
    console.log(toastrmsg);
}
async function errorToasterMsg(page, errorToasterr, expectedText )
{
    const errorToaster = await page.locator(errorToasterr).textContent()
    await expect(errorToaster).toContain(expectedText)
    console.log(errorToaster);
}

async function EntriesOption(page,EntriesOptionPerPage ,expectedTxt)
 {
    const entriesOpt = await page.locator(EntriesOptionPerPage).textContent()
    await expect(entriesOpt).toContain(expectedTxt)
    console.log(entriesOpt);
    
}  




module.exports = {
    toastermsg,
    errorToasterMsg,
    EntriesOption,
    


};
