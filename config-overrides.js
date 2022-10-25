module.exports = function override(config, evn){
    return config;
}
const {
    override,useBabelRc
  } = require("customize-cra");

  
  module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
  );