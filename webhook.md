## Definition

A Webhook is a setup where an app is able to later send some data to another app whenever an event occurs. It's like when you give someone your number for them to call you back when they have some information.
And in fact, there is a concept similar to webhooks called a [callback](callback.md).

## Use Cases and Examples

Take the example of an e-commerce store using a [payment gateway](payment-processor.md), where the payment gateway being used is a third-party app. The e-commerce store has integrated the payment gateway [API](api.md) so that whenever a customer adds anything to their cart and wishes to pay, they are redirected to the payment gateway page, which is independent of the store.

Since the real-time information regarding the payment status is held by the payment gateway third-party app and not the store itself, there needs to be a way for the store to stay updated regarding the status of the payment. 
This is where a webhook comes in. Using a webhook provided by the store, the payment gateway can send an update back to the store once the payment is completed by the user.

## Summary

In essence, a webhook provides an easy way for webpages/applications to acquire real-time data if a third-party app is being used and the data collection is not directly in their hands. 
