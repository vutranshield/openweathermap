import HomePage from '../pages/home.page';

describe('search for the weather of city', () => {
    context('Valid city name', () => {
        [
            { city: 'Tokyo, JP' },
            { city: 'Thành phố Hồ Chí Minh, VN' },
        ].forEach(function (data) {
            it(`should search the weather of ${data.city} successfully`, () => {
                HomePage
                    .open()
                    .searchCityWeather(data.city)
                    .clickOnMatchString(data.city)
                    .verifyWeatherDataIsDisplayed();
                browser.pause(3000);
            });
        });
    });

    context('Invalid city name', () => {
        [
            { city: 'Nothing, JP' },
            { city: 'Something, VN' },
        ].forEach(function (data) {
            it(`should search the weather of ${data.city} unsuccessfully`, () => {
                HomePage
                    .open()
                    .searchCityWeather(data.city)
                    .verifyFalseSearchResult()
                browser.pause(3000);
            });
        });
    });

});