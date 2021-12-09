# tzdt

Simple Date wrapper with timezone

## Install

```sh
npm install tzdt
```

## Usage

```ts
import { TzDate } from 'tzdt'

const utc = new TzDate('2020-12-31T15:30:20Z')
console.log(utc.getFullYear()) //2020
console.log(utc.toISOString()) //'2020-12-31T15:30:20.000Z'

const jst = new TzDate(utc, 'Asia/Tokyo')
console.log(jst.getFullYear()) //2021
console.log(jst.toISOString()) //'2021-01-01T00:30:20.000+09:00'
```

## Constructor patterns

```ts
import { TzDate } from 'tzdt'

const date = new Date()

const utc1 = new TzDate()
const utc2 = new TzDate('UTC')
const utc3 = new TzDate(date)
const utc4 = new TzDate(date, 'UTC')
const utc5 = new TzDate(date, 0)
const utc6 = new TzDate(utc1)
const utc7 = new TzDate(utc1, 'UTC')
const utc8 = new TzDate(utc1, 0)
const utc9 = new TzDate('2021-01-01T00:00:00Z')
const utc10 = new TzDate('2021-01-01T00:00:00Z', 'UTC')
const utc11 = new TzDate('2021-01-01T00:00:00Z', 0)
const utc12 = new TzDate(1600000000000, 'UTC')

const jst1 = new TzDate('Asia/Tokyo')
const jst2 = new TzDate(date, 'Asia/Tokyo')
const jst3 = new TzDate(date, 540)
const jst4 = new TzDate(utc1, 'Asia/Tokyo')
const jst5 = new TzDate(utc1, 540)
const jst6 = new TzDate('2021-01-01T00:00:00Z', 'Asia/Tokyo')
const jst7 = new TzDate('2021-01-01T00:00:00Z', 540)
const jst8 = new TzDate(1600000000000, 540)
```

## Available timezones

|Timezone|Offset minutes|
|:--|--:|
|UTC|0|
|Africa/Abidjan|0|
|Africa/Accra|0|
|Africa/Addis_Ababa|180|
|Africa/Algiers|60|
|Africa/Asmara|180|
|Africa/Bamako|0|
|Africa/Bangui|60|
|Africa/Banjul|0|
|Africa/Bissau|0|
|Africa/Blantyre|120|
|Africa/Brazzaville|60|
|Africa/Bujumbura|120|
|Africa/Cairo|120|
|Africa/Casablanca|60|
|Africa/Ceuta|60|
|Africa/Conakry|0|
|Africa/Dakar|0|
|Africa/Dar_es_Salaam|180|
|Africa/Djibouti|180|
|Africa/Douala|60|
|Africa/El_Aaiun|60|
|Africa/Freetown|0|
|Africa/Gaborone|120|
|Africa/Harare|120|
|Africa/Johannesburg|120|
|Africa/Juba|120|
|Africa/Kampala|180|
|Africa/Khartoum|120|
|Africa/Kigali|120|
|Africa/Kinshasa|60|
|Africa/Lagos|60|
|Africa/Libreville|60|
|Africa/Lome|0|
|Africa/Luanda|60|
|Africa/Lubumbashi|120|
|Africa/Lusaka|120|
|Africa/Malabo|60|
|Africa/Maputo|120|
|Africa/Maseru|120|
|Africa/Mbabane|120|
|Africa/Mogadishu|180|
|Africa/Monrovia|0|
|Africa/Nairobi|180|
|Africa/Ndjamena|60|
|Africa/Niamey|60|
|Africa/Nouakchott|0|
|Africa/Ouagadougou|0|
|Africa/Porto-Novo|60|
|Africa/Sao_Tome|0|
|Africa/Tripoli|120|
|Africa/Tunis|60|
|Africa/Windhoek|120|
|America/Adak|-600|
|America/Anchorage|-540|
|America/Anguilla|-240|
|America/Antigua|-240|
|America/Araguaina|-180|
|America/Argentina/Buenos_Aires|-180|
|America/Argentina/Catamarca|-180|
|America/Argentina/Cordoba|-180|
|America/Argentina/Jujuy|-180|
|America/Argentina/La_Rioja|-180|
|America/Argentina/Mendoza|-180|
|America/Argentina/Rio_Gallegos|-180|
|America/Argentina/Salta|-180|
|America/Argentina/San_Juan|-180|
|America/Argentina/San_Luis|-180|
|America/Argentina/Tucuman|-180|
|America/Argentina/Ushuaia|-180|
|America/Aruba|-240|
|America/Asuncion|-240|
|America/Atikokan|-300|
|America/Bahia|-180|
|America/Bahia_Banderas|-360|
|America/Barbados|-240|
|America/Belem|-180|
|America/Belize|-360|
|America/Blanc-Sablon|-240|
|America/Boa_Vista|-240|
|America/Bogota|-300|
|America/Boise|-420|
|America/Cambridge_Bay|-420|
|America/Campo_Grande|-240|
|America/Cancun|-300|
|America/Caracas|-240|
|America/Cayenne|-180|
|America/Cayman|-300|
|America/Chicago|-360|
|America/Chihuahua|-420|
|America/Costa_Rica|-360|
|America/Creston|-420|
|America/Cuiaba|-240|
|America/Curacao|-240|
|America/Danmarkshavn|0|
|America/Dawson|-420|
|America/Dawson_Creek|-420|
|America/Denver|-420|
|America/Detroit|-300|
|America/Dominica|-240|
|America/Edmonton|-420|
|America/Eirunepe|-300|
|America/El_Salvador|-360|
|America/Fort_Nelson|-420|
|America/Fortaleza|-180|
|America/Glace_Bay|-240|
|America/Goose_Bay|-240|
|America/Grand_Turk|-300|
|America/Grenada|-240|
|America/Guadeloupe|-240|
|America/Guatemala|-360|
|America/Guayaquil|-300|
|America/Guyana|-240|
|America/Halifax|-240|
|America/Havana|-300|
|America/Hermosillo|-420|
|America/Indiana/Indianapolis|-300|
|America/Indiana/Knox|-360|
|America/Indiana/Marengo|-300|
|America/Indiana/Petersburg|-300|
|America/Indiana/Tell_City|-360|
|America/Indiana/Vevay|-300|
|America/Indiana/Vincennes|-300|
|America/Indiana/Winamac|-300|
|America/Inuvik|-420|
|America/Iqaluit|-300|
|America/Jamaica|-300|
|America/Juneau|-540|
|America/Kentucky/Louisville|-300|
|America/Kentucky/Monticello|-300|
|America/Kralendijk|-240|
|America/La_Paz|-240|
|America/Lima|-300|
|America/Los_Angeles|-480|
|America/Lower_Princes|-240|
|America/Maceio|-180|
|America/Managua|-360|
|America/Manaus|-240|
|America/Marigot|-240|
|America/Martinique|-240|
|America/Matamoros|-360|
|America/Mazatlan|-420|
|America/Menominee|-360|
|America/Merida|-360|
|America/Metlakatla|-540|
|America/Mexico_City|-360|
|America/Miquelon|-180|
|America/Moncton|-240|
|America/Monterrey|-360|
|America/Montevideo|-180|
|America/Montserrat|-240|
|America/Nassau|-300|
|America/New_York|-300|
|America/Nipigon|-300|
|America/Nome|-540|
|America/Noronha|-120|
|America/North_Dakota/Beulah|-360|
|America/North_Dakota/Center|-360|
|America/North_Dakota/New_Salem|-360|
|America/Nuuk|-180|
|America/Ojinaga|-420|
|America/Panama|-300|
|America/Pangnirtung|-300|
|America/Paramaribo|-180|
|America/Phoenix|-420|
|America/Port-au-Prince|-300|
|America/Port_of_Spain|-240|
|America/Porto_Velho|-240|
|America/Puerto_Rico|-240|
|America/Punta_Arenas|-180|
|America/Rainy_River|-360|
|America/Rankin_Inlet|-360|
|America/Recife|-180|
|America/Regina|-360|
|America/Resolute|-360|
|America/Rio_Branco|-300|
|America/Santarem|-180|
|America/Santiago|-240|
|America/Santo_Domingo|-240|
|America/Sao_Paulo|-180|
|America/Scoresbysund|-60|
|America/Sitka|-540|
|America/St_Barthelemy|-240|
|America/St_Johns|-150|
|America/St_Kitts|-240|
|America/St_Lucia|-240|
|America/St_Thomas|-240|
|America/St_Vincent|-240|
|America/Swift_Current|-360|
|America/Tegucigalpa|-360|
|America/Thule|-240|
|America/Thunder_Bay|-300|
|America/Tijuana|-480|
|America/Toronto|-300|
|America/Tortola|-240|
|America/Vancouver|-480|
|America/Whitehorse|-420|
|America/Winnipeg|-360|
|America/Yakutat|-540|
|America/Yellowknife|-420|
|Antarctica/Casey|660|
|Antarctica/Davis|420|
|Antarctica/DumontDUrville|600|
|Antarctica/Macquarie|600|
|Antarctica/Mawson|300|
|Antarctica/McMurdo|720|
|Antarctica/Palmer|-180|
|Antarctica/Rothera|-180|
|Antarctica/Syowa|180|
|Antarctica/Troll|0|
|Antarctica/Vostok|360|
|Arctic/Longyearbyen|60|
|Asia/Aden|180|
|Asia/Almaty|360|
|Asia/Amman|120|
|Asia/Anadyr|720|
|Asia/Aqtau|300|
|Asia/Aqtobe|300|
|Asia/Ashgabat|300|
|Asia/Atyrau|300|
|Asia/Baghdad|180|
|Asia/Bahrain|180|
|Asia/Baku|240|
|Asia/Bangkok|420|
|Asia/Barnaul|420|
|Asia/Beirut|120|
|Asia/Bishkek|360|
|Asia/Brunei|480|
|Asia/Chita|540|
|Asia/Choibalsan|480|
|Asia/Colombo|330|
|Asia/Damascus|120|
|Asia/Dhaka|360|
|Asia/Dili|540|
|Asia/Dubai|240|
|Asia/Dushanbe|300|
|Asia/Famagusta|120|
|Asia/Gaza|120|
|Asia/Hebron|120|
|Asia/Ho_Chi_Minh|420|
|Asia/Hong_Kong|480|
|Asia/Hovd|420|
|Asia/Irkutsk|480|
|Asia/Istanbul|180|
|Asia/Jakarta|420|
|Asia/Jayapura|540|
|Asia/Jerusalem|120|
|Asia/Kabul|270|
|Asia/Kamchatka|720|
|Asia/Karachi|300|
|Asia/Kathmandu|345|
|Asia/Khandyga|540|
|Asia/Kolkata|330|
|Asia/Krasnoyarsk|420|
|Asia/Kuala_Lumpur|480|
|Asia/Kuching|480|
|Asia/Kuwait|180|
|Asia/Macau|480|
|Asia/Magadan|660|
|Asia/Makassar|480|
|Asia/Manila|480|
|Asia/Muscat|240|
|Asia/Nicosia|120|
|Asia/Novokuznetsk|420|
|Asia/Novosibirsk|420|
|Asia/Omsk|360|
|Asia/Oral|300|
|Asia/Phnom_Penh|420|
|Asia/Pontianak|420|
|Asia/Pyongyang|540|
|Asia/Qatar|180|
|Asia/Qostanay|360|
|Asia/Qyzylorda|300|
|Asia/Riyadh|180|
|Asia/Sakhalin|660|
|Asia/Samarkand|300|
|Asia/Seoul|540|
|Asia/Shanghai|480|
|Asia/Singapore|480|
|Asia/Srednekolymsk|660|
|Asia/Taipei|480|
|Asia/Tashkent|300|
|Asia/Tbilisi|240|
|Asia/Tehran|210|
|Asia/Thimphu|360|
|Asia/Tokyo|540|
|Asia/Tomsk|420|
|Asia/Ulaanbaatar|480|
|Asia/Urumqi|360|
|Asia/Ust-Nera|600|
|Asia/Vientiane|420|
|Asia/Vladivostok|600|
|Asia/Yakutsk|540|
|Asia/Yangon|390|
|Asia/Yekaterinburg|300|
|Asia/Yerevan|240|
|Atlantic/Azores|-60|
|Atlantic/Bermuda|-240|
|Atlantic/Canary|0|
|Atlantic/Cape_Verde|-60|
|Atlantic/Faroe|0|
|Atlantic/Madeira|0|
|Atlantic/Reykjavik|0|
|Atlantic/South_Georgia|-120|
|Atlantic/St_Helena|0|
|Atlantic/Stanley|-180|
|Australia/Adelaide|570|
|Australia/Brisbane|600|
|Australia/Broken_Hill|570|
|Australia/Darwin|570|
|Australia/Eucla|525|
|Australia/Hobart|600|
|Australia/Lindeman|600|
|Australia/Lord_Howe|630|
|Australia/Melbourne|600|
|Australia/Perth|480|
|Australia/Sydney|600|
|Etc/GMT|0|
|Etc/GMT+0|0|
|Etc/GMT+1|-60|
|Etc/GMT+10|-600|
|Etc/GMT+11|-660|
|Etc/GMT+12|-720|
|Etc/GMT+2|-120|
|Etc/GMT+3|-180|
|Etc/GMT+4|-240|
|Etc/GMT+5|-300|
|Etc/GMT+6|-360|
|Etc/GMT+7|-420|
|Etc/GMT+8|-480|
|Etc/GMT+9|-540|
|Etc/GMT-0|0|
|Etc/GMT-1|60|
|Etc/GMT-10|600|
|Etc/GMT-11|660|
|Etc/GMT-12|720|
|Etc/GMT-13|780|
|Etc/GMT-14|840|
|Etc/GMT-2|120|
|Etc/GMT-3|180|
|Etc/GMT-4|240|
|Etc/GMT-5|300|
|Etc/GMT-6|360|
|Etc/GMT-7|420|
|Etc/GMT-8|480|
|Etc/GMT-9|540|
|Etc/GMT0|0|
|Etc/UTC|0|
|Europe/Amsterdam|60|
|Europe/Andorra|60|
|Europe/Astrakhan|240|
|Europe/Athens|120|
|Europe/Belgrade|60|
|Europe/Berlin|60|
|Europe/Bratislava|60|
|Europe/Brussels|60|
|Europe/Bucharest|120|
|Europe/Budapest|60|
|Europe/Busingen|60|
|Europe/Chisinau|120|
|Europe/Copenhagen|60|
|Europe/Dublin|60|
|Europe/Gibraltar|60|
|Europe/Guernsey|0|
|Europe/Helsinki|120|
|Europe/Isle_of_Man|0|
|Europe/Istanbul|180|
|Europe/Jersey|0|
|Europe/Kaliningrad|120|
|Europe/Kiev|120|
|Europe/Kirov|180|
|Europe/Lisbon|0|
|Europe/Ljubljana|60|
|Europe/London|0|
|Europe/Luxembourg|60|
|Europe/Madrid|60|
|Europe/Malta|60|
|Europe/Mariehamn|120|
|Europe/Minsk|180|
|Europe/Monaco|60|
|Europe/Moscow|180|
|Europe/Nicosia|120|
|Europe/Oslo|60|
|Europe/Paris|60|
|Europe/Podgorica|60|
|Europe/Prague|60|
|Europe/Riga|120|
|Europe/Rome|60|
|Europe/Samara|240|
|Europe/San_Marino|60|
|Europe/Sarajevo|60|
|Europe/Saratov|240|
|Europe/Simferopol|180|
|Europe/Skopje|60|
|Europe/Sofia|120|
|Europe/Stockholm|60|
|Europe/Tallinn|120|
|Europe/Tirane|60|
|Europe/Ulyanovsk|240|
|Europe/Uzhgorod|120|
|Europe/Vaduz|60|
|Europe/Vatican|60|
|Europe/Vienna|60|
|Europe/Vilnius|120|
|Europe/Volgograd|180|
|Europe/Warsaw|60|
|Europe/Zagreb|60|
|Europe/Zaporozhye|120|
|Europe/Zurich|60|
|Factory|0|
|GMT|0|
|Indian/Antananarivo|180|
|Indian/Chagos|360|
|Indian/Christmas|420|
|Indian/Cocos|390|
|Indian/Comoro|180|
|Indian/Kerguelen|300|
|Indian/Mahe|240|
|Indian/Maldives|300|
|Indian/Mauritius|240|
|Indian/Mayotte|180|
|Indian/Reunion|240|
|Pacific/Apia|780|
|Pacific/Auckland|720|
|Pacific/Bougainville|660|
|Pacific/Chatham|765|
|Pacific/Chuuk|600|
|Pacific/Easter|-360|
|Pacific/Efate|660|
|Pacific/Enderbury|780|
|Pacific/Fakaofo|780|
|Pacific/Fiji|720|
|Pacific/Funafuti|720|
|Pacific/Galapagos|-360|
|Pacific/Gambier|-540|
|Pacific/Guadalcanal|660|
|Pacific/Guam|600|
|Pacific/Honolulu|-600|
|Pacific/Kiritimati|840|
|Pacific/Kosrae|660|
|Pacific/Kwajalein|720|
|Pacific/Majuro|720|
|Pacific/Marquesas|-510|
|Pacific/Midway|-660|
|Pacific/Nauru|720|
|Pacific/Niue|-660|
|Pacific/Norfolk|660|
|Pacific/Noumea|660|
|Pacific/Pago_Pago|-660|
|Pacific/Palau|540|
|Pacific/Pitcairn|-480|
|Pacific/Pohnpei|660|
|Pacific/Port_Moresby|600|
|Pacific/Rarotonga|-600|
|Pacific/Saipan|600|
|Pacific/Tahiti|-600|
|Pacific/Tarawa|720|
|Pacific/Tongatapu|780|
|Pacific/Wake|720|
|Pacific/Wallis|720|