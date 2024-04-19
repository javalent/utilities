import { type FuzzyMatch, TFile, renderMatches } from "obsidian";
import { FuzzyInputSuggest } from "./suggester";

export class FileInputSuggest extends FuzzyInputSuggest<TFile> {
    getItemText(item: TFile): string {
        return item.path;
    }
    renderNote(noteEL: HTMLElement, result: FuzzyMatch<TFile>): void {
        const { item, match } = result;
        renderMatches(noteEL, item.path, match.matches);
    }
    renderTitle(titleEl: HTMLElement, result: FuzzyMatch<TFile>): void {
        const { item, match } = result;
        renderMatches(
            titleEl,
            item.name,
            match.matches,
            item.path.length - item.name.length
        );
    }
}
