const gridWidth = 10;
const gridHeight = 6;

const layers = [];

type Grid = {
  layers: Layer[];
  width: number;
  height: number;
};

type Coord = {
  x: number;
  y: number;
};

// Top left represents the top left coordinate within the larger grid
type Layer = {
  top: number;
  left: number;
  width: number;
  height: number;
  character: string;
  erasedCoordinates: Coord[];
};

const layer1: Layer = {
  top: 1,
  left: 1,
  width: 4,
  height: 4,
  character: "l",
  erasedCoordinates: [],
};
const layer2: Layer = {
  top: 1,
  left: 2,
  width: 4,
  height: 4,
  character: "r",
  erasedCoordinates: [],
};

var grid: Grid = {
  width: gridWidth,
  height: gridHeight,
  layers: [],
};

function printGrid(grid: Grid) {
  var lines: string[] = [];

  lines = drawInitialGrid(grid);

  grid.layers.forEach((layer) => {
    lines = drawLayer(layer, lines);
  });

  lines.forEach((line, rowIndex) => {
    console.log(rowIndex + " " + line);
  });
}

function drawInitialGrid(grid: Grid) {
  var lines = [];
  for (let i = 0; i < grid.height; i++) {
    var line: string = "";
    for (let j = 0; j < grid.width; j++) {
      line += "x";
    }
    lines.push(line.toString());
    line = "";
  }
  return lines;
}

function drawLayer(layer: Layer, oldLines: string[]) {
  var layerLines = [];
  for (let i = 0; i < grid.height; i++) {
    var line: string = "";
    // if we're within the layer's bounding box
    if (i >= layer.top && i < layer.height + layer.top) {
      for (let j = 0; j < grid.width; j++) {
        if (
          j >= layer.left &&
          j < layer.width + layer.left &&
          layer.erasedCoordinates.find(
            (coord) => coord.x === i && coord.y === j
          ) === undefined
        ) {
          line += layer.character;
        } else {
          line += oldLines[i].charAt(j);
        }
      }
      layerLines.push(line.toString());
      line = "";
    } else {
      layerLines.push(oldLines[i]);
      continue;
    }
  }
  return layerLines;
}

function eraseAreaFromLayer(
  grid: Grid,
  layer: Layer,
  leftX: number,
  topY: number,
  rightX: number,
  bottomY: number
): Layer {
  const erasedCoordinates = layer.erasedCoordinates;
  for (let i = 0; i < grid.height; i++) {
    // if we're within the layer's bounding box
    if (i >= topY && i < bottomY) {
      for (let j = 0; j < grid.width; j++) {
        if (j >= leftX && j < rightX) {
          // inside the layer

          erasedCoordinates.push({
            x: i,
            y: j,
          });
        } else {
          // outside the layer
        }
      }
    } else {
      continue;
    }
  }
  return {
    ...layer,
    erasedCoordinates,
  };
}

export function drawRectangle(
  fillCharacter: string,
  leftX: number,
  topY: number,
  rightX: number,
  bottomY: number
): Grid {
  grid.layers.push({
    top: topY,
    height: bottomY - topY + 1,
    left: leftX,
    width: rightX - leftX + 1,
    character: fillCharacter,
    erasedCoordinates: [],
  });

  return grid;
}

function eraseArea(
  leftX: number,
  topY: number,
  rightX: number,
  bottomY: number
): Grid {
  const newLayers = grid.layers.map((layer) => {
    return eraseAreaFromLayer(grid, layer, leftX, topY, rightX, bottomY);
  });
  console.log("newLayers", newLayers);

  return {
    ...grid,
    layers: newLayers,
  };
}

grid = drawRectangle("l", 1, 1, 4, 4);
grid = drawRectangle("r", 2, 1, 4, 4);
grid = eraseArea(3, 2, 3, 3);
console.log(grid);

printGrid(grid);
