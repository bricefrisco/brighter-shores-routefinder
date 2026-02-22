import { markets } from "./nodes.js";

/**
 * Bounties that can be completed in the game
 * Data is referenced from: https://brightershoreswiki.org/w/Merchant
 *
 * Experience data is referenced from: https://brightershoreswiki.org/w/Merchant_Guild_Bounties_XP_%26_Values
 * Experience scales with level, and the formula is currently unknown.
 * So we are using the maximum values currently reported on the wiki (currently level 484)
 */
export const bounties = {
  CARROTS: {
    name: "Carrots",
    level: 0,
    exp: 191337,
    seller: markets.GREENGROCERS,
    buyer: markets.TOY_STALL,
  },
  SOAP: {
    name: "Soap",
    level: 0,
    exp: 186664,
    seller: markets.SOAP_SHOP,
    buyer: markets.BUTCHERS_STALL,
  },
  RIBS: {
    name: "Ribs",
    level: 5,
    exp: 137939,
    seller: markets.BUTCHERS_STALL,
    buyer: markets.SOUVENIR_STALL,
  },
  BEEF_JOINT: {
    name: "Beef Joint",
    level: 11,
    exp: 116218,
    seller: markets.HENDERSONS_MEAT,
    buyer: markets.HALLIGS_STREET_FOOD,
  },
  CLOCKWORK_SHEEP: {
    name: "Clockwork Sheep",
    level: 16,
    exp: 134843,
    seller: markets.PENNYS_CLOCKWORK,
    buyer: markets.CLOCK_STALL,
  },
  MEAT_WRAP: {
    name: "Meat Wrap",
    level: 22,
    exp: 138597,
    seller: markets.HALLIGS_STREET_FOOD,
    buyer: markets.CHEESE_SHOP,
  },
  PORCELAIN_DOLL: {
    name: "Porcelain Doll",
    level: 27,
    exp: 168444,
    seller: markets.TOY_STALL,
    buyer: markets.FORTUNEHOLD_FARM,
  },
  PLATES: {
    name: "Plates",
    level: 33,
    exp: 174865,
    seller: markets.HERMARS_HOMEWARE,
    buyer: markets.JENNALERS_WINES,
  },
  PIN_BADGE: {
    name: "Pin Badge",
    level: 38,
    exp: 134590,
    seller: markets.SOUVENIR_STALL,
    buyer: markets.VICTOR_T_CYCLOPS,
  },
  PUMPKIN: {
    name: "Pumpkin",
    level: 50,
    exp: 3574,
    seller: markets.FORTUNEHOLD_FARM,
    buyer: markets.VASE_STALL,
  },
  PIZZA: {
    name: "Pizza",
    level: 58,
    exp: 3804,
    seller: markets.CHEF,
    buyer: markets.FRANCESCAS_FRUIT_STALL,
  },
  BANANAS: {
    name: "Bananas",
    level: 66,
    exp: 3860,
    seller: markets.FRANCESCAS_FRUIT_STALL,
    buyer: markets.PENNYS_CLOCKWORK,
  },
  TIN_POCKET_WATCH: {
    name: "Tin Pocket Watch",
    level: 75,
    exp: 4220,
    seller: markets.SNILCHS_WATCHES,
    buyer: markets.BOGGS_ANTIQUES,
  },
  HOMESPUN_CLOTH: {
    name: "Homespun Cloth",
    level: 83,
    exp: 3030,
    seller: markets.TEXTILES_STALL,
    buyer: markets.CLOCK_STALL,
  },
  RAINBOW_CHEESE: {
    name: "Rainbow Cheese",
    level: 91,
    exp: 2852,
    seller: markets.CHEESE_SHOP,
    buyer: markets.HENDERSONS_MEAT,
  },
  ARGANIAN_WINE: {
    name: "Arganian Wine",
    level: 100,
    exp: 3796,
    seller: markets.JENNALERS_WINES,
    buyer: markets.VASE_STALL,
  },
  OAK_PATTERNED_VASE: {
    name: "Oak Patterned Vase",
    level: 108,
    exp: 2874,
    seller: markets.VASE_STALL,
    buyer: markets.HENDERSONS_MEAT,
  },
  SCENTED_CANDLE: {
    name: "Scented Candle",
    level: 116,
    exp: 3551,
    seller: markets.CANDICES_CANDLES,
    buyer: markets.SOAP_SHOP,
  },
  UNICORN_DUST: {
    exp: 3298,
    level: 125,
    name: "Unicorn Dust",
    seller: markets.VICTOR_T_CYCLOPS,
    buyer: markets.JANESSAS_DELICACIES,
  },
  LANDSCAPE_PAINTING: {
    exp: 3228,
    level: 133,
    name: "Landscape Painting",
    seller: markets.BERTS_GALLERY,
    buyer: markets.TOMMY_SHOES_WINES,
  },
  CARRIAGE_CLOCK: {
    level: 141,
    name: "Carriage Clock",
    seller: markets.CLOCK_STALL,
    buyer: markets.PENNYS_CLOCKWORK,
  },
  SPECTACLES: {
    level: 150,
    name: "Spectacles",
    seller: markets.MONOCLE_MARKET,
    buyer: markets.CANDICES_CANDLES,
  },
  SHARPSEED_WINE: {
    level: 158,
    name: "Sharpseed Wine",
    seller: markets.TOMMY_SHOES_WINES,
    buyer: markets.JANESSAS_DELICACIES,
  },
  RUG: {
    level: 166,
    name: "Rug",
    seller: markets.BOGGS_ANTIQUES,
    buyer: markets.HERMARS_HOMEWARE,
  },
  CAVIAR: {
    level: 175,
    name: "Caviar",
    seller: markets.JANESSAS_DELICACIES,
    buyer: markets.BOGGS_ANTIQUES,
  },
  RED_CABBAGE: {
    level: 183,
    name: "Red Cabbage",
    seller: markets.CABBAGE_STALL,
    buyer: markets.PEARL_STALL,
  },
  IVORY_SWIRL_PEARL: {
    level: 191,
    name: "Ivory Swirl Pearl",
    seller: markets.PEARL_STALL,
    buyer: markets.CABBAGE_STALL,
  },
  BATH_SALTS: {
    level: 200,
    name: "Bath Salts",
    seller: markets.SOAP_SHOP,
    buyer: markets.MONOCLE_MARKET,
  },
  TOMATOES: {
    level: 210,
    name: "Tomatoes",
    seller: markets.GREENGROCERS,
    buyer: markets.CHEF,
  },
  STEAK: {
    level: 220,
    name: "Steak",
    seller: markets.BUTCHERS_STALL,
    buyer: markets.HALLIGS_STREET_FOOD,
  },
  BURGER: {
    level: 230,
    name: "Burger",
    seller: markets.HALLIGS_STREET_FOOD,
    buyer: markets.JENNALERS_WINES,
  },
  HAM_LEG: {
    level: 240,
    name: "Ham Leg",
    seller: markets.HENDERSONS_MEAT,
    buyer: markets.TOY_STALL,
  },
  CLOCKWORK_DRAGON: {
    level: 250,
    name: "Clockwork Dragon",
    seller: markets.PENNYS_CLOCKWORK,
    buyer: markets.CHEESE_SHOP,
  },
  SNOW_GLOBE: {
    level: 260,
    name: "Snow Globe",
    seller: markets.TOY_STALL,
    buyer: markets.TOMMY_SHOES_WINES,
  },
  CUPS: {
    level: 270,
    name: "Cups",
    seller: markets.HERMARS_HOMEWARE,
    buyer: markets.SOUVENIR_STALL,
  },
  POSTCARDS: {
    level: 280,
    name: "Postcards",
    seller: markets.SOUVENIR_STALL,
    buyer: markets.TEXTILES_STALL,
  },
  RHUBARB: {
    level: 290,
    name: "Rhubarb",
    seller: markets.FORTUNEHOLD_FARM,
    buyer: markets.SOAP_SHOP,
  },
  CURRY: {
    level: 300,
    name: "Curry",
    seller: markets.CHEF,
    buyer: markets.SNILCHS_WATCHES,
  },
  ORANGES: {
    level: 310,
    name: "Oranges",
    seller: markets.FRANCESCAS_FRUIT_STALL,
    buyer: markets.TEXTILES_STALL,
  },
  PRECISE_POCKET_WATCH: {
    level: 320,
    name: "Precise Pocket Watch",
    seller: markets.SNILCHS_WATCHES,
    buyer: markets.GREENGROCERS,
  },
  SILK: {
    level: 330,
    name: "Silk",
    seller: markets.TEXTILES_STALL,
    buyer: markets.HERMARS_HOMEWARE,
  },
  OLD_RARG: {
    level: 340,
    name: "Old Rarg",
    seller: markets.CHEESE_SHOP,
    buyer: markets.CHEF,
  },
  FARGUST_WINE: {
    level: 350,
    name: "Fargust Wine",
    seller: markets.JENNALERS_WINES,
    buyer: markets.BERTS_GALLERY,
  },
  STRIPED_VASE: {
    level: 362,
    name: "Striped Vase",
    seller: markets.VASE_STALL,
    buyer: markets.BERTS_GALLERY,
  },
  TEA_LIGHTS: {
    level: 375,
    name: "Tea Lights",
    seller: markets.CANDICES_CANDLES,
    buyer: markets.FORTUNEHOLD_FARM,
  },
  UNICORN_HAIR: {
    level: 387,
    name: "Unicorn Hair",
    seller: markets.VICTOR_T_CYCLOPS,
    buyer: markets.SNILCHS_WATCHES,
  },
  PORTRAIT_PAINTING: {
    level: 400,
    name: "Portrait Painting",
    seller: markets.BERTS_GALLERY,
    buyer: markets.CANDICES_CANDLES,
  },
  PENDULUM_CLOCK: {
    level: 412,
    name: "Pendulum Clock",
    seller: markets.CLOCK_STALL,
    buyer: markets.FRANCESCAS_FRUIT_STALL,
  },
  MONOCLE: {
    level: 425,
    name: "Monocle",
    seller: markets.MONOCLE_MARKET,
    buyer: markets.VICTOR_T_CYCLOPS,
  },
  TOPHILL_WINE: {
    level: 437,
    name: "Tophill Wine",
    seller: markets.TOMMY_SHOES_WINES,
    buyer: markets.GREENGROCERS,
  },
  ANTIQUE_BOOK: {
    level: 450,
    name: "Antique Book",
    seller: markets.BOGGS_ANTIQUES,
    buyer: markets.BUTCHERS_STALL,
  },
  TRUFFLES: {
    level: 462,
    name: "Truffles",
    seller: markets.JANESSAS_DELICACIES,
    buyer: markets.MONOCLE_MARKET,
  },
  NAPA_CABBAGE: {
    level: 475,
    name: "Napa Cabbage",
    seller: markets.CABBAGE_STALL,
    buyer: markets.PEARL_STALL,
  },
  BLUE_DAZZLING_PEARL: {
    level: 487,
    name: "Blue Dazzling Pearl",
    seller: markets.PEARL_STALL,
    buyer: markets.CABBAGE_STALL,
  },
};

/**
 * The status of a bounty
 *
 * NOT_STARTED: The item still needs to be purchased
 * IN_PROGRESS: The item has been purchased but not yet sold
 * COMPLETED: The item has been purchased
 */
export const BountyStatus = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
};
