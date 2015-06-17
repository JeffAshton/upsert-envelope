# upsert-envelope

A tiny javascript envelope for an upsert (insert or update) operation results.

## Installation

```
$ npm install upsert-envelope
```

## Usage

```js
var UpsertEnvelope = require( 'upsert-envelope' );

var resource = 'anything';

// udpated resource
var env = new UpsertEnvelope( resource );
console.log( 'resource: ' + env.resource );
console.log( 'inserted: ' + env.inserted );

// inserted resource
var env = new UpsertEnvelope( resource, true );
console.log( 'resource: ' + env.resource );
console.log( 'inserted: ' + env.inserted );

```
