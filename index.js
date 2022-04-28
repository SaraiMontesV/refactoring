const Reader = require("./../refactoring/lib/utils/Reader");
const ExplorerService = require("./../refactoring/lib/services/ExplorerService");
const FizzbuzzService = require("./../refactoring/lib/services/FizzbuzzService");
const explorers = Reader.readJsonFile("explorers.json");
console.log(explorers);

ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

const explorer1 = {name: "Explorer1", score: 1};
const x1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
console.log(x1);
const explorer3 = {name: "Explorer3", score: 3};
const x2 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(x2);
const explorer5 = {name: "Explorer5", score: 5};
const x3 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(x3);
const explorer15 = {name: "Explorer15", score: 15};
const x4 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(x4);