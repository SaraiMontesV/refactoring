const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission =
    ExplorerController.getExplorersAmonutByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernames =
    ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersUsernames);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzz = ExplorerController.applyValidationInNumber(score);
    response.json({ score: score, trick: fizzbuzz });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
