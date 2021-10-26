## Definition
Session storage is a web storage type that can store data (key-value pairs) in the browser. It will hold the data until the tab or browser is closed. Once the browser or tab is closed, the stored data is removed.


## Use Cases and Examples
In other to give users a good experience on the web, most web applications store some useful information about the user when they collect them the first time, this way the user doesn't have to provide it again and again.

This kind of information can be stored on the [server](server.md) or in the user's browser. Information is stored within the browser because of how immediate its available and can be used to provide a smooth experience as opposed to getting this from the server.

There are many ways to store the information on the browser, this includes the very old way by using a [cookie](cookie.md) and newer options such as [local storage](local-storage.md) and session storage. The key thing to consider when it comes to session storage is the fact that all the information it holds is lost once the user closes the tab, developers need to be aware of this and use it where it fits such a use case.

Session storage is considered the perfect alternative to cookies because:
- Unlike cookies, it does not send web storage objects to the server with every request.
- Unlike cookies, there is no chance that storage objects get manipulated by the server using HTTP headers.
- It can hold a lot more data compared to cookies. Google Chrome and Firefox can store up to 10 MB of data in session storage.

## Summary

Session storage is often debated to be a replacement for cookies, but there are some security concerns. It remains one of the best ways to store information needed while a user is on the website and clear it out when the user is done, this could help free up space, as there is a set limit when it comes to how much a website can store on a users browser.