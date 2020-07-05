# Multi Container Lab

I'm learning Docker. This exercise is worked from Section 5 of a Udemy course that Stephen Grider put together: [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/).

## Purpose

To learn how to use multiple docker containers for a single app to facilitate scaling.

## Project Summary

We'll build a simple node web app that counts the number of visits it receives, and displays the count to the user. The number of visits will be stored off in a Redis instance and persist across browsers, devices and sessions.

In order to facilitate theoretical scaling, separate docker containers will be used for the Redis server and the node app.
