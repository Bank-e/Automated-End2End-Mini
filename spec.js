// spec.js
describe('XYZ Bank Deposit Test', function() {
    it('should deposit 1000 and verify the balance update', async function() {
        const EC = protractor.ExpectedConditions;
        browser.waitForAngularEnabled(false);

        await browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

        // ไปหน้า Customer Login
        const customerLoginBtn = element(by.css('[ng-click="customer()"]'));
        await browser.wait(EC.elementToBeClickable(customerLoginBtn), 5000);
        await customerLoginBtn.click();

        // รอ dropdown โหลดแล้วเลือก 'Harry Potter'
        await browser.wait(EC.presenceOf(element(by.id('userSelect'))), 5000);
        const selectElement = element(by.id('userSelect'));
        await browser.wait(EC.elementToBeClickable(selectElement), 5000);
        await selectElement.click();

        const options = element.all(by.css('select#userSelect option'));
        await browser.wait(EC.presenceOf(options.first()), 5000);

        const optionToSelect = options.filter(async (option) => {
            const text = await option.getText();
            return text.trim() === 'Harry Potter';
        }).first();
        await browser.wait(EC.elementToBeClickable(optionToSelect), 5000);
        await optionToSelect.click();

        // click Login
        const loginBtn = element(by.buttonText('Login'));
        await browser.wait(EC.elementToBeClickable(loginBtn), 5000);
        await loginBtn.click();

        // Select Account Number 1004
        await browser.wait(EC.presenceOf(element(by.cssContainingText('select#accountSelect option', '1004'))), 5000);
        await element(by.cssContainingText('select#accountSelect option', '1004')).click();

        // Wait Account Loding (ปุ่ม Deposit โผล่)
        await browser.wait(EC.presenceOf(element(by.css('button[ng-click="deposit()"]'))), 5000);
        const depositBtn = element(by.css('button[ng-click="deposit()"]'));
        await browser.wait(EC.elementToBeClickable(depositBtn), 5000);
        await depositBtn.click();

        // รอ input amount โผล่ แล้วใส่เงิน
        const amountInput = element(by.model('amount'));
        await browser.wait(EC.presenceOf(amountInput), 5000);
        await amountInput.sendKeys('1000');

        // คลิก Submit
        const submitBtn = element(by.css('button[type="submit"]'));
        await browser.wait(EC.elementToBeClickable(submitBtn), 5000);
        await submitBtn.click();

        // รอข้อความ "Deposit Successful"
        const successMsg = element(by.css('span.error'));
        await browser.wait(EC.textToBePresentInElement(successMsg, 'Deposit Successful'), 5000);
        const text = await successMsg.getText();
        expect(text).toEqual('Deposit Successful');

        // ตรวจสอบสีข้อความ
        const color = await successMsg.getCssValue('color');
        console.log('text:', text);
        console.log('text color:', color);
        expect(color === 'rgba(255, 0, 0, 1)' || color === 'rgb(255, 0, 0)').toBeTruthy();

        // ตรวจสอบยอดเงิน
        const balance = await element.all(by.css('div.center strong')).get(1).getText();
        console.log('balance:', balance);
        expect(balance.trim()).toEqual('1000');

        browser.waitForAngularEnabled(true);
    });
});