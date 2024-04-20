// Defining an object called 'team' to store information about the 2023-2024 Colorado Avalanche players and games.

// Array of player objects containing information about each player.
const team = {
  _players: [
    { firstName: "Cale", lastName: "Makar", age: 25 },
    { firstName: "Nathan", lastName: "Mackinon", age: 29 },
    { firstName: "Justus", lastName: "Annunen", age: 24 },
  ],
  // Array of game objects containing information about each game.
  _games: [
    { opponent: "Jets", teamPoints: 0, opponentPoints: 7 },
    { opponent: "Golden Knights", teamPoints: 3, opponentPoints: 4 },
    { opponent: "Oilers", teamPoints: 5, opponentPoints: 1 },
  ],
  // Getter method to retrieve the player data.
  get players() {
    return this._players;
  },
  // Getter method to retrieve the game data.
  get games() {
    return this._games;
  },
  // Method to add a new player to the team's roster.
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  // Method to add a new game to the team's schedule.
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
/// Testing the addPlayer method by adding a new player 'Bugs Bunny' and logging the updated player list.
team.addPlayer("Bugs", "Bunney", 76);
console.log(team.players);
// Testing the addGame method by adding a new game against the 'Titans' and logging the updated game list.
team.addGame("Titans", 100, 98);
console.log(team.games);



