import { ICompany } from "./icompany";
import { ICountry } from "./icountry";
import { IGenre } from "./igenre";
import { ILanguage } from "./ilanguage";

export interface IMovie {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: any | null;
    budget?: number;
    genres?: IGenre[];
    homepage?: string | null;
    id?: number;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ICompany[];
    production_countries?: ICountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: ILanguage[];
    status?: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled";
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}
