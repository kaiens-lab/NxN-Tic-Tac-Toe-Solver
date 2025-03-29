const { isSolved } = require("./solver"); // 如果你的函式寫在 solver.js

// 測資 1：3x3｜X 獲勝
const board1 = [
  [1, 1, 1],
  [0, 2, 0],
  [2, 0, 2],
];
console.log("3x3 X wins:", isSolved(board1)); // 預期：1

// 測資 2：4x4｜尚未結束
const board2 = [
  [1, 2, 0, 1],
  [2, 1, 0, 2],
  [2, 1, 1, 2],
  [1, 2, 2, 0],
];
console.log("4x4 Not finished:", isSolved(board2)); // 預期：-1

// 測資 3：5x5｜平手
const board3 = [
  [1, 2, 1, 2, 1],
  [2, 1, 2, 1, 2],
  [2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1],
  [1, 1, 2, 2, 2],
];
console.log("5x5 Draw:", isSolved(board3)); // 預期：0
