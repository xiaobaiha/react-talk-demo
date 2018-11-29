import { FuncWrapper } from "../demos/part1/FuncWrapper";
import { ClassWrapper } from "../demos/part1/ClassWrapper";
import { LifeCircleWrapper } from "../demos/part2/LifeCircleWrapper";
import { UncontrolWrapper } from "../demos/part2/UncontrolWrapper";
import { ControlWrapper } from "../demos/part2/ControlWrapper";
import { MemoWrapper } from "../demos/part3/MemoWrapper";
import { LazyWrapper } from "../demos/part3/LazyWrapper";
import { FragmentWrapper } from "../demos/part3/FragmentWrapper";
import { PortalWrapper } from "../demos/part3/PortalWrapper";

const appRoutes = [
    { path: "/function", component: FuncWrapper },
    { path: "/class", component: ClassWrapper },
    { path: "/lifecircle", component: LifeCircleWrapper},
    { path: "/uncontrol", component: UncontrolWrapper },
    { path: "/control", component: ControlWrapper},
    { path: "/memo", component: MemoWrapper},
    { path: "/lazy", component: LazyWrapper},
    { path: "/fragment", component: FragmentWrapper},
    { path: "/portal", component: PortalWrapper }
];

export default appRoutes;