const Simulation = require('./Simulation').Simulation,
      Coordinate = require('./Coordinate').Coordinate,
      simulation = new Simulation(new Coordinate(1, 1), new Coordinate(31, 39), 1358),
      result = simulation.solve();

console.log(`Steps: ${result.steps}\n`);
simulation.maze.print(result.solution);

