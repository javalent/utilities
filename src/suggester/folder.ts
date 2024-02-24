import { FuzzyMatch, TFolder } from "obsidian";
import { FuzzyInputSuggest } from "./suggester";

export class FolderInputSuggest extends FuzzyInputSuggest<TFolder> {
    getItemText(item: TFolder): string {
        return item.path;
    }
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<TFolder>): void {
        const { item, match } = result;
        this.highlightSuggestion(noteEL, item.path, match.matches);
    }
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<TFolder>): void {
        const { item, match } = result;
        const pathLength = item.path.length - item.name.length;
        const matches = match.matches.filter((m) => m[0] >= pathLength);
        this.highlightSuggestion(titleEl, item.name, matches);
    }
}
