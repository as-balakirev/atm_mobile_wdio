

describe('Wdio test suite', function () {

    it('should work', async function () {
        let expenseNameLocator = `new UiSelector().text("Enter expense name, e.g. \"milk\"").className("android.widget.EditText")`;
        let expenseName = await $(`android=${expenseNameLocator}`);
        await expenseName.setValue('Pizza');
        let amountCurrencyLocator = `new UiSelector().text("Amount in your currency, e.g. 2.50").className("android.widget.EditText")`;
        let amountCurrency = await $(`android=${amountCurrencyLocator}`);
        await amountCurrency.setValue('2.50');
        let labelLocator = `new UiSelector().text("Label, e.g. food").className("android.widget.EditText")`;
        let label = await $(`android=${labelLocator}`);
        await label.setValue('food');
        let saveButtonLocator = `new UiSelector().text("SAVE").className("android.widget.Button")`;
        let saveButton = await $(`android=${saveButtonLocator}`);
        await saveButton.click();
    });
});