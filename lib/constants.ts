export const API_DATOCMS_URL = 'https://graphql.datocms.com';
export const API_DATOCMS_TOKEN = process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN;
export const PAGE_URL = 'https://trenerrafal.pl';
export const API_GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
export const GOOGLE_PLACE_ID = 'ChIJf14O7JLNHkcR-AJhS_VKLCw';
export const URL_GOOGLE_API = 'https://maps.googleapis.com/maps/api';
export const URL_GOOGLE_API_CONTACT_MAP = `${URL_GOOGLE_API}/js?key=${API_GOOGLE_KEY}&callback=initMap`;
export const URL_GOOGLE_API_PLACE_ID = `${URL_GOOGLE_API}/place/details/json?placeid=${GOOGLE_PLACE_ID}&fields=name%2Crating%2Cformatted_phone_number&key=${API_GOOGLE_KEY}`;
