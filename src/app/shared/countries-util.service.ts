import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesUtilService {
  alpha_2_country_codes = Alpha_2_Codes;
  constructor() { }

  getAlpha2Codes() {
    return this.alpha_2_country_codes;
  }
}

export enum Alpha_2_Codes {
  'Andorra' = 'ad',
  'Anguilla' = 'ai',
  'Aland Islands' = 'ax',
  'Antarctica' = 'aq',
  'Antigua and Barbuda' = 'ag',
  'Belize' = 'bz',
  'British-Virgin-Islands' = 'vg',
  'Caribbean-Netherlands' = 'bq',
  'Saint-Pierre-Miquelon' = 'pm',
  'St-Barth' = 'bl',
  'Western-Sahara' = 'eh',
  'Montserrat' = 'ms',
  'Papua-New-Guinea' = 'pg',
  'Vatican-City' = 'va',
  'Greenland' = 'gl',
  'Falkland-Islands' = 'fk',
  'Saint-Kitts-and-Nevis' = 'kn',
  'US-Virgin-Islands' = 'vi',
  'Dominica' = 'dm',
  'Fiji' = 'fj',
  'Laos' = 'la',
  'New-Caledonia' = 'nc',
  'Saint-Lucia' = 'lc',
  'Cura&ccedil;ao' = 'cw',
  'Grenada' = 'gd',
  'Timor-Leste' = 'tl',
  'St-Vincent-Grenadines' = 'vc',
  'Guam' = 'gu',
  'Puerto-Rico' = 'pr',
  'Saint-Martin' = 'mf',
  'Macao' = 'mo',
  'Turks-and-Caicos' = 'tc',
  'Gambia' = 'gm',
  'French-Polynesia' = 'pf',
  'Antigua-and-Barbuda' = 'ag',
  'Sint-Maarten' = 'sx',
  'Lesotho' = 'ls',
  'Bhutan' = 'bt',
  'Seychelles' = 'sc',
  'Liechtenstein' = 'li',
  'Barbados' = 'bb',
  'Bahamas' = 'bs',
  'Aruba' = 'aw',
  'Monaco' = 'mc',
  'Trinidad-and-Tobago' = 'tt',
  'Brunei' = 'bn',
  'Cambodia' = 'kh',
  'Bermuda' = 'bm',
  'Gibraltar' = 'gi',
  'Guadeloupe' = 'gp',
  'Faeroe-Islands' = 'fo',
  'Burundi' = 'bi',
  'Cayman-Islands' = 'ky',
  'Eritrea' = 'er',
  'Mongolia' = 'mn',
  'Martinique' = 'mq',
  'Guyana' = 'gy',
  'Botswana' = 'bw',
  'Bouvet Island' = 'bv',
  'Comoros' = 'km',
  'Myanmar' = 'mm',
  'Isle-of-Man' = 'im',
  'Mauritius' = 'mu',
  'Angola' = 'ao',
  'Vietnam' = 'vn',
  'Syria' = 'sy',
  'Taiwan' = 'tw',
  'Namibia' = 'na',
  'Tanzania' = 'tz',
  'Suriname' = 'sr',
  'Malta' = 'mt',
  'Togo' = 'tg',
  'San-Marino' = 'sm',
  'Zimbabwe' = 'zw',
  'Sao-Tome-and-Principe' = 'st',
  'Jamaica' = 'jm',
  'Montenegro' = 'me',
  'Chad' = 'td',
  'Liberia' = 'lr',
  'Georgia' = 'ge',
  'Uganda' = 'ug',
  'Uruguay' = 'uy',
  'Mozambique' = 'mz',
  'Eswatini' = 'sz',
  'Burkina-Faso' = 'bf',
  'Cyprus' = 'cy',
  'Libya' = 'ly',
  'Niger' = 'ne',
  'Rwanda' = 'rw',
  'Latvia' = 'lv',
  'Jordan' = 'jo',
  'Tunisia' = 'tn',
  'Benin' = 'bj',
  'Yemen' = 'ye',
  'Hong-Kong' = 'hk',
  'Cabo-Verde' = 'cv',
  'New-Zealand' = 'nz',
  'Sierra-Leone' = 'sl',
  'Congo' = 'cg',
  'Zambia' = 'zm',
  'Slovenia' = 'si',
  'Malawi' = 'mw',
  'Slovakia' = 'sk',
  'Guinea-Bissau' = 'gw',
  'Lithuania' = 'lt',
  'Iceland' = 'is',
  'Lebanon' = 'lb',
  'Estonia' = 'ee',
  'South-Sudan' = 'ss',
  'Sri-Lanka' = 'lk',
  'Mali' = 'ml',
  'Cuba' = 'cu',
  'Paraguay' = 'py',
  'Maldives' = 'mv',
  'Nicaragua' = 'ni',
  'Mayotte' = 'yt',
  'Albania' = 'al',
  'Somalia' = 'so',
  'Equatorial-Guinea' = 'gq',
  'Thailand' = 'th',
  'Croatia' = 'hr',
  'Madagascar' = 'mg',
  'Greece' = 'gr',
  'CAR' = 'cf',
  'Hungary' = 'hu',
  'Luxembourg' = 'lu',
  'Djibouti' = 'dj',
  'Mauritania' = 'mr',
  'French-Guiana' = 'gf',
  'Costa-Rica' = 'cr',
  'Bosnia-and-Herzegovina' = 'ba',
  'Guinea' = 'gn',
  'Gabon' = 'ga',
  'Bonaire' = 'bq',
  'Saint Eustatius' = 'bq',
  'Saba' = 'bq',
  'Bulgaria' = 'bg',
  'Burkina Faso' = 'bf',
  'Ethiopia' = 'et',
  'Tajikistan' = 'tj',
  'Haiti' = 'ht',
  'North-Macedonia' = 'mk',
  'Venezuela' = 've',
  'Finland' = 'fi',
  'Senegal' = 'sn',
  'DRC' = 'cd',
  'Kyrgyzstan' = 'kg',
  'El-Salvador' = 'sv',
  'Kenya' = 'ke',
  'Australia' = 'au',
  'Malaysia' = 'my',
  'Norway' = 'no',
  'Sudan' = 'sd',
  'Uzbekistan' = 'uz',
  'Cameroon' = 'cm',
  'Denmark' = 'dk',
  'S-Korea' = 'kr',
  'Morocco' = 'ma',
  'Algeria' = 'dz',
  'American Samoa' = 'as',
  'Nepal' = 'np',
  'Serbia' = 'rs',
  'Moldova' = 'md',
  'Austria' = 'at',
  'Japan' = 'jp',
  'Ghana' = 'gh',
  'Azerbaijan' = 'az',
  'Guatemala' = 'gt',
  'Honduras' = 'hn',
  'Ireland' = 'ie',
  'Nigeria' = 'ng',
  'Armenia' = 'am',
  'Romania' = 'ro',
  'Bahrain' = 'bh',
  'Israel' = 'il',
  'Switzerland' = 'ch',
  'Afghanistan' = 'af',
  'Poland' = 'pl',
  'Dominican-Republic' = 'do',
  'Panama' = 'pa',
  'Bolivia' = 'bo',
  'Portugal' = 'pt',
  'Singapore' = 'sg',
  'Philippines' = 'ph',
  'Oman' = 'om',
  'Kazakhstan' = 'kz',
  'Ukraine' = 'ua',
  'Kuwait' = 'kw',
  'Netherlands' = 'nl',
  'UAE' = 'ae',
  'Ecuador' = 'ec',
  'Belgium' = 'be',
  'Iraq' = 'iq',
  'Belarus' = 'by',
  'Indonesia' = 'id',
  'Sweden' = 'se',
  'Egypt' = 'eg',
  'Argentina' = 'ar',
  'China' = 'cn',
  'Qatar' = 'qa',
  'Canada' = 'ca',
  'Colombia' = 'co',
  'Bangladesh' = 'bd',
  'France' = 'fr',
  'South-Africa' = 'za',
  'Germany' = 'de',
  'Turkey' = 'tr',
  'Saudi-Arabia' = 'sa',
  'Pakistan' = 'pk',
  'Italy' = 'it',
  'Iran' = 'ir',
  'Mexico' = 'mx',
  'UK' = 'gb',
  'Spain' = 'es',
  'Chile' = 'cl',
  'Peru' = 'pe',
  'Russia' = 'ru',
  'India' = 'in',
  'Brazil' = 'br',
  'British Indian Ocean Territory' = 'io',
  'Czechia' = 'cz',
  'Palestine' = 'ps',
  'Ivory-Coast' = 'ci',
  'USA' = 'us',
  'Diamond-Princess-' = '',
  'Diamond-Princess' = '',
  'MS-Zaandam' = '',
  'R&eacute;union' = '',
  'Channel-Islands' = '',
  'Oceania' = '',
  'Africa' = '',
  'Asia' = '',
  'Europe' = '',
  'North-America' = '',
  'South-America' = '',
  'All' = ''
}
