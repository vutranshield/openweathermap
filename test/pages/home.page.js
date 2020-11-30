import Result from './result.page';


class HomePage {
    get searchInput() { return $('#nav-search-form > input#q') }

    searchCityWeather(city) {
        this.searchInput.setValue(city);
        browser.keys(['Enter']);

        const rstHeadline = $('//h2[contains(text(), "Weather in your city")]')
        rstHeadline.waitForDisplayed({ timeout: 3000 });
        return Result;
    }

    open() {
        browser.url('/');
        return this;
    }
}

export default new HomePage();
