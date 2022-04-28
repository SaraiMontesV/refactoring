const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController {
    static getExplorersByMission(_mission) {
        const explorersInMission = ExplorerService.filterByMission(
            explorers,
            _mission
        );
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(_mission) {
        const usernames = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            _mission
        );
        return usernames;
    }

    static getExplorersAmonutByMission(_mission) {
        const amountExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            _mission
        );
        return amountExplorers;
    }

    static applyValidationInNumber(_number) {
        const isFizzbuzz = FizzbuzzService.applyValidationInNumber(_number);
        return isFizzbuzz;
    }
}

module.exports = ExplorerController;
