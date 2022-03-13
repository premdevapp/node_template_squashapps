import awilix from "awilix";
import values from "../config/index.js";
const inject = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});
inject.register({ messageSuccess: awilix.asValue(values.messageSuccess) });
inject.register({ messageError: awilix.asValue(values.messageError) });
inject.register({
  mes: awilix.asFunction(function () {
    return "The dependency check : ";
  }),
});
inject.register({
  mesclass: awilix.asClass(class {
   constructor() {
   }
   display() {
    return "The class dependency check : ";
   }
})
});

export default inject;
