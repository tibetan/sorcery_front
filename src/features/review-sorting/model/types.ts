export type ReviewSortBy = 'author' | 'date' | 'rating' | null;

export interface ReviewSortingState {
    sortedBy: ReviewSortBy;
}
