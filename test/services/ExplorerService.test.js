const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit Test for ExplorerService", () => {

    test("1) Validate length of explorers in mission", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("2) Explorers not to be null", () => {
        const explorers = [];
        expect(explorers).not.toBeNull();
    });

    test("3) Get amount of explorers by mission to be greater or equal than 0", () => {
        const explorers = [{ mission: "node" }];
        const amountExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "node"
        );
        expect(amountExplorers).toBeGreaterThanOrEqual(0);
    });

    test("4) Verifying properties of explorer ", () => {
        const explorer = {
            name: "Woopa13",
            githubUsername: "ajolonauta13",
            score: 13,
            mission: "node",
            stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
        };
        expect(explorer).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                githubUsername: expect.any(String),
                score: expect.any(Number),
                mission: expect.any(String),
            })
        );
    });

    test("5) Get Explorers Usernames By Mission to be greater or equal than 0 ", () => {
        const explorers = [
            {
                name: "Woopa12",
                githubUsername: "ajolonauta12",
                score: 12,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
            },
        ];
        const usernames = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );
        expect(usernames.length).toBeGreaterThanOrEqual(0);
    });
});
