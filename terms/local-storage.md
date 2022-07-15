## Definition

Local storage is a web storage type that enables JavaScript sites and apps to store data ([key-value pairs](key-value-pair.md)) in the browser with no expiration date. So, unlike [session storage](session-storage.md), local storage holds the data even when the tab or browser is closed.

Compared to cookies, local storage offers a higher storage limit (around 5 MB or more), the syntax is straightforward, and it does not send data to the server during an HTTP request.

## Use Cases and Examples

Local Storage is used mostly when a website wants to hold data that a user might want to see in the next visit. For example, shopping cart, UI theme, etc.

To store values in localStorage, `setItem()` method is used. For example, `window.localStorage.setItem('key', 'value');`.
Similarly, there are other methods for carry out other functions with localStorage, such as `getItem()`, `remoteItem()`, `clear()`, etc.

## Summary

It is not meant to store sensitive data. Third-party ([code](code.md) on the website can easily access the data and this might lead to a security breach. The key advantage of local storage is that there is no expiration date, so the data is retained for as long as the developer wants. 
