class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInNode = explorersInNodeToGetUsernames.map(
            (explorer) => explorer.githubUsername
        );
        return usernamesInNode;
    }
}
module.exports = ExplorerService;
