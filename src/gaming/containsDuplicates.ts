/**
 * You are a game developer and you are working on a new game.
 * Implement the following functions to help you manage the game lobby.
 */

type Player = {
  id: number;
  name: string;
};

type Lobby = {
  id: number;
  players: Player[];
};

const lobby: Lobby = {
  id: 1,
  players: [],
};

function notifyGameServer(message: string) {
  console.log(message);
}

// TODO (Q1): create a function called registerPlayer(name: string)

// TODO (Q2): create a function called leaveLobby(playerId: number)

// TODO (Q3): create a function called checkForDuplicates(lobby: Lobby) and notify the game server if there are duplicates or not

// TODO (Q4): create a function called findDuplicatePlayers(lobby: Lobby) and notify the game server who the duplicate players are
