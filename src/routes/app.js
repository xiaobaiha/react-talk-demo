import { WelcomeFunc } from "../demos/part1/WelcomeFunc";
import { WelcomeClass } from "../demos/part1/WelcomeClass";

const appRoutes = [
    { path: "/function", component: WelcomeFunc },
    { path: "/class", component: WelcomeClass },
    // { path: "/getDerivedStateFromProps", component:  }
];

export default appRoutes;