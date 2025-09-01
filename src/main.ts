import setupApp from "./app";

import "@klinecharts/pro/dist/klinecharts-pro.css";
import "@/index.scss";

setupApp(document.querySelector<HTMLDivElement>("#app")!);
