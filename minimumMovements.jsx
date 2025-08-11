function minimumMoves(grid, startX, startY, goalX, goalY) {
 const n = grid.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const heap = [];

    dist[startX][startY] = 0;
    heap.push([0, startX, startY]);

    while (heap.length > 0) {
        let minIndex = 0;
        for (let i = 1; i < heap.length; i++) {
            if (heap[i][0] < heap[minIndex][0]) minIndex = i;
        }

        const [cost, x, y] = heap[minIndex];
        heap.splice(minIndex, 1);

        if (visited[x][y]) continue;
        visited[x][y] = true;

        if (x === goalX && y === goalY) return cost;

        for (let d = 0; d < 4; d++) {
            let nx = x + directions[d][0];
            let ny = y + directions[d][1];

            while (
                nx >= 0 && ny >= 0 &&
                nx < n && ny < n &&
                grid[nx][ny] !== 'X'
            ) {
                if (!visited[nx][ny] && dist[nx][ny] > cost + 1) {
                    dist[nx][ny] = cost + 1;
                    heap.push([cost + 1, nx, ny]);
                }
                nx += directions[d][0];
                ny += directions[d][1];
            }
        }
    }

    return -1;
}
const grid = ['.X.', '.X.', '...'];
console.log(minimumMoves(grid, 0, 0, 0, 2)); // saída: 3