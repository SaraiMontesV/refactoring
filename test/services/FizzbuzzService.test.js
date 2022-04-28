const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzService", () => {

    test("1) Validate FIZZ", () => {
        const explorer = {
            "name": "Woopa9",
            "githubUsername": "ajolonauta9",
            "score": 9,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML",
                "elm"
            ]
        };
        const explorersWithFizz = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersWithFizz.trick).toBe("FIZZ");
    });

    test("1) Validate BUZZ", () => {
        const explorer = {
            "name": "Woopa10",
            "githubUsername": "ajolonauta10",
            "score": 10,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML"
            ]
        };
        const explorersWithBuzz = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersWithBuzz.trick).toBe("BUZZ");
    });

    test("3) Validate FIZZBUZZ", () => {
        const explorer = {
            "name": "Woopa15",
            "githubUsername": "ajolonauta15",
            "score": 15,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML"
            ]
        };
        const explorersWithFIzzBuzz = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorersWithFIzzBuzz.trick).toBe("FIZZBUZZ");
    });

    test("4) Validate is not FIZZBUZZ", () => {
        const explorer = {
            "name": "Woopa4",
            "githubUsername": "ajolonauta4",
            "score": 4,
            "mission": "java",
            "stacks": [
                "javascript",
                "elixir",
                "groovy",
                "reasonML"
            ]
        };
        const explorersWithScore = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(typeof explorersWithScore.trick).toBe("number");
    });

    test("5) Validate FIZZ with a input number", () => {        
        const numberIsFizz = FizzbuzzService.applyValidationInNumber(3);
        expect(numberIsFizz).toBe("FIZZ");
    });

    test("6) Validate BUZZ with a input number", () => {        
        const numberIsBuzz = FizzbuzzService.applyValidationInNumber(5);
        expect(numberIsBuzz).toBe("BUZZ");
    });

    test("7) Validate FIZZBUZZ with a input number", () => {        
        const numberIsFizzbuzz = FizzbuzzService.applyValidationInNumber(15);
        expect(numberIsFizzbuzz).toBe("FIZZBUZZ");
    });

    test("8) Validate is not FIZZBUZZ with a input number", () => {        
        const numberIsNotFizzbuzz = FizzbuzzService.applyValidationInNumber(3);
        expect(numberIsNotFizzbuzz).toBe("FIZZ");
    });

});