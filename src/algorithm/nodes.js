/**
 * Starting point for the player.
 * All node numbers can be referenced in the brighter shores world map file mentioned in the code repositories README.
 */
export const bountyBoard = {
  name: "Guild Bounty Board",
  node: 103,
};

/**
 * Portals that players can teleport to.
 * All node numbers can be referenced in the brighter shores world map file mentioned in the code repositories README.
 */
export const portals = {
  CRENOPOLIS_MARKET: {
    name: "Crenopolis Market",
    node: 53,
    teleportTime: 8,
  },
  CRENOPOLIS_OUTSKIRTS: {
    name: "Crenopolis Outskirts",
    node: 54,
    teleportTime: 8,
  },
};

/**
 * Markets where players buy or sell bounty related items.
 * All node numbers can be referenced in the brighter shores world map file mentioned in the code repositories README.
 */
export const markets = {
  VICTOR_T_CYCLOPS: {
    name: "Victor T Cyclops",
    node: 8,
  },
  FORTUNEHOLD_FARM: {
    name: "Fortunehold Farm",
    node: 13,
  },
  BUTCHERS_STALL: {
    name: "Butcher's Stall",
    node: 16,
  },
  HERMARS_HOMEWARE: {
    name: "Hermar's Homeware",
    node: 18,
  },
  GREENGROCERS: {
    name: "Greengrocers",
    node: 21,
  },
  CLOCK_STALL: {
    name: "Clock Stall",
    node: 26,
  },
  JENNALERS_WINES: {
    name: "Jennaler's Wines",
    node: 31,
  },
  TOY_STALL: {
    name: "Toy Stall",
    node: 36,
  },
  CANDICES_CANDLES: {
    name: "Candice's Candles",
    node: 38,
  },
  HALLIGS_STREET_FOOD: {
    name: "Hallig's Street Food",
    node: 41,
  },
  CHEF: {
    name: "Chef",
    node: 44,
  },
  BERTS_GALLERY: {
    name: "Bert's Gallery",
    node: 57,
  },
  SOUVENIR_STALL: {
    name: "Souvenir Stall",
    node: 61,
  },
  BOGGS_ANTIQUES: {
    name: "Bogg's Antiques",
    node: 66,
  },
  TOMMY_SHOES_WINES: {
    name: "Tommy Shoes Wines",
    node: 69,
  },
  MONOCLE_MARKET: {
    name: "Monocle Market",
    node: 71,
  },
  FRANCESCAS_FRUIT_STALL: {
    name: "Francesca's Fruit Stall",
    node: 76,
  },
  SNILCHS_WATCHES: {
    name: "Snilch's Watches",
    node: 77,
  },
  SOAP_SHOP: {
    name: "Soap Shop",
    node: 81,
  },
  HENDERSONS_MEAT: {
    name: "Henderson's Meat",
    node: 83,
  },
  CHEESE_SHOP: {
    name: "Cheese Shop",
    node: 84,
  },
  VASE_STALL: {
    name: "Vase Stall",
    node: 85,
  },
  PENNYS_CLOCKWORK: {
    name: "Penny's Clockwork",
    node: 86,
  },
  JANESSAS_DELICACIES: {
    name: "Janessa's Delicacies",
    node: 102,
  },
  TEXTILES_STALL: {
    name: "Textiles Stall",
    node: 104,
  },
  CABBAGE_STALL: {
    name: "Cabbage Stall",
    node: 118
  },
  PEARL_STALL: {
    name: "Pearl Stall",
    node: 119
  },
};

/**
 * Any nodes not already defined above represent the "doors" between rooms.
 * For example, the pathway between Waterfront and Tanners Road is represented by node #35.
 * All node numbers can be referenced in the brighter shores world map file mentioned in the code repositories README.
 *
 * `weight` is the time in seconds it takes to travel between the two nodes.
 *
 * `directed` edges are one-way paths that take longer to travel in one direction than the other.
 *    This is the case for example in Lord's Road West, where you must pass through a doorway to get to the other side.
 *
 * `hostile` edges are paths where you may get attacked by mobs.
 *
 * `detective` edges require some level in the Detective skill to travel through.
 *
 * `quest` edges are paths that require a quest to be completed to travel through.
 *
 * `portal` edges are paths that connect to a portal stone.
 *
 * When filling this out, always start with the lower node number and work your way up.
 * For example, when examining node 50, look only for any neighboring nodes that are *higher* than 50.
 *   This could be [50, 56], [50, 59], etc.
 *   In the case of [50, 49] - this should not be included as 49 is lower than 50 and
 *   should already be filled out by node [49, 50] instead.
 * The only exception to this is if the edge is directed, then both lower and higher node numbers have to be considered.
 *   For example, [1, 2] and [2, 1] are both represented since the edge is directed.
 *
 * This method makes it much easier to validate the nodes since they are always in order.
 */
export const edges = [
  { nodes: [1, 2], weight: 7.58, directed: true },
  { nodes: [1, 9], weight: 5.99 },
  { nodes: [1, 54], weight: 4.17, portal: true },

  // [2, 1] not needed
  { nodes: [2, 9], weight: 4.21, directed: true },
  { nodes: [2, 3], weight: 4.43, directed: true },

  { nodes: [3, 2], weight: 8.32, directed: true },
  {
    nodes: [3, 4],
    weight: 7.43,
    hostile: true,
    chanceOfEncounter: 0.15,
    timeToResolve: 7.5,
  },

  {
    nodes: [4, 5],
    weight: 6.0,
    hostile: true,
    chanceOfEncounter: 0.15,
    timeToResolve: 7.5,
  },

  { nodes: [5, 6], weight: 2.96 },

  { nodes: [6, 7], weight: 4.62 },
  { nodes: [6, 84], weight: 3.43 },

  { nodes: [7, 8], weight: 2.01 },

  { nodes: [9, 2], weight: 9.32, directed: true },
  { nodes: [9, 10], weight: 3.91 },
  { nodes: [9, 14], weight: 4.4 },

  { nodes: [10, 11], weight: 8.05 },
  { nodes: [10, 14], weight: 3.43 },

  { nodes: [11, 12], weight: 7.9 },

  { nodes: [12, 13], weight: 5.83 },
  { nodes: [12, 106], weight: 5.68 },

  { nodes: [13, 106], weight: 7.35 },

  { nodes: [14, 15], weight: 9.84, directed: true },

  { nodes: [15, 14], weight: 5.64, directed: true },
  { nodes: [15, 16], weight: 3.66, directed: true },
  { nodes: [15, 17], weight: 2.83, directed: true },

  { nodes: [16, 15], weight: 10.1, directed: true },
  { nodes: [16, 17], weight: 3.28 },
  { nodes: [16, 72], weight: 4.12 },
  { nodes: [16, 87], weight: 4.25 },

  { nodes: [17, 15], weight: 9.02, directed: true },
  { nodes: [17, 18], weight: 5.01 },
  { nodes: [17, 19], weight: 5.32 },
  { nodes: [17, 72], weight: 6.57 },
  { nodes: [17, 87], weight: 7.39 },

  { nodes: [18, 19], weight: 0.86 },

  { nodes: [19, 20], weight: 6.6 },
  { nodes: [19, 22], weight: 6.52 },
  { nodes: [19, 118], weight: 1.4 },

  { nodes: [20, 21], weight: 2.05 },
  { nodes: [20, 22], weight: 3.2 },
  { nodes: [20, 92], weight: 3.73 },
  { nodes: [20, 118], weight: 6.01 },

  { nodes: [21, 92], weight: 2.18 },

  { nodes: [22, 118], weight: 5.19 },
  {
    nodes: [22, 23],
    weight: 4.13,
    hostile: true,
    chanceOfEncounter: 0.15,
    timeToResolve: 7.5,
  },

  {
    nodes: [23, 24],
    weight: 2.68,
    hostile: true,
    chanceOfEncounter: 0.15,
    timeToResolve: 7.5,
  },

  { nodes: [24, 25], weight: 5.9 },
  { nodes: [24, 27], weight: 7.03 },
  { nodes: [24, 112], weight: 6.31 },

  { nodes: [25, 26], weight: 2.0 },
  { nodes: [25, 27], weight: 2.1 },
  { nodes: [25, 112], weight: 2.04 },

  { nodes: [27, 28], weight: 4.54 },
  { nodes: [27, 112], weight: 2.37 },

  { nodes: [28, 29], weight: 2.39 },
  { nodes: [28, 33], weight: 4.82 },
  { nodes: [28, 94], weight: 8.39 },

  { nodes: [29, 30], weight: 100, detective: 28 },
  { nodes: [29, 94], weight: 7.5 },

  { nodes: [30, 31], weight: 4.77 },
  { nodes: [30, 34], weight: 6.71 },
  { nodes: [30, 104], weight: 5.28 },

  { nodes: [31, 32], weight: 3.08 },
  { nodes: [31, 34], weight: 3.2 },
  { nodes: [31, 104], weight: 2.44 },

  { nodes: [32, 34], weight: 3.71 },
  { nodes: [32, 33], weight: 4.07, detective: 28 },
  { nodes: [32, 104], weight: 2.2 },

  { nodes: [33, 94], weight: 4.27 },

  { nodes: [34, 35], weight: 6.83 },
  { nodes: [34, 37], weight: 4.75 },
  { nodes: [34, 104], weight: 1.4 },

  { nodes: [35, 36], weight: 4.2 },
  { nodes: [35, 37], weight: 5.44 },
  { nodes: [35, 48], weight: 7.69 },
  // { nodes: [35, 93] }, Not needed

  { nodes: [36, 48], weight: 3.92 },
  // { nodes: [36, 93] }, Not needed

  { nodes: [37, 38], weight: 4.91 },
  { nodes: [37, 39], weight: 10.34 },
  { nodes: [37, 94], weight: 6.7 },

  { nodes: [38, 39], weight: 5.89 },
  { nodes: [38, 94], weight: 2.56 },

  { nodes: [39, 40], weight: 5.22 },
  { nodes: [39, 45], weight: 4.27 },
  { nodes: [39, 94], weight: 7.02 },

  { nodes: [40, 41], weight: 6.16 },
  { nodes: [40, 42], weight: 5.21 },
  { nodes: [40, 45], weight: 3.11 },
  { nodes: [40, 90], weight: 6.68 },
  { nodes: [40, 91], weight: 6.49 },
  { nodes: [40, 95], weight: 3.78 },

  { nodes: [41, 42], weight: 5.84 },
  { nodes: [41, 90], weight: 4.02 },
  { nodes: [41, 91], weight: 2.38 },
  { nodes: [41, 95], weight: 4.65 },

  { nodes: [42, 43], weight: 5.42 },
  { nodes: [42, 90], weight: 3.89 },
  { nodes: [42, 91], weight: 8.01 },
  { nodes: [42, 95], weight: 6.75 },

  { nodes: [43, 44], weight: 1.54 },

  { nodes: [45, 46], weight: 3.81 },

  { nodes: [46, 47], weight: 9.78 },

  { nodes: [47, 48], weight: 7.0 },
  { nodes: [47, 49], weight: 10.71 },
  { nodes: [47, 52], weight: 10.39 },

  { nodes: [48, 49], weight: 11.01 },
  { nodes: [48, 52], weight: 10.69 },
  // { nodes: [48, 93] }, Not needed

  // { nodes: [49, 52] }, Not needed
  { nodes: [49, 50], weight: 100, detective: 133 },

  // { nodes: [50, 51] }, Not needed
  { nodes: [50, 56], weight: 6.87 },
  { nodes: [50, 59], weight: 4.4 },
  { nodes: [50, 100], weight: 7.12 },

  { nodes: [51, 52], weight: 4.43, detective: 133 },
  { nodes: [51, 56], weight: 6.34 },
  { nodes: [51, 59], weight: 6.3 },
  { nodes: [51, 100], weight: 7.29 },

  { nodes: [53, 55], weight: 2.56, portal: true },

  { nodes: [55, 56], weight: 3.26 },
  { nodes: [55, 58], weight: 4.69 },
  { nodes: [55, 82], weight: 10.0 },
  { nodes: [55, 96], weight: 10.05 },

  { nodes: [56, 58], weight: 4.92 },
  { nodes: [56, 59], weight: 5.12 },
  { nodes: [56, 82], weight: 9.37 },
  { nodes: [56, 96], weight: 8.78 },
  { nodes: [56, 100], weight: 2.63 },

  { nodes: [57, 58], weight: 1.94 },

  { nodes: [58, 82], weight: 7.69 },
  { nodes: [58, 96], weight: 8.43 },

  { nodes: [59, 60], weight: 4.92 },
  { nodes: [59, 62], weight: 8.77 },
  { nodes: [59, 64], weight: 9.47 },
  { nodes: [59, 97], weight: 8.56 },
  { nodes: [59, 99], weight: 5.46 },
  { nodes: [59, 100], weight: 4.7 },

  { nodes: [60, 61], weight: 2.87 },
  { nodes: [60, 62], weight: 5.6 },
  { nodes: [60, 64], weight: 6.94 },
  { nodes: [60, 95], weight: 6.36 },
  { nodes: [60, 97], weight: 6.56 },
  { nodes: [60, 99], weight: 5.32 },

  { nodes: [61, 95], weight: 4.6 },

  { nodes: [62, 63], weight: 6.62, detective: 83 },

  // { nodes: [63, 65] }, Not needed
  { nodes: [63, 67], weight: 5.06 },
  { nodes: [63, 101], weight: 6.77 },

  { nodes: [64, 65], weight: 100, detective: 83 },
  { nodes: [64, 97], weight: 2.7 },
  { nodes: [64, 99], weight: 6.61 },

  { nodes: [65, 67], weight: 7.6 },
  { nodes: [65, 101], weight: 6.3 },

  { nodes: [66, 101], weight: 1.3 },

  { nodes: [67, 68], weight: 2.65 },
  { nodes: [67, 91], weight: 6.75 },
  { nodes: [67, 101], weight: 4.45 },
  { nodes: [67, 119], weight: 4.33 },

  { nodes: [68, 69], weight: 3.15 },
  { nodes: [68, 70], weight: 8.54 },
  { nodes: [68, 113], weight: 5.65 },
  { nodes: [68, 116], weight: 8.27 },
  { nodes: [68, 119], weight: 4.32 },

  { nodes: [69, 70], weight: 5.42 },
  { nodes: [69, 113], weight: 2.09 },
  { nodes: [69, 116], weight: 4.95 },

  { nodes: [70, 71], weight: 7.32 },
  { nodes: [70, 113], weight: 6.1 },
  { nodes: [70, 116], weight: 2.51 },

  { nodes: [72, 87], weight: 3.83 },
  { nodes: [72, 73], weight: 4.96 },

  { nodes: [73, 74], weight: 5.3 },

  { nodes: [74, 75], weight: 2.65 },
  { nodes: [74, 78], weight: 3.83 },

  { nodes: [75, 76], weight: 3.95 },
  { nodes: [75, 77], weight: 4.55 },
  { nodes: [75, 78], weight: 4.48 },
  { nodes: [75, 105], weight: 8.47, directed: true },

  { nodes: [76, 77], weight: 2.52 },
  { nodes: [76, 105], weight: 5.65, directed: true },

  { nodes: [77, 105], weight: 3.43, directed: true },

  { nodes: [78, 79], weight: 6.15 },

  { nodes: [79, 80], weight: 3.14 },
  { nodes: [79, 117], weight: 5.28 },

  { nodes: [80, 81], weight: 1.23 },
  { nodes: [80, 117], weight: 4.6 },

  { nodes: [82, 83], weight: 1.75 },
  { nodes: [82, 96], weight: 4.61 },

  { nodes: [85, 87], weight: 6.42 },
  { nodes: [85, 88], weight: 1.77 },
  { nodes: [85, 92], weight: 5.26 },

  { nodes: [86, 88], weight: 2.96 },
  { nodes: [86, 89], weight: 4.51 },
  { nodes: [86, 111], weight: 3.1 },

  { nodes: [87, 88], weight: 7.61 },
  { nodes: [87, 92], weight: 3.09 },

  { nodes: [88, 89], weight: 6.85 },
  { nodes: [88, 92], weight: 6.51 },
  { nodes: [88, 111], weight: 4.68 },

  { nodes: [89, 90], weight: 4.92 },
  { nodes: [89, 111], weight: 3.68 },

  { nodes: [90, 91], weight: 5.67 },
  { nodes: [90, 95], weight: 7.59 },

  { nodes: [91, 95], weight: 4.39 },
  { nodes: [91, 119], weight: 3.05 },

  { nodes: [96, 97], weight: 5.35 },
  { nodes: [96, 98], weight: 2.83 },

  { nodes: [97, 98], weight: 4.84 },
  { nodes: [97, 99], weight: 5.63 },

  { nodes: [98, 99], weight: 4.32 },
  { nodes: [98, 100], weight: 5.1 },
  { nodes: [98, 102], weight: 3.14 },
  { nodes: [98, 103], weight: 7.89 },

  { nodes: [99, 100], weight: 4.79 },
  { nodes: [99, 102], weight: 2.87 },
  { nodes: [99, 103], weight: 8.84 },

  { nodes: [100, 102], weight: 1.6 },
  { nodes: [100, 103], weight: 8.23 },

  { nodes: [102, 103], weight: 6.7 },

  { nodes: [105, 75], weight: 5.16, directed: true },
  { nodes: [105, 76], weight: 2.42, directed: true },
  { nodes: [105, 77], weight: 0.1, directed: true },
  {
    nodes: [105, 106],
    weight: 6.34,
    directed: true,
    quest: "BATTLE_OF_FORTUNEHOLD",
  },

  {
    nodes: [106, 105],
    weight: 9.6,
    directed: true,
    quest: "BATTLE_OF_FORTUNEHOLD",
  },

  { nodes: [107, 108], weight: 3.19, detective: 183 },
  // { nodes: [107, 109] }, Not needed
  { nodes: [107, 111], weight: 5.34 },

  // { nodes: [108, 110] }, Not needed
  { nodes: [108, 112], weight: 4.94 },

  { nodes: [109, 110], weight: 2.57, detective: 183 },
  { nodes: [109, 111], weight: 7.85 },

  { nodes: [110, 112], weight: 2.79 },

  { nodes: [113, 114], weight: 2.97, detective: 233 },
  // { nodes: [113, 116] }, Not needed

  // { nodes: [114, 115] }, Not needed
  { nodes: [114, 117], weight: 6.49 },

  { nodes: [115, 116], weight: 6.1, detective: 233 },
  { nodes: [115, 117], weight: 5.42 },
];
