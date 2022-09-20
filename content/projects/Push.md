---
date: '2022-05-26'
title: 'Push - A Real-Time Reactive Push Messaging API'
github: 'https://github.com/thegoncalomartins/push'
tech:
  - Kotlin (Spring)
  - Redis
  - Docker
  - Kubernetes
showInProjects: true
---

**_Push_** is a Real Time Reactive Push Messaging API highly inspired by [Netflix](https://github.com/Netflix) 's [Zuul Push](https://github.com/Netflix/zuul/wiki/Push-Messaging), but with some differences. It was written in [Kotlin](https://kotlinlang.org/) with the [Spring](https://spring.io/) framework and it uses [Redis](https://redis.io/) as a message broker. **_Push_** provides [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) and [Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) endpoints that can be used to subscribe to real-time messages in a web environment. It also provides an HTTP endpoint to publish messages.
