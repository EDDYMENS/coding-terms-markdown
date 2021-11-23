## Definition
Load balancing is the use of a piece of software known as a load balancer to help distribute web traffic to different servers.

## Use cases and Examples
There is a limit when it comes to how many users can access a service from a single [servers](server.md). So usually you will find that services with a high number of visiting users rely on more than one server. 

The question then is how do they know when a server is overwhelmed to then route the request to a different one. 

This is the job of a load balancer. Some employ the strategy of balancing out the traffic load across multiple servers instead of waiting for a single server to get overwhelmed as this might lead to other problems. 

The other question then is if all the traffic is going to the load balancer first won't they get overwhelmed themselves a situation known as a single point of failure. Well load balancers themselves act like traffic conductors they don't handle the request themselves which is the most resource-intense part of serving a request.

## Summary
Load balancers may also be useful when it comes to outages, if a load balancer detects that a server is down it stays clear of that and routes requests to a different server.

These days there are many third-party services out there that provide load balancers so you don't have to put up and manage one.