const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './e2e/*.e2e.js',
  output: './e2e_output',
  timeout: 1000,
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
      show: false,  // Set to false to run headless, solves iFrame problems.
      windowSize: '1000x700',
      restart: false, // Hold session after scenario ends. If true the session will be closed.
      chrome: {
        args: ["--disable-features=site-per-process"] // https://github.com/puppeteer/puppeteer/issues/4960#issuecomment-535554149
      }
    }
  },
  data: 'e2e_input',
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    'reporterOptions': {
      'reportDir': './e2e_output/output'
    }
  },
  name: 'frontend',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      methods: true,
    },
    pauseOnFail: {},
  }
}
