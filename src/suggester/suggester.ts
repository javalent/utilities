import {
    AbstractInputSuggest,
    prepareSimpleSearch,
    type App,
    type FuzzyMatch,
    type TextComponent
} from "obsidian";

declare module "obsidian" {
    interface AbstractInputSuggest<T> {
        selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
    }
}

export abstract class FuzzyInputSuggest<T> extends AbstractInputSuggest<
    FuzzyMatch<T>
> {
    constructor(app: App, input: TextComponent, public items: T[]) {
        super(app, input.inputEl);
    }
    abstract getItemText(item: T): string;
    protected getSuggestions(query: string) {
        const search = prepareSimpleSearch(query);
        const results = [];
        for (const item of this.items) {
            const match = search(this.getItemText(item));
            if (match) {
                results.push({ item, match });
            }
        }
        return results;
    }

    abstract renderNote(noteEL: HTMLElement, result: FuzzyMatch<T>): void;
    abstract renderTitle(titleEl: HTMLElement, result: FuzzyMatch<T>): void;
    renderSuggestion(result: FuzzyMatch<T>, el: HTMLElement): void {
        el.addClass("mod-complex");
        let content = el.createDiv({
            cls: "suggestion-content"
        });
        if (!result?.item) {
            content.setText("No match found");
            content.parentElement?.addClass("is-selected");
            return;
        }

        let titleEl = content.createDiv("suggestion-title");
        this.renderTitle(titleEl, result);
        let noteEl = content.createDiv("suggestion-note");
        this.renderNote(noteEl, result);
    }
}
