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
}

// Graph to show airline flight routes
let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Japan');
g.addVertex('Houston');
g.addVertex('San Francisco');

g.addEdge('Tokyo', 'Japan');
g.addEdge('San Francisco', 'Houston');
g.addEdge('Houston', 'Tokyo');
g.addEdge('Tokyo', 'Japan');

g.removeEdge('Tokyo', 'Houston');

g.removeVertex('Tokyo');

console.log(g);
