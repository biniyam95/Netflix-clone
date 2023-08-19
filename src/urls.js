import { API_KEY } from "./constants/constants"

export const TrendingUrl=`trending/all/week?api_key=${API_KEY}&language=en-US`
export const OriginalsUrl=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const ActionUrl=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const HorrorUrl=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const RomanceUrl=`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const ComedyUrl=`discover/movie?api_key=${API_KEY}&with_genres=35`

