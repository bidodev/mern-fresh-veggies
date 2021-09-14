### E2E Testing

The project is using WebdriverIO with Mocha for E2E testing.

The test cases and pages are under `/test`.

For running the tests, have the app running at `localhost:3000` and run `yarn e2e-test` This will, compile the test spec file and run the tests, the resulting `.js`file is gitignored and just a build artifact.

#### Pages

`/test/pages`
This is the idea
https://martinfowler.com/bliki/PageObject.html

#### Specs

`/test/specs`

These should refer to the tickets and test them to ensure satisfaction of the acceptance criteria.
