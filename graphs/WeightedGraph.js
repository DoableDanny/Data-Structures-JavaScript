// An undirected, weighted graph class. Just focusing on adding vertices and edges for this graph.
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 17);
// {
//   A: [{ node: 'B', weight: 10 }, {node: 'C', weight: 17}],
//   B: [{node: 'A', weight: 10}],
//   C: [{node: 'A', weight: 17}],
// }

console.log(graph);
