## Definition

Most mobile apps on your phone need to communicate to a [server](server.md) to perform most of their functionalities.  

Some of these functionalities require that the user is verified. Unlike traditional web apps, where once a user is verified, the browser creates a [cookie](cookie.md) to hold this state, mobile apps have no such mechanism and rely on a different approach. Something stateless

This is also true for modern web apps built using modern frontend [frameworks](web-framework.md) with [APIs](api.md) acting as an exchange medium to the server. 

A JSON web token (JWT) is a JSON object that is used to securely transport data over the internet (between two parties). The server encrypts authentication information stored as a [JSON](json.md) object and sends it back to the app. The app can then send this encrypted data to the server any time the user's identity needs to be verified.

## Use Cases and Examples

 JSON Web Tokens are mostly used for:
- [Authentication](authentication.md)
- Secure Information Exchange

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

- **Header:** This part contains information about the encryption technique used.
- **Payload:** This is the information you would like to encrypt
- **Signature:** This section is used to verify that the payload is not temped.

Its all put together and encoded to base64 maintaining the structure `header.payload.signature`.

## Summary

The critical part of a JWT is that any app or person can read its content but can't modify it in any way because the server will detect the changes. 
Check out [jwt.io](https://jwt.io) to read more on the subject.