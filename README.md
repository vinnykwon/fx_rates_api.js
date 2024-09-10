# fx_rates_api.js
Web-API for [fxratesapi.com](https://fxratesapi.com) an Currency Conversion &amp; Exchange Rates API

## Example
```JavaScript
async function main() {
	const { FxRatesApi } = require("./fx_rates_api.js")
	const fxRatesApi = new FxRatesApi()
	const latestRates = await fxRatesApi.getLatestRates()
	console.log(latestRates)
}

main()
```
