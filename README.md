# NxN Tic-Tac-Toe Solver

可支援 NxN 棋盤的井字遊戲結果判斷器。

#### 📌 靈感來源

這個小作品的靈感來自挑戰 Codewars [Tic-Tac-Toe Checker](https://www.codewars.com/kata/525caa5c1bf619d28c000335)。  
原題目僅限 3x3 棋盤，但我希望將其擴展為一個 可重用、可維護且支援 NxN 棋盤的通用版本，並可應用於多種二維棋類邏輯的基礎模板來用。
<br>

#### 📌 功能特色

- 支援任意大小的棋盤（NxN）
- 判斷勝者（1: X、2: O）
- 判斷尚未有勝負(有空格)回傳 -1
- 判斷平手回傳 0
  <br>

#### 📥 使用方法

```js
// 引入函式
const { isSolved } = require("./solver");

const board = [
  [1, 1, 1],
  [0, 2, 0],
  [2, 0, 2],
];

console.log(isSolved(board)); // 1
```
