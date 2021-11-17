import { ADD_VUEX_LOGGER } from "@/config";

const plugins = [];

if (process.env.NODE_ENV === "development" && ADD_VUEX_LOGGER) plugins.push(require("./logger").default);

export default plugins;
