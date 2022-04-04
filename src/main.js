import Vue from "vue";
import App from "./App.vue";
//import animate
import "animate.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

/* add icons to the library */
library.add(faStar, faMagnifyingGlass);

// flag import
import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
