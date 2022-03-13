import awilix from "awilix";
import values from "../config/index.js";
const inject = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});
inject.register({ PORT: awilix.asValue(values.PORT) });


export default inject;
