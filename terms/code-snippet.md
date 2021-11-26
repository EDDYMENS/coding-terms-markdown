## Definition

Code snippets are a quick and easy way to insert ready-to-use code into your application. Code snippets make it easy for you to include common and repetitive patterns of coding logic and syntax in your applications, saving you time and giving you more of an opportunity to focus on the rest of your application.

## Use cases and Examples

Below is a code sample in Javascript that appends a `K` or `M` to a number, So for example, if you wanted to represent a view count in your app this will be a  good snippet to use.

```
function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}
```

## Summary

You need to be careful when using code snippets from the internet, double-check the code example to make sure it has no malicious code.

