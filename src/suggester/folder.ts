import { type FuzzyMatch, TFolder, renderMatches } from "obsidian";
import { FuzzyInputSuggest } from "./suggester";

export class FolderInputSuggest extends FuzzyInputSuggest<TFolder> {
    getItemText(item: TFolder): string {
        return item.path;
    }
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<TFolder>): void {
        const { item, match } = result;
        renderMatches(noteEL, item.path, match.matches);
    }
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<TFolder>): void {
        const { item, match } = result;
        renderMatches(
            titleEl,
            item.name,
            match.matches,
            item.path.length - item.name.length
        );
    }
}
