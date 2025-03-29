function isSolved(board) {
  const n = board.length;

  // 所有贏的可能性
  const lines = [];

  // 加入所有 row
  for (let i = 0; i < n; i++) {
    lines.push(board[i]);
  }

  // 加入所有 column
  for (let j = 0; j < n; j++) {
    const col = [];
    for (let k = 0; k < n; k++) {
      col.push(board[k][j]);
    }
    lines.push(col);
  }

  // 左上到右下的對角線
  const diag1 = [];
  for (let i = 0; i < n; i++) {
    diag1.push(board[i][i]);
  }
  lines.push(diag1);

  // 右上到左下的對角線
  const diag2 = [];
  for (let i = 0; i < n; i++) {
    diag2.push(board[i][n - 1 - i]);
  }
  lines.push(diag2);

  // 是否有人贏
  for (let line of lines) {
    const s = new Set(line);
    if (s.size === 1 && !s.has(0)) {
      for (let val of s) return val; // 回傳 1 或 2
    }
  }

  // 檢查是否還有空格
  for (let row of board) {
    for (let cell of row) {
      if (cell === 0) return -1; // 尚未有輸贏
    }
  }

  return 0; // 平手
}

module.exports = { isSolved };
