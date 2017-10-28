# Mastering React Testing with Jest

A repo for notes and examples from the Mastering React Testing with Jest course on PluralSight.

## What is Jest?

* Jasmine-based test framework
* Super set of Jasmine
* For testing React applications
* Automatic mocking dependencies

## Technologies

* Jasmine - unit testing
* Jest - auto mocking
* Istanbul - code coverage included with Jest

## Automatic Mocking

In order to facilitate unit testing of your React components, Jest automatically mocks out dependencies.

Whenever you use a ```require``` statement within your unit tests, instead of receiving the actual JavaScript module, Jest will provide a mock of it instead.  Using Jest, you specify when you don't want to mock a given module.

### Auto Mocking Toggles

* ```jest.autoMockingOff()```
* ```jest.autoMockingOn()``` - default behavior
* ```jest.dontMock()```
* ```jest.mock()```

### Manual Mocks

You can create "manual" mocks in a folder for use by Jest.

* ```/__mocks__/```

## Jest API

* ```dontMock``` is a command and important function from Jest
* We typically don't mock 3rd party libraries (e.g. jQuery, underscore, etc.)
* For libraries, use ```package.json``` to disable mocking as ```dontMock``` doesn't always work as expected against libraries



