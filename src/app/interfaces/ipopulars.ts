import { IMovie } from "./imovie"
import { IPerson } from "./iperson"
import { ITv } from "./itv"

export interface IPopulars {
    page?: number;
    results?: IMovie[] | ITv[] | IPerson[];
    total_results?: number;
    total_pages?: number;
}
