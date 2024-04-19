import { setIcon } from "obsidian";

import styles from "./helpers.module.css";
export function setNodeIcon(node: HTMLElement, icon: string) {
    node.addClass(styles["has-node-icon"]);
    setIcon(node, icon);
}
