let board = `
.....
.*#.*
.@...
.....
`
const movements = "RRRUU";

board = board.trim().split("\n");
new_board = [];
for (const b of board) {
	new_board.push(b.split(""));
}

// console.log(new_board);
// [
//   ['.', '.', '.', '.', '.'],
//   ['.', '*', '#', '.', '*'],
//   ['.', '@', '.', '.', '.'],
//   ['.', '.', '.', '.', '.']
// ]

let position = { row: 0, column: 0};

for (let i = 0; i < new_board.length; i++) {
	const j = new_board[i].indexOf("@");
	if (j !== -1) {
		position = { row: i, column: j };
		break;
	}
}

let {row: newRow, column: newCol} = position;

// if (newRow >= 0 &&
// 	newRow < new_board.length &&
// 	newCol >= 0 &&
// 	newCol < new_board[0].length) {
// 	console.log("crash");
// }

for (const movement of movements) {
	if (movement === "R") {
		if (new_board[newRow][newCol] === ".") {
			position.column += 1;
		} else if (new_board[newRow][newCol] === "*") {
			console.log("success");
		} else if (new_board[newRow][newCol] === "#" ||
				   new_board[newRow][newCol] === undefined) {
			console.log("crash");
		}
	} else if (movement === "L") {
		if (new_board[newRow][newCol] === ".") {
			position.column -= 1;
		} else if (new_board[newRow][newCol] === "*") {
			console.log("success");
		} else if (new_board[newRow][newCol] === "#" ||
				   new_board[newRow][newCol] === undefined) {
			console.log("crash");
		}
	} else if (movement === "U") {
		if (new_board[newRow][newCol] === ".") {
			position.row -= 1;
		} else if (new_board[newRow][newCol] === "*") {
			console.log("success");
		} else if (new_board[newRow][newCol] === "#" ||
				   new_board[newRow][newCol] === undefined) {
			console.log("crash");
		}
	} else if (movement === "D") {
		if (new_board[newRow][newCol] === ".") {
			position.row += 1;
		} else if (new_board[newRow][newCol] === "*") {
			console.log("success");
		} else if (new_board[newRow][newCol] === "#" ||
				   new_board[newRow][newCol] === undefined) {
			console.log("crash");
		}
	} else {
		console.log("None");
	}
}

console.log(position)