class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // Check if already exists so data isn't overwritten
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    // Makesure the vertices exist, and that the edges don't already exist.
    if (
      this.adjacencyList[v1] &&
      !this.adjacencyList[v1].includes(v2) &&
      this.adjacencyList[v2] &&
      !this.adjacencyList[v2].includes(v1)
    ) {
      // Add edges
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let edge of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, edge);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    // If starting vertex doesn't exist, return.
    if (!this.adjacencyList[start]) return null;

    const visited = {};
    const result = [];
    // The context of "this" changes inside the helper, so keep a reference to adjacencyList here.
    const adjacencyList = this.adjacencyList;

    // Immediately invoked recursive helper
    (function dfs(vertex) {
      // If vertex has no neighbours, return.
      if (!adjacencyList[vertex].length) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    if (!this.adjacencyList[start]) return null;
    const stack = [start];
    const visited = {};
    const result = [];
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    if (!this.adjacencyList[start]) return null;
    const queue = [start];
    const visited = {};
    const result = [];
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//       A
//      / \
//     B   C
//    /     \
//    D ---- E
//     \    /
//        F

console.log(g);
// The graph is represented by an adjacency list
// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'E'],
//   D: ['B', 'E', 'F'],
//   E: ['C', 'D', 'F'],
//   F: ['D', 'E']
// }

console.log(g.depthFirstRecursive('A')); // ['A', 'B', 'D', 'E', 'C', 'F']

console.log(g.depthFirstIterative('A')); // ['A', 'C', 'E', 'F', 'D', 'B']

console.log(g.breadthFirst('A')); // ['A', 'B', 'C', 'D', 'E', 'F']
