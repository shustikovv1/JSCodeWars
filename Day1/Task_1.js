const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("smash", () =>  {

    it ("Should return empty string for empty array.", () => {
        assert.strictEqual(smash([]), "");
    });

    it ("One word example should return the word.", () => {
        assert.strictEqual(smash(["hello"]), "hello");
    });

    it ("Multiple words should be separated by spaces.", () =>  {
        assert.strictEqual(smash(["hello", "world"]), "hello world");
        assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
        assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
    });
});


function smash (words) {
    var result;
    if (words.length == 0) {
        result = "";
    } else if (words.length == 1) {
        result = words[0];
    }
    else
    {
        var result1 = "";
        words.forEach((word) => {
            if (result1 != "") {
                result1 = result1 + " " + word;
            } else {
                result1 = word;
            }
        })

//      console.log(result1);
        result = result1;
    }

    return result;
};