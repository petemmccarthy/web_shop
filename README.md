# Web-shop

Basic Pet Shop displaying various exotic animals built using the EmberJS framework.
Animal data is retrieved in json format using a [mock server](https://github.com/typicode/json-server) running locally as site is not live.

Tests are written using qunit which auto run when code is pushed to Github, the push fails if any tests are failing.

## To be finished/bugs to fix...

* Fix scrolling to new part of page on transition to new url (route)
* Element displays but not google map on initial render of contact page, only on re-render
* Mirage/mock server for running tests as currently they fail if json-server not running
* Enquiry form data to clear when submitted
* Further tests
* Needs a litle bit more styling!

And then...

* signup/login
* basket
* payments
* a little more thought and focus on ux and design

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Code Test Coverage

Tests are auto-run when any commits are pushed to GitHub. Failing tests will result in GitHub rejected the Push.

The code is covered by Acceptance, Integration and Unit tests.

### Running Tests

* `ember test`
* `ember test --server`

Or alternatively by visiting:
[http://localhost:4200/tests](http://localhost:4200/tests).
