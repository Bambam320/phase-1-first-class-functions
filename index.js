function receivesAFunction (cb) {
    return cb();
}

receivesAFunction (function () {Spy});

function returnsANamedFunction () {
    return function iAmQuestioningThis() {
        console.log(`I wish there were better explanations of what the test
        is looking for!`)
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("I\'m not naming this function so it\'s anonymous, HA")
    }
}