# Open Weather Map E2E testing

This repository is for automating some test that automatically check the UI for search weather function on https://openweathermap.com

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What things you need to install the software and how to install them
- NodeJS

By this command, please check if `nodejs` has been installed on your local machine:
```
node -v
// it should return the version of nodejs if any, like this: v10.16.3
```

In case your system has not installed `nodejs` yet, checkout [this link](https://nodejs.org/en/download/releases/) from the official page for downloading. Please be noted that the LTS version is highly recommended.

### Installing

A step by step series of examples that tell you how to get an environment running

Clone or download the repository

```
git clone https://github.com/vutranshield/openweathermap.git
```

Then, move to the project folder and install the needed libraries

```
cd openweathermap
npm install
```

*Note*: About package management tool for nodejs, this guide use `npm` for showing the example, but of course you could use either `npm` or `yarn`. Feel free with your tool.

* From Yarn 1.0 onwards, scripts don't require "--" for options to be forwarded.

## Execute Tests

You can easily run the test specs which are placed in test/specs folder by using this command:

```
npm test
```

After running, the output console will look something like this:

```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 87.0.4280.67 mac os x #0-0] Spec: /Users/v001132/Desktop/NAB/part2_automation/test/specs/search.e2e.js
[chrome 87.0.4280.67 mac os x #0-0] Running: chrome (v87.0.4280.67) on mac os x
[chrome 87.0.4280.67 mac os x #0-0] Session ID: b96f36bdf098c964e74b5d3a24cb16c9
[chrome 87.0.4280.67 mac os x #0-0]
[chrome 87.0.4280.67 mac os x #0-0] search for the weather of city
[chrome 87.0.4280.67 mac os x #0-0]     Valid city name
[chrome 87.0.4280.67 mac os x #0-0]        ✓ should search the weather of Tokyo, JP successfully
[chrome 87.0.4280.67 mac os x #0-0]        ✓ should search the weather of Thành phố Hồ Chí Minh, VN successfully
```

## Built With

* [webdriverio](https://github.com/webdriverio/webdriverio) - Next-gen browser and mobile automation test framework for Node.js

## Contributing

Pull requests are all welcomed.

## License

This project is licensed under the MIT License.
