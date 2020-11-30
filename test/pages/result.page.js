import City from './city.page';

const selector = {
    resultContainer: '//div[@id="forecast_list_ul"]',
    alertWarning: 'div.alert-warning'
}

class Result {
    clickOnMatchString(string) {
        $(`${selector.resultContainer}//*[contains(text(), "${string}")]`).click();
        browser.pause(3000);
        return City;
    }

    verifyFalseSearchResult() {
        $(selector.alertWarning).isDisplayed();
        return this;
    }
}
export default new Result();