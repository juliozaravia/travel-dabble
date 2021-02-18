# TravelDabble
## 1. What is TravelDabble? 
TravelDabble is a web application that shows you your place of origin through geolocation. Additionally, it allows you to select a destination country and shows you specific information about that place so that you're informed before traveling.
## 2. Is there a Live Demo?
If you're interested in reviewing a live version, I invite you to visit https://traveldabble.netlify.app, If you review the application and find an error or want to suggest an improvement, you can write to julio.zaravia.dev@gmail.com.
## 3. How was it programmed?
The web application is built with **classic web development technologies like HTML5, CSS, and Vanilla JavaScript**.

To show the information of the country of origin and destination to the user, **4 APIs are consumed**:

1. **Navigator.geolocation:** To access the device's location data (coordinates).
2. **Geocode.xyz:** To find the country and city where the device is located according to its coordinates.
3. **RESTCountries.eu:** To extract country-specific data such as Region, Population, Currency, among others.
4. **ExchangeRate-API.com:** To extract the exchange rate of the destination country.

The consumption of APIs (2 - 4) is done through the **ASYNC / AWAIT pattern**. I share here an example of the form of consumption that I'm using:

```javascript
export const exchangeRate = async function (originCurrency, destinationCurrency) {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/v6/[YOUR_KEY]/latest/${destinationCurrency}`);
		if (!response.ok) throw new Error(code.error.EXCHANGE_RESPONSE_ERROR);

		const data = await response.json();
		if (data.result === 'error') throw new Error(`
			${code.error.EXCHANGE_DATA_ERROR} 
			(${data['error-type'].charAt(0).toUpperCase()}${data['error-type'].slice(1)})
		`);

		return {
			conversionRate: data.conversion_rates[`${originCurrency}`],
			lastUpdate: data['time_last_update_utc']
		};
	} catch (err) {
		throw err;
	}
};
```
Additionally, I've separated the JavaScript code into modules to keep the functions that allow the operations within the webapp organized. In this way, any visitor can understand the code without problems. **The final structure of the project is**:

![TravelDabble Structure](http://www.juliozaravia.com/git-images/travel_dabble_julio_zaravia.jpg "TravelDabble Structure")

## 4. Note about `navigator.geolocation`.
**The application uses the Navigator.geolocation feature to access the location of the device.** This feature is available only in **secure contexts** (HTTPS).

To simulate a server and be able to do the respective tests I used the 'Live Server' plugin from the VSCode IDE. However, **this plugin doesn't allow the use of HTTPS**.

To solve this problem, a local SSL certificate must be created. You can do it by following the steps in this tutorial: [Add HTTPS support to VSCode Live Server](https://www.youtube.com/watch?v=v4jgr0ppw8Q "Add HTTPS support to VSCode Live Server").
## 5. Anything else?
- All constructive criticisms are very well received, you can send them to me at julio.zaravia.dev@gmail.com or hey@juliozaravia.com.
- If you're going to criticize this project in an offensive way, please don't do it, remember that no one comes to this world knowing everything.
- If you want to improve the code, you're free to do so, just let me know what you changed or improved so I can learn from you.
- I know my English is a bit poor, but I'm improving little by little. Thanks for understand.
- That's it, I really liked learning from this project and refactoring it, if you took the time to read this, you're a good person and I wish you a good day.
