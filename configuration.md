## Definition

Every software we use comes with built-in behaviors and attributes like, the colors used for its interface, the size of inputs, and hidden parts like what kind of database it uses. Most of these attributes are written in code as part of the application but sometimes developers decide to extract some of these attributes into configurations. 

This is done mostly because this part is likely to change more often. The reasons for this change vary widely, from the fact that the software can be set up for test purposes and need a different set of attributes all the way to different specification requirements from clients.

Configuration files are usually less dense and isolated as compared to the rest of the code that is knitted into each other. This makes it convenient and easy to make changes easily.

## Use cases and Examples

There are different types of configurations. The closest examples to end-users are usually what they get as part of the setting for their software.
Some software stores these settings in a configuration file to be used next time the user opens up the app.

There are a lot more developer-focused configuration examples like database connection credentials files, switching on and off [debugging](debugging.md) mode to config files used by tools like [Ansible](https://www.ansible.com/) to setup up a server.

YAML, XML, [JSON](json.md), and DOTENV are some popular formats developers use to store configurations.

## Summary
Configuration files often shorten to config files provide developers a way to change some behavior or attribute of software without necessarily touching its code.
