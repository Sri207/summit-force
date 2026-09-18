export const WASTE_KB = {
  'fly ash': {
    category: 'Ash / Slag',
    application: 'Cement blending & structural fill aggregate for road embankments',
    pct: 70, valuePerTon: 28, co2PerTon: 0.9, rawMatPerTon: 0.75,
    buyers: ['Cement manufacturers', 'Road & highway contractors', 'Brick manufacturers']
  },
  'steel slag': {
    category: 'Metal',
    application: 'Road base aggregate and railway ballast',
    pct: 85, valuePerTon: 22, co2PerTon: 0.6, rawMatPerTon: 0.6,
    buyers: ['Road construction firms', 'Cement manufacturers', 'Steel recyclers']
  },
  'waste plastic': {
    category: 'Plastic / Polymer',
    application: 'Mechanical shredding, washing & pelletizing',
    pct: 78, valuePerTon: 95, co2PerTon: 1.4, rawMatPerTon: 0.7,
    buyers: ['Plastic recyclers', 'Packaging manufacturers', 'Textile producers']
  }
};

export default WASTE_KB;