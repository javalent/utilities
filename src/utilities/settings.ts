import { Setting, setIcon } from "obsidian";

export function createCollapsibleSection(
    containerEl: HTMLDivElement,
    name: string,
    open?: boolean,
    ontoggle?: (open: boolean) => any
): HTMLDetailsElement {
    const detailsEl = containerEl.createEl("details", {
        cls: "javalent-nested-settings",
        attr: {
            ...(open ?? true ? { open: `open` } : {})
        }
    });
    detailsEl.ontoggle = async () => {
        ontoggle ? ontoggle(detailsEl.open) : {};
    };

    const summary = detailsEl.createEl("summary");
    new Setting(summary).setHeading().setName(name);

    setIcon(summary.createDiv("handle"), "chevron-right");
    return detailsEl;
}
