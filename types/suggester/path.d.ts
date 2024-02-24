import { TFile, TextComponent, type BlockCache, type HeadingCache, type CachedMetadata, type App, type FuzzyMatch } from "obsidian";
import { SuggestionModal } from "./suggester";
export declare class PathSuggestionModal extends SuggestionModal<TFile | BlockCache | HeadingCache> {
    getHighlightsForResult(result: FuzzyMatch<TFile | BlockCache | HeadingCache>, titleEl: HTMLElement): void;
    getSuggestionNote(item: TFile | BlockCache | HeadingCache): string | null;
    cache: CachedMetadata | null;
    file: TFile | null;
    constructor(app: App, input: TextComponent, items: TFile[]);
    createPrompts(): void;
    getItemText(item: TFile | HeadingCache | BlockCache): string;
    onChooseItem(item: TFile | HeadingCache | BlockCache): void;
    link: string;
    selectSuggestion({ item }: FuzzyMatch<TFile | BlockCache | HeadingCache>): void;
    renderSuggestion(result: FuzzyMatch<TFile | BlockCache | HeadingCache>, el: HTMLElement): void;
    get headings(): HeadingCache[];
    get blocks(): BlockCache[];
    getItems(): (BlockCache | HeadingCache | TFile)[];
}
//# sourceMappingURL=path.d.ts.map