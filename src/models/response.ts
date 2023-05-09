import { Book } from "./book";

export interface responseGoogleBooksApi {
    items: Book[],
    kind: string,
    totalItems: number
}