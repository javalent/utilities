import { AbstractInputSuggest, type App, type FuzzyMatch, type TextComponent, SearchResult, SearchMatches } from "obsidian";
declare module "obsidian" {
    interface AbstractInputSuggest<T> {
        selectSuggestion(value: T, evt: MouseEvent | KeyboardEvent): void;
    }
}
export declare abstract class FuzzyInputSuggest<T> extends AbstractInputSuggest<FuzzyMatch<T>> {
    items: T[];
    constructor(app: App, input: TextComponent, items: T[]);
    abstract getItemText(item: T): string;
    protected getSuggestions(query: string): {
        item: T;
        match: SearchResult;
    }[];
    abstract renderNote(noteEL: HTMLElement, result: FuzzyMatch<T>): void;
    abstract renderTitle(titleEl: HTMLElement, result: FuzzyMatch<T>): void;
    renderSuggestion(result: FuzzyMatch<T>, el: HTMLElement): void;
    highlightSuggestion(containerEl: HTMLElement, suggestion: string, matches: SearchMatches): void;
}
//# sourceMappingURL=suggester.d.ts.map