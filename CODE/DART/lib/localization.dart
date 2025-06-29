// -- IMPORTS

import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/number_symbols_data.dart';

// -- CONSTANTS

final RegExp
    valueExpression = RegExp(r'^(.*?)([<=>]+)(.*)$');

// -- VARIABLES

Map<String, String>
    textBySlugMap = {};
String
    languageSeparator = '\n¨',
    languageTag = 'en',
    languageSubTag = 'en',
    continentCode = '',
    countryCode = '',
    languageCode = 'en',
    defaultLanguageCode = 'en',
    substitutionPrefix = '{',
    substitutionSuffix = '}';

// -- FUNCTIONS

void setTextBySlug(
    String text,
    String textSlug
    )
{
    textBySlugMap[textSlug] = text;
}

// ~~

String getTextBySlug(
    String textSlug
    )
{
    if ( textBySlugMap.containsKey( textSlug ) )
    {
        return textBySlugMap[textSlug]!;
    }
    else
    {
        print( 'Missing text slug : ' + textSlug );

        return '';
    }
}

// ~~

String getLanguageDecimalSeparator(
    String languageCode
    )
{
    if ( languageCode == 'en'
         || languageCode == 'ja'
         || languageCode == 'ko'
         || languageCode == 'zh' )
    {
        return '.';
    }
    else
    {
        return ',';
    }
}

// ~~

String getContinentCodeFromCountryCode(
    String countryCode
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

String getContinentSlugFromContinentCode(
    String continentCode
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

void setLanguageSeparator(
    String languageSeparator_
    )
{
    languageSeparator = languageSeparator_;
}

// ~~

String getLanguageSeparator(
    )
{
    return languageSeparator;
}

// ~~

void setLanguageTag(
    String languageTag_
    )
{
    languageTag = languageTag_;
}

// ~~

String getLanguageTag(
    )
{
    return languageTag;
}

// ~~

void updateLanguageTag(
    )
{
    languageTag = getTrimmedLanguageTag( languageCode + '-' + countryCode + '-' + continentCode );

    if ( countryCode.isEmpty )
    {
        languageSubTag = languageCode;
    }
    else
    {
        languageSubTag = languageCode + '-' + countryCode;
    }

    initializeDateFormatting( languageSubTag );
}

// ~~

void setContinentCode(
    String continentCode_
    )
{
    continentCode = continentCode_;

    updateLanguageTag();
}

// ~~

String getContinentCode(
    )
{
    return continentCode;
}

// ~~

void setCountryCode(
    String countryCode_
    )
{
    countryCode = countryCode_;

    setContinentCode( getContinentCodeFromCountryCode( countryCode_ ) );
}

// ~~

String getCountryCode(
    )
{
    return countryCode;
}

// ~~

void setLanguageCode(
    String languageCode_
    )
{
    languageCode = languageCode_;

    updateLanguageTag();
}

// ~~

String getLanguageCode(
    )
{
    return languageCode;
}

// ~~

void setDefaultLanguageCode(
    String defaultLanguageCode_
    )
{
    defaultLanguageCode = defaultLanguageCode_;
}

// ~~

String getDefaultLanguageCode(
    )
{
    return defaultLanguageCode;
}

// ~~

void setSubstitutionPrefix(
    String substitutionPrefix_
    )
{
    substitutionPrefix = substitutionPrefix_;
}

// ~~

String getSubstitutionPrefix(
    )
{
    return substitutionPrefix;
}

// ~~

void setSubstitutionSuffix(
    String substitutionSuffix_
    )
{
    substitutionSuffix = substitutionSuffix_;
}

// ~~

String getSubstitutionSuffix(
    )
{
    return substitutionSuffix;
}

// ~~

String getBrowserLanguageCode(
    String browserLanguageText,
    List<String> validLanguageCodeArray,
    [String defaultLanguageCode = '']
    )
{
    List<String> browserLanguageArray = browserLanguageText.toLowerCase().split( ',' );

    for ( String browserLanguage in browserLanguageArray )
    {
        String browserLanguageCode = browserLanguage.substring( 0, 2 );

        if ( validLanguageCodeArray.contains( browserLanguageCode ) )
        {
            return browserLanguageCode;
        }
    }

    return defaultLanguageCode;
}

// ~~

String getTrimmedLanguageTag(
    String languageTag
    )
{
    if ( languageTag.endsWith( '--' ) )
    {
        return languageTag.substring( 0, languageTag.length - 2 );
    }
    else if ( languageTag.endsWith( '-' ) )
    {
        return languageTag.substring( 0, languageTag.length - 1 );
    }
    else
    {
        return languageTag;
    }
}

// ~~

String getUntranslatedText(
    String multilingualText
    )
{
    return multilingualText.split( languageSeparator )[ 0 ];
}

// ~~

bool matchesLanguageSpecifier(
    String languageSpecifier,
    String languageTag
    )
{
    List<String> languageTagPartArray = ( languageTag + '--' ).split( '-' );

    for ( String languageSpecifierTag in languageSpecifier.split( ',' ) )
    {
        List<String> languageSpecifierTagPartArray = ( languageSpecifierTag + '--' ).split( '-' );

        if ( ( languageTagPartArray[ 0 ] == ''
               || languageSpecifierTagPartArray[ 0 ] == ''
               || languageTagPartArray[ 0 ] == languageSpecifierTagPartArray[ 0 ] )
             && ( languageTagPartArray[ 1 ] == ''
                  || languageSpecifierTagPartArray[ 1 ] == ''
                  || languageTagPartArray[ 1 ] == languageSpecifierTagPartArray[ 1 ] )
             && ( languageTagPartArray[ 2 ] == ''
                  || languageSpecifierTagPartArray[ 2 ] == ''
                  || languageTagPartArray[ 2 ] == languageSpecifierTagPartArray[ 2 ] ) )
        {
            return true;
        }
    }

    return false;
}

// ~~

bool matchesValueSpecifier(
    String valueSpecifier,
    Map<String, dynamic>? valueByNameMap
    )
{
    if ( valueByNameMap != null )
    {
        var match = valueExpression.firstMatch( valueSpecifier );

        if ( match != null )
        {
            String valueName = match.group(1)!;
            String operator = match.group(2)!;
            dynamic otherValue = match.group(3)!;

            if ( valueByNameMap.containsKey( valueName ) )
            {
                dynamic value = valueByNameMap[ valueName ];

                if ( value is num )
                {
                    otherValue = num.parse( otherValue );
                }

                if ( ( operator == '='
                       && value == otherValue )
                     || ( operator == '<'
                          && value < otherValue )
                     || ( operator == '<='
                          && value <= otherValue )
                     || ( operator == '>='
                          && value >= otherValue )
                     || ( operator == '>'
                          && value > otherValue )
                     || ( operator == '<>'
                          && value != otherValue ) )
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

    print( 'Bad value specifier : ' + valueSpecifier );

    return false;
}

// ~~

bool matchesConditionSpecifier(
    String specifier,
    Map<String, dynamic>? valueByNameMap
    )
{
    for ( String valueSpecifier in specifier.split( ',' ) )
    {
        if ( matchesValueSpecifier( valueSpecifier, valueByNameMap ) )
        {
            return true;
        }
    }

    return false;
}

// ~~

bool matchesTranslationSpecifier(
    String translationSpecifier,
    Map<String, dynamic>? valueByNameMap,
    String languageTag
    )
{
    List<String> conditionSpecifierArray = translationSpecifier.split( '?' );

    if ( matchesLanguageSpecifier( conditionSpecifierArray[ 0 ], languageTag ) )
    {
        for ( int conditionSpecifierIndex = 1;
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

String getSubstitutedText(
    String text,
    Map<String, dynamic>? valueByNameMap
    )
{
    if ( valueByNameMap != null )
    {
        for ( var entry in valueByNameMap.entries )
        {
            text = text.replaceAll( substitutionPrefix + entry.key + substitutionSuffix, entry.value.toString() );
        }
    }

    return text;
}

// ~~

String getTranslatedText(
    String multilingualText,
    dynamic valueByNameMap,
    [String? languageTag_,
    String? defaultLanguageTag]
    )
{
    if ( languageTag_ != null
         && valueByNameMap is String )
    {
        languageTag_ = valueByNameMap;
        valueByNameMap = null;
    }

    List<String> translatedTextArray = multilingualText.split( languageSeparator );

    if ( languageTag_ == null )
    {
        languageTag_ = languageTag;
    }

    if ( languageTag_ != defaultLanguageTag )
    {
        for ( int translatedTextIndex = translatedTextArray.length - 1;
              translatedTextIndex >= 1;
              --translatedTextIndex )
        {
            String translatedText = translatedTextArray[ translatedTextIndex ];
            int colonCharacterIndex = translatedText.indexOf( ':' );

            if ( colonCharacterIndex >= 0 )
            {
                if ( matchesTranslationSpecifier( translatedText.substring( 0, colonCharacterIndex ), valueByNameMap as Map<String, dynamic>?, languageTag_ ) )
                {
                    return getSubstitutedText( translatedText.substring( colonCharacterIndex + 1 ), valueByNameMap as Map<String, dynamic>? );
                }
            }
        }
    }

    return getSubstitutedText( translatedTextArray[ 0 ], valueByNameMap as Map<String, dynamic>? );
}

// ~~

String getTranslatedNumber(
    num number,
    {
        String pattern = '',
        int minimumIntegerDigitCount = 1,
        int minimumFractionDigitCount = 0,
        int maximumFractionDigitCount = 8,
        bool usesGrouping = false,
        String currency = '',
        String symbol = ''
    }
    )
{
    if ( pattern == '' )
    {
        for ( var minimumIntegerDigitCountIndex = 0;
              minimumIntegerDigitCountIndex < minimumIntegerDigitCount;
              ++minimumIntegerDigitCountIndex )
        {
            pattern += '0';
        }
        
        if ( minimumFractionDigitCount > 0 )
        {
            pattern += '.' + '0' * minimumFractionDigitCount;
        }
            
        if ( maximumFractionDigitCount > minimumFractionDigitCount )
        {
            if ( minimumFractionDigitCount == 0 )
            {
                pattern += '.';
            }

            pattern += '#' * ( maximumFractionDigitCount - minimumFractionDigitCount );
        }
        
        if ( usesGrouping ) 
        {
            pattern = '#,##' + pattern;
        }
    }

    if ( currency.isNotEmpty )
    {
        var numberFormat = 
            NumberFormat.currency(
                locale: languageSubTag,
                name: currency,
                customPattern: pattern
                );

        return numberFormat.format( number );
    }
    else if ( symbol.isNotEmpty )
    {
        var numberFormat = 
            NumberFormat.currency(
                locale: languageSubTag,
                symbol: symbol,
                customPattern: pattern
                );

        return numberFormat.format( number );
    }
    else
    {
        var numberFormat = 
            NumberFormat( 
                pattern,
                languageSubTag
                );

        return numberFormat.format( number );
    }
}

// ~~

String getTranslatedDate(
    DateTime date,
    {
        String pattern = 'yyyy-MM-dd'
    }
    )
{
    return DateFormat( pattern, languageSubTag ).format( date );
}

// ~~

String getTranslatedTime(
    DateTime time,
    {
        String pattern = 'HH:mm:ss'
    }
    )
{
    return DateFormat( pattern, languageSubTag ).format( time );
}


// ~~

bool isMultilingualText(
    String multilingualText
    )
{
    return multilingualText.contains( languageSeparator );
}

// ~~

List<Map<String, String>> getTranslationArray(
    String multilingualText
    )
{
    List<String> translatedTextArray = multilingualText.split( languageSeparator );
    List<Map<String, String>> translationArray = [];

    translationArray.add(
        {
            'specifier' : '',
            'data' : translatedTextArray[ 0 ]
        }
        );

    for ( int translatedTextIndex = 1;
          translatedTextIndex < translatedTextArray.length;
          ++translatedTextIndex )
    {
        String translatedText = translatedTextArray[ translatedTextIndex ];
        int colonCharacterIndex = translatedText.indexOf( ':' );

        if ( colonCharacterIndex >= 0 )
        {
            translationArray.add(
                {
                    'specifier' : translatedText.substring( 0, colonCharacterIndex ),
                    'data' : translatedText.substring( colonCharacterIndex + 1 )
                }
                );
        }
    }

    return translationArray;
}

// ~~

String getNextLanguageTag(
    List<String> languageTagArray,
    List<Map<String, String>> translationArray
    )
{
    for ( int languageTagIndex = 1;
          languageTagIndex < languageTagArray.length;
          ++languageTagIndex )
    {
        String languageTag = languageTagArray[ languageTagIndex ];

        for ( var translation in translationArray )
        {
            if ( translation['specifier']!.contains( languageTag ) )
            {
                languageTag = '';

                break;
            }
        }

        if ( languageTag != '' )
        {
            return languageTag;
        }
    }

    return '';
}

// ~~

String getMultilingualText(
    List<Map<String, String>> translationArray
    )
{
    String multilingualText = '';

    if ( translationArray.isNotEmpty )
    {
        multilingualText = translationArray[ 0 ]['data']!;

        for ( int translationIndex = 1;
              translationIndex < translationArray.length;
              ++translationIndex )
        {
            var translation = translationArray[ translationIndex ];

            multilingualText += languageSeparator + translation['specifier']! + ':' + translation['data']!;
        }
    }

    return multilingualText;
}

// ~~

String getLocalizedText(
    String text,
    [
        Map<String, dynamic>? valueByNameMap,
        String? languageTag_,
        String? defaultLanguageTag
    ]
    )
{
    if ( isMultilingualText( text ) )
    {
        return getTranslatedText( text, valueByNameMap, languageTag_, defaultLanguageTag );
    }
    else
    {
        return text;
    }
}

// ~~

String getLocalizedTextBySlug(
    String textSlug,
    Map<String, dynamic>? valueByNameMap,
    [
        String? languageTag,
        String? defaultLanguageTag
    ]
    )
{
    if ( textBySlugMap.containsKey( textSlug ) )
    {
        return getLocalizedText( textBySlugMap[ textSlug ]!, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        print( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}
