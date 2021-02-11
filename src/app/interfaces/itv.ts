import { ICompany } from "./icompany";
import { ICountry } from "./icountry";
import { IGenre } from "./igenre";
import { ILanguage } from "./ilanguage";

export interface ITv {
    backdrop_path?: string | null;
    created_by?: any[];
    episode_run_time?: any[];
    first_air_date?: string;
    genres?: IGenre[];
    homepage?: string | null;
    id?: number;
    in_production: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: string;
    name?: string;
    next_episode_to_air?: null;
    networks?: any[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ICompany[];
    production_countries?: ICountry[];
    seasons?: any[];
    spoken_languages?: ILanguage[];
    status?: string;
    tagline?: string | null;
    type?: string;
    vote_average?: number;
    vote_count?: number;
}
