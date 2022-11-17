
const dfs = node ;
   
let s = new Stack(this.nodes.length);
let explored = new Set();
s.push(node);

explored.add(node);


while (!s.isEmpty()) {
   let t = s.pop();


   console.log(t);


this.edges[t]
.filter(n => !explored.has(n))
.forEach(n => {
   explored.add(n);
   s.push(n);
   });
}

let g = new Graph();
g.addNode("0");
g.addNode("1");
g.addNode("2");
g.addNode("3");


g.addEdge("0", "2");
g.addEdge("0", "1");
g.addEdge("1", "3");