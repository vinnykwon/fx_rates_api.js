class FxRatesApi {
	constructor() {
		this.api = "https://api.fxratesapi.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getLatestRates() {
		const response = await fetch(
			`${this.api}/latest`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHistoricalRates() {
		const response = await fetch(
			`${this.api}/historical`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTimeseriesData() {
		const response = await fetch(
			`${this.api}/timeseries`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCurrencies() {
		const response = await fetch(
			`${this.api}/currencies`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {FxRatesApi}
