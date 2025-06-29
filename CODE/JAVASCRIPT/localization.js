// -- CONSTANTS

const
    valueExpression = /^(.*?)([<=>]+)(.*)$/;

// -- VARIABLES

export let
    textBySlugMap = new Map(),
    languageSeparator = '\n¨',
    languageTag = 'en',
    languageSubtag = 'en',
    continentCode = '',
    countryCode = '',
    languageCode = 'en',
    defaultLanguageCode = 'en',
    substitutionPrefix = '{',
    substitutionSuffix = '}';

// -- FUNCTIONS

export function setTextBySlug(
    text,
    textSlug
    )
{
    textBySlugMap.set( textSlug, text );
}

// ~~

export function getTextBySlug(
    textSlug
    )
{
    if ( textBySlugMap.has( textSlug ) )
    {
        return textBySlugMap.get( textSlug );
    }
    else
    {
        console.warn( 'Missing text slug : ' + textSlug );

        return '';
    }
}

// ~~

export function getLanguageDecimalSeparator(
    languageCode
    )
{
    if ( languageCode === 'en'
         || languageCode === 'ja'
         || languageCode === 'ko'
         || languageCode === 'zh' )
    {
        return '.';
    }
    else
    {
        return ',';
    }
}

// ~~

export function getContinentCodeFromCountryCode(
    countryCode
    )
{
    switch ( countryCode )
    {
        case 'AF' : return 'AS';
        case 'AX' : return 'EU';
        case 'AL' : return 'EU';
        case 'DZ' : return 'AF';
        case 'AS' : return 'OC';
        case 'AD' : return 'EU';
        case 'AO' : return 'AF';
        case 'AI' : return 'CA';
        case 'AQ' : return 'AN';
        case 'AG' : return 'CA';
        case 'AR' : return 'SA';
        case 'AM' : return 'EU';
        case 'AW' : return 'CA';
        case 'AU' : return 'OC';
        case 'AT' : return 'EU';
        case 'AZ' : return 'EU';
        case 'BS' : return 'CA';
        case 'BH' : return 'AS';
        case 'BD' : return 'AS';
        case 'BB' : return 'CA';
        case 'BY' : return 'EU';
        case 'BE' : return 'EU';
        case 'BZ' : return 'CA';
        case 'BJ' : return 'AF';
        case 'BM' : return 'CA';
        case 'BT' : return 'AS';
        case 'BO' : return 'SA';
        case 'BA' : return 'EU';
        case 'BW' : return 'AF';
        case 'BR' : return 'SA';
        case 'IO' : return 'AF';
        case 'VG' : return 'CA';
        case 'BN' : return 'AS';
        case 'BG' : return 'EU';
        case 'BF' : return 'AF';
        case 'BI' : return 'AF';
        case 'KH' : return 'AS';
        case 'CM' : return 'AF';
        case 'CA' : return 'NA';
        case 'CV' : return 'AF';
        case 'KY' : return 'CA';
        case 'CF' : return 'AF';
        case 'TD' : return 'AF';
        case 'CL' : return 'SA';
        case 'CN' : return 'AS';
        case 'CX' : return 'OC';
        case 'CC' : return 'OC';
        case 'CO' : return 'SA';
        case 'KM' : return 'AF';
        case 'CK' : return 'OC';
        case 'CR' : return 'CA';
        case 'CI' : return 'AF';
        case 'HR' : return 'EU';
        case 'CU' : return 'CA';
        case 'CW' : return 'CA';
        case 'CY' : return 'EU';
        case 'CZ' : return 'EU';
        case 'CD' : return 'AF';
        case 'DK' : return 'EU';
        case 'DJ' : return 'AF';
        case 'DM' : return 'CA';
        case 'DO' : return 'CA';
        case 'EC' : return 'SA';
        case 'EG' : return 'AF';
        case 'SV' : return 'CA';
        case 'GQ' : return 'AF';
        case 'ER' : return 'AF';
        case 'EE' : return 'EU';
        case 'ET' : return 'AF';
        case 'FK' : return 'SA';
        case 'FO' : return 'EU';
        case 'FM' : return 'OC';
        case 'FJ' : return 'OC';
        case 'FI' : return 'EU';
        case 'FR' : return 'EU';
        case 'PF' : return 'OC';
        case 'TF' : return 'AN';
        case 'GA' : return 'AF';
        case 'GE' : return 'EU';
        case 'DE' : return 'EU';
        case 'GH' : return 'AF';
        case 'GI' : return 'EU';
        case 'GR' : return 'EU';
        case 'GL' : return 'CA';
        case 'GD' : return 'CA';
        case 'GU' : return 'OC';
        case 'GT' : return 'CA';
        case 'GG' : return 'EU';
        case 'GN' : return 'AF';
        case 'GW' : return 'AF';
        case 'GY' : return 'SA';
        case 'HT' : return 'CA';
        case 'HM' : return 'AN';
        case 'HN' : return 'CA';
        case 'HK' : return 'AS';
        case 'HU' : return 'EU';
        case 'IS' : return 'EU';
        case 'IN' : return 'AS';
        case 'ID' : return 'AS';
        case 'IR' : return 'AS';
        case 'IQ' : return 'AS';
        case 'IE' : return 'EU';
        case 'IM' : return 'EU';
        case 'IL' : return 'AS';
        case 'IT' : return 'EU';
        case 'JM' : return 'CA';
        case 'JP' : return 'AS';
        case 'JE' : return 'EU';
        case 'JO' : return 'AS';
        case 'KZ' : return 'AS';
        case 'KE' : return 'AF';
        case 'KI' : return 'OC';
        case 'KO' : return 'EU';
        case 'KW' : return 'AS';
        case 'KG' : return 'AS';
        case 'LA' : return 'AS';
        case 'LV' : return 'EU';
        case 'LB' : return 'AS';
        case 'LS' : return 'AF';
        case 'LR' : return 'AF';
        case 'LY' : return 'AF';
        case 'LI' : return 'EU';
        case 'LT' : return 'EU';
        case 'LU' : return 'EU';
        case 'MO' : return 'AS';
        case 'MK' : return 'EU';
        case 'MG' : return 'AF';
        case 'MW' : return 'AF';
        case 'MY' : return 'AS';
        case 'MV' : return 'AS';
        case 'ML' : return 'AF';
        case 'MT' : return 'EU';
        case 'MH' : return 'OC';
        case 'MR' : return 'AF';
        case 'MU' : return 'AF';
        case 'MX' : return 'CA';
        case 'MD' : return 'EU';
        case 'MC' : return 'EU';
        case 'MN' : return 'AS';
        case 'ME' : return 'EU';
        case 'MS' : return 'CA';
        case 'MA' : return 'AF';
        case 'MZ' : return 'AF';
        case 'MM' : return 'AS';
        case 'NA' : return 'AF';
        case 'NR' : return 'OC';
        case 'NP' : return 'AS';
        case 'NL' : return 'EU';
        case 'NC' : return 'OC';
        case 'NZ' : return 'OC';
        case 'NI' : return 'CA';
        case 'NE' : return 'AF';
        case 'NG' : return 'AF';
        case 'NU' : return 'OC';
        case 'NF' : return 'OC';
        case 'KP' : return 'AS';
        case 'MP' : return 'OC';
        case 'NO' : return 'EU';
        case 'OM' : return 'AS';
        case 'PK' : return 'AS';
        case 'PW' : return 'OC';
        case 'PS' : return 'AS';
        case 'PA' : return 'CA';
        case 'PG' : return 'OC';
        case 'PY' : return 'SA';
        case 'PE' : return 'SA';
        case 'PH' : return 'AS';
        case 'PN' : return 'OC';
        case 'PL' : return 'EU';
        case 'PT' : return 'EU';
        case 'PR' : return 'CA';
        case 'QA' : return 'AS';
        case 'CG' : return 'AF';
        case 'RO' : return 'EU';
        case 'RU' : return 'EU';
        case 'RW' : return 'AF';
        case 'BL' : return 'CA';
        case 'SH' : return 'AF';
        case 'KN' : return 'CA';
        case 'LC' : return 'CA';
        case 'MF' : return 'CA';
        case 'PM' : return 'CA';
        case 'VC' : return 'CA';
        case 'WS' : return 'OC';
        case 'SM' : return 'EU';
        case 'ST' : return 'AF';
        case 'SA' : return 'AS';
        case 'SN' : return 'AF';
        case 'RS' : return 'EU';
        case 'SC' : return 'AF';
        case 'SL' : return 'AF';
        case 'SG' : return 'AS';
        case 'SX' : return 'CA';
        case 'SK' : return 'EU';
        case 'SI' : return 'EU';
        case 'SB' : return 'OC';
        case 'SO' : return 'AF';
        case 'ZA' : return 'AF';
        case 'GS' : return 'AN';
        case 'KR' : return 'AS';
        case 'SS' : return 'AF';
        case 'ES' : return 'EU';
        case 'LK' : return 'AS';
        case 'SD' : return 'AF';
        case 'SR' : return 'SA';
        case 'SJ' : return 'EU';
        case 'SZ' : return 'AF';
        case 'SE' : return 'EU';
        case 'CH' : return 'EU';
        case 'SY' : return 'AS';
        case 'TW' : return 'AS';
        case 'TJ' : return 'AS';
        case 'TZ' : return 'AF';
        case 'TH' : return 'AS';
        case 'GM' : return 'AF';
        case 'TL' : return 'AS';
        case 'TG' : return 'AF';
        case 'TK' : return 'OC';
        case 'TO' : return 'OC';
        case 'TT' : return 'CA';
        case 'TN' : return 'AF';
        case 'TR' : return 'EU';
        case 'TM' : return 'AS';
        case 'TC' : return 'CA';
        case 'TV' : return 'OC';
        case 'UG' : return 'AF';
        case 'UA' : return 'EU';
        case 'AE' : return 'AS';
        case 'GB' : return 'EU';
        case 'US' : return 'NA';
        case 'UY' : return 'SA';
        case 'UM' : return 'OC';
        case 'VI' : return 'CA';
        case 'UZ' : return 'AS';
        case 'VU' : return 'OC';
        case 'VA' : return 'EU';
        case 'VE' : return 'SA';
        case 'VN' : return 'AS';
        case 'WF' : return 'OC';
        case 'EH' : return 'AF';
        case 'YE' : return 'AS';
        case 'ZM' : return 'AF';
        case 'ZW' : return 'AF';
    }

    return '';
}

// ~~

export function getContinentSlugFromContinentCode(
    continentCode
    )
{
    switch ( continentCode )
    {
        case 'AF' : return 'africa';
        case 'AN' : return 'antarctica';
        case 'AS' : return 'asia';
        case 'OC' : return 'oceania';
        case 'CA' : return 'central-america';
        case 'EU' : return 'europe';
        case 'NA' : return 'north-america';
        case 'SA' : return 'south-america';
    }

    return '';
}

// ~~

export function setLanguageSeparator(
    languageSeparator_
    )
{
    languageSeparator = languageSeparator_;
}

// ~~

export function getLanguageSeparator(
    )
{
    return languageSeparator;
}

// ~~

export function setLanguageTag(
    languageTag_
    )
{
    languageTag = languageTag_;
}

// ~~

export function getLanguageTag(
    )
{
    return languageTag;
}

// ~~

export function updateLanguageTag(
    )
{
    languageTag = getTrimmedLanguageTag( languageCode + '-' + countryCode + '-' + continentCode );

    if ( countryCode === '' )
    {
        languageSubtag = languageCode;
    }
    else
    {
        languageSubtag = languageCode + '-' + countryCode;
    }
}

// ~~

export function setContinentCode(
    continentCode_
    )
{
    continentCode = continentCode_;

    updateLanguageTag();
}

// ~~

export function getContinentCode(
    )
{
    return continentCode;
}

// ~~

export function setCountryCode(
    countryCode_
    )
{
    countryCode = countryCode_;

    setContinentCode( getContinentCodeFromCountryCode( countryCode_ ) );
}

// ~~

export function getCountryCode(
    )
{
    return countryCode;
}

// ~~

export function setLanguageCode(
    languageCode_
    )
{
    languageCode = languageCode_;

    updateLanguageTag();
}

// ~~

export function getLanguageCode(
    )
{
    return languageCode;
}

// ~~

export function setDefaultLanguageCode(
    defaultLanguageCode_
    )
{
    defaultLanguageCode = defaultLanguageCode_;
}

// ~~

export function getDefaultLanguageCode(
    )
{
    return defaultLanguageCode;
}

// ~~

export function setSubstitutionPrefix(
    substitutionPrefix_
    )
{
    substitutionPrefix = substitutionPrefix_;
}

// ~~

export function getSubstitutionPrefix(
    )
{
    return substitutionPrefix;
}

// ~~

export function setSubstitutionSuffix(
    substitutionSuffix_
    )
{
    substitutionSuffix = substitutionSuffix_;
}

// ~~

export function getSubstitutionSuffix(
    )
{
    return substitutionSuffix;
}

// ~~

export function getTranslatedNumber(
    number,
    {
        minimumIntegerDigitCount = 1,
        minimumFractionDigitCount = 0,
        maximumFractionDigitCount = 8,
        usesGrouping = false,
        unit = '',
        currency = ''
    } = {}
    )
{
    let numberFormat;
    
    if ( unit !== '' )
    {
        numberFormat = 
            new Intl.NumberFormat( 
                languageSubtag, 
                {
                    style: 'unit',
                    unit: unit,
                    minimumFractionDigits: minimumFractionDigitCount,
                    maximumFractionDigits: maximumFractionDigitCount,
                    useGrouping: usesGrouping
                } 
                );
    }
    else if ( currency !== '' )
    {
        numberFormat = 
            new Intl.NumberFormat( 
                languageSubtag, 
                {
                    style: 'currency',
                    currency: currency,
                    minimumFractionDigits: minimumFractionDigitCount,
                    maximumFractionDigits: maximumFractionDigitCount,
                    useGrouping: usesGrouping
                } 
                );
    }
    else 
    {
        numberFormat = 
            new Intl.NumberFormat( 
                languageSubtag, 
                {
                    minimumIntegerDigits: minimumIntegerDigitCount,
                    minimumFractionDigits: minimumFractionDigitCount,
                    maximumFractionDigits: maximumFractionDigitCount,
                    useGrouping: usesGrouping
                } 
                );
    }

    return numberFormat.format( number );
}

// ~~

export function getTranslatedDate(
    date,
    {
        pattern = 'yyyy-MM-dd',
        timeZone = 'UTC'
    } = {}
    )
{
    let options = 
        {
            timeZone: timeZone
        };
    
    if ( pattern.includes( 'yyyy' ) )
    {
        options.year = 'numeric';
    }
    else if ( pattern.includes( 'yy' ) )
    {
        options.year = '2-digit';
    }
    
    if ( pattern.includes( 'MM' ) )
    {
        options.month = '2-digit';
    }
    else if ( pattern.includes( 'M' ) )
    {
        options.month = 'numeric';
    }
    
    if ( pattern.includes( 'dd' ) )
    {
        options.day = '2-digit';
    }
    else if ( pattern.includes( 'd' ) )
    {
        options.day = 'numeric';
    }
    
    let dateTimeFormat = new Intl.DateTimeFormat( languageSubtag, options );

    return dateTimeFormat.format( date );
}

// ~~

export function getTranslatedTime(
    time,
    {
        pattern = 'HH:mm:ss',
        timeZone = 'UTC'
    } = {}
    )
{
    let options = 
        {
            timeZone: timeZone
        };
    
    if ( pattern.includes( 'HH' ) )
    {
        options.hour = '2-digit';
        options.hour12 = false;
    }
    else if ( pattern.includes( 'H' ) )
    {
        options.hour = 'numeric';
        options.hour12 = false;
    }
    else if ( pattern.includes( 'hh' ) )
    {
        options.hour = '2-digit';
        options.hour12 = true;
    }
    else if ( pattern.includes( 'h' ) )
    {
        options.hour = 'numeric';
        options.hour12 = true;
    }
    
    if ( pattern.includes( 'mm' ) )
    {
        options.minute = '2-digit';
    }
    else if ( pattern.includes( 'm' ) )
    {
        options.minute = 'numeric';
    }
    
    if ( pattern.includes( 'ss' ) )
    {
        options.second = '2-digit';
    }
    else if ( pattern.includes( 's' ) )
    {
        options.second = 'numeric';
    }
    
    let dateTimeFormat = new Intl.DateTimeFormat( languageSubtag, options );

    return dateTimeFormat.format( time );
}

// ~~

export function getTranslatedCountryName(
    countryCode
    )
{
    let displayNames
        = new Intl.DisplayNames(
              [
                  languageTag
              ],
              {
                  type: 'region'
              }
              );

    return displayNames.of( countryCode );
}

// ~~

export function getTranslatedLanguageName(
    languageCode
    )
{
    let displayNames
        = new Intl.DisplayNames(
              [
                  languageTag
              ],
              {
                  type: 'language'
              }
              );

    return displayNames.of( languageCode );
}

// ~~

export function getTranslatedCurrencyName(
    currencyCode
    )
{
    let displayNames
        = new Intl.DisplayNames(
              [
                  languageTag
              ],
              {
                  type: 'currency'
              }
              );

    return displayNames.of( currencyCode );
}

// ~~

export function getBrowserLanguageCode(
    browserLanguageText,
    validLanguageCodeArray,
    defaultLanguageCode = ''
    )
{
    let browserLanguageArray = browserLanguageText.toLowerCase().split( ',' );

    for ( let browserLanguage of browserLanguageArray )
    {
        let browserLanguageCode = browserLanguage.slice( 0, 2 );

        if ( validLanguageCodeArray.indexOf( browserLanguageCode ) >= 0 )
        {
            return browserLanguageCode;
        }
    }

    return defaultLanguageCode;
}

// ~~

export function getTrimmedLanguageTag(
    languageTag
    )
{
    if ( languageTag.endsWith( '--' ) )
    {
        return languageTag.slice( 0, -2 );
    }
    else if ( languageTag.endsWith( '-' ) )
    {
        return languageTag.slice( 0, -1 );
    }
    else
    {
        return languageTag;
    }
}

// ~~

export function getUntranslatedText(
    multilingualText
    )
{
    return multilingualText.split( languageSeparator )[ 0 ];
}

// ~~

export function matchesLanguageSpecifier(
    languageSpecifier,
    languageTag
    )
{
    let languageTagPartArray = ( languageTag + '--' ).split( '-' );

    for ( let languageSpecifierTag of languageSpecifier.split( ',' ) )
    {
        let languageSpecifierTagPartArray = ( languageSpecifierTag + '--' ).split( '-' );

        if ( ( languageTagPartArray[ 0 ] === ''
               || languageSpecifierTagPartArray[ 0 ] === ''
               || languageTagPartArray[ 0 ] === languageSpecifierTagPartArray[ 0 ] )
             && ( languageTagPartArray[ 1 ] === ''
                  || languageSpecifierTagPartArray[ 1 ] === ''
                  || languageTagPartArray[ 1 ] === languageSpecifierTagPartArray[ 1 ] )
             && ( languageTagPartArray[ 2 ] === ''
                  || languageSpecifierTagPartArray[ 2 ] === ''
                  || languageTagPartArray[ 2 ] === languageSpecifierTagPartArray[ 2 ] ) )
        {
            return true;
        }
    }

    return false;
}

// ~~

export function matchesValueSpecifier(
    valueSpecifier,
    valueByNameMap
    )
{
    if ( valueByNameMap !== undefined )
    {
        let match = valueSpecifier.match( valueExpression );

        if ( match )
        {
            let valueName = match[ 1 ];
            let operator = match[ 2 ];
            let otherValue = match[ 3 ];

            if ( valueByNameMap !== undefined
                 && valueName in valueByNameMap )
            {
                let value = valueByNameMap[ valueName ];

                if ( typeof value === 'number' )
                {
                    otherValue = Number( otherValue );
                }

                if ( ( operator === '='
                       && value === otherValue )
                     || ( operator === '<'
                          && value < otherValue )
                     || ( operator === '<='
                          && value <= otherValue )
                     || ( operator === '>='
                          && value >= otherValue )
                     || ( operator === '>'
                          && value > otherValue )
                     || ( operator === '<>'
                          && value !== otherValue ) )
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }

    console.warn( 'Bad value specifier : ' + valueSpecifier );

    return false;
}

// ~~

export function matchesConditionSpecifier(
    specifier,
    valueByNameMap
    )
{
    for ( let valueSpecifier of specifier.split( ',' ) )
    {
        if ( matchesValueSpecifier( valueSpecifier, valueByNameMap ) )
        {
            return true;
        }
    }

    return false;
}

// ~~

export function matchesTranslationSpecifier(
    translationSpecifier,
    valueByNameMap,
    languageTag
    )
{
    let conditionSpecifierArray = translationSpecifier.split( '?' );

    if ( matchesLanguageSpecifier( conditionSpecifierArray[ 0 ], languageTag ) )
    {
        for ( let conditionSpecifierIndex = 1;
              conditionSpecifierIndex < conditionSpecifierArray.length;
              ++conditionSpecifierIndex )
        {
            if ( !matchesConditionSpecifier( conditionSpecifierArray[ conditionSpecifierIndex ], valueByNameMap ) )
            {
                return false;
            }
        }

        return true;
    }

    return false;
}

// ~~

export function getSubstitutedText(
    text,
    valueByNameMap
    )
{
    if ( valueByNameMap !== undefined )
    {
        for ( let [ name, value ] of Object.entries( valueByNameMap ) )
        {
            text = text.replaceAll( substitutionPrefix + name + substitutionSuffix, value );
        }
    }

    return text;
}

// ~~

export function getTranslatedText(
    multilingualText,
    valueByNameMap,
    languageTag_,
    defaultLanguageTag
    )
{
    if ( languageTag_ !== undefined
         && isString( valueByNameMap ) )
    {
        languageTag_ = valueByNameMap;
        valueByNameMap = undefined;
    }

    let translatedTextArray = multilingualText.split( languageSeparator );

    if ( languageTag_ === undefined )
    {
        languageTag_ = languageTag;
    }

    if ( languageTag_ !== defaultLanguageTag )
    {
        for ( let translatedTextIndex = translatedTextArray.length - 1;
              translatedTextIndex >= 1;
              --translatedTextIndex )
        {
            let translatedText = translatedTextArray[ translatedTextIndex ];
            let colonCharacterIndex = translatedText.indexOf( ':' );

            if ( colonCharacterIndex >= 0 )
            {
                if ( matchesTranslationSpecifier( translatedText.slice( 0, colonCharacterIndex ), valueByNameMap, languageTag_ ) )
                {
                    return getSubstitutedText( translatedText.slice( colonCharacterIndex + 1 ), valueByNameMap );
                }
            }
        }
    }

    return getSubstitutedText( translatedTextArray[ 0 ], valueByNameMap );
}

// ~~

export function isMultilingualText(
    multilingualText
    )
{
    return multilingualText.indexOf( languageSeparator ) >= 0;
}

// ~~

export function getTranslationArray(
    multilingualText
    )
{
    let translatedTextArray = multilingualText.split( languageSeparator );
    let translationArray = [];

    translationArray.push(
        {
            specifier : '',
            data : translatedTextArray[ 0 ]
        }
        );

    for ( let translatedTextIndex = 1;
          translatedTextIndex < translatedTextArray.length;
          ++translatedTextIndex )
    {
        let translatedText = translatedTextArray[ translatedTextIndex ];
        let colonCharacterIndex = translatedText.indexOf( ':' );

        if ( colonCharacterIndex >= 0 )
        {
            translationArray.push(
                {
                    specifier : translatedText.slice( 0, colonCharacterIndex ),
                    data : translatedText.slice( colonCharacterIndex + 1 )
                }
                );
        }
    }

    return translationArray;
}

// ~~

export function getNextLanguageTag(
    languageTagArray,
    translationArray
    )
{
    for ( let languageTagIndex = 1;
          languageTagIndex < languageTagArray.length;
          ++languageTagIndex )
    {
        let languageTag = languageTagArray[ languageTagIndex ];

        for ( let translationIndex = 0;
              translationIndex < translationArray.length;
              ++translationIndex )
        {
            let translation = translationArray[ translationIndex ];

            if ( translation.specifier.indexOf( languageTag ) >= 0 )
            {
                languageTag = '';

                break;
            }
        }

        if ( languageTag !== '' )
        {
            return languageTag;
        }
    }

    return '';
}

// ~~

export function getMultilingualText(
    translationArray
    )
{
    let multilingualText = '';

    if ( translationArray.length > 0 )
    {
        multilingualText = translationArray[ 0 ].data;

        for ( let translationIndex = 1;
              translationIndex < translationArray.length;
              ++translationIndex )
        {
            let translation = translationArray[ translationIndex ];

            multilingualText += languageSeparator + translation.specifier + ':' + translation.data;
        }
    }

    return multilingualText;
}

// ~~

export function getLocalizedText(
    text,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    if ( isMultilingualText( text ) )
    {
        return getTranslatedText( text, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        return text;
    }
}

// ~~

export function getLocalizedTextBySlug(
    textSlug,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    if ( textBySlugMap.has( textSlug ) )
    {
        return getLocalizedText( textBySlugMap.get( textSlug ), valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        console.warn( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}
