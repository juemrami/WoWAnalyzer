/**
 * NAME: {
 *   id: number,
 *   name: string,
 *   icon: string,
 *   quality: number,
 * },
 */
const items = {
  //region Halkias, the Sin-Stained Goliath
  //endregion
  //region Echelon
  PULSATING_STONEHEART: {
    id: 178825,
    name: 'Pulsating Stoneheart',
    icon: 'inv_misc_gem_bloodstone_01',
  },
  //endregion
  //region High Adjucator Aleez
  SUNBLOOD_AMETHYST: {
    id: 178826,
    name: 'Sunblood Amethyst',
    icon: 'inv_jewelcrafting_nightseye_01',
  },
  //endregion
  //region Lord Chamberlain
  //endregion
} as const;
export default items;
