const selector = {
    currentContainer: 'div.current-container',
    chartContainer: 'div.chart-container',
    dailyContainer: 'div.daily-container',
    minutelyContainer: '//div[@class="minutely-container"]'
}

class City {
    verifyWeatherDataIsDisplayed() {
        $(selector.currentContainer).isDisplayed();
        $(selector.chartContainer).isDisplayed();
        $(selector.dailyContainer).isDisplayed();
        $(selector.minutelyContainer).isDisplayed();
    }
}

export default new City();