// -- IMPORTS

import 'dart:io';
import 'package:lingo/lingo.dart';
import 'package:intl/date_symbol_data_local.dart';

// -- FUNCTIONS

void checkResult(
    dynamic value,
    dynamic expectedValue
    )
{
    print( 'Value : ${value.toString()}' );
    print( 'Expected value : ${expectedValue.toString()}' );

    if ( value != expectedValue )
    {
        throw Exception( 'Invalid value : ${value.toString()}' );
    }
}

// ~~

void runTests(
    )
{
    print( 'Testing : getTranslatedNumber' );

    setLanguageCode( 'en' );
    checkResult( getTranslatedNumber( 12 ), '12' );
    checkResult( getTranslatedNumber( 12, minimumIntegerDigitCount: 3 ), '012' );
    checkResult( getTranslatedNumber( 12, minimumFractionalDigitCount: 3 ), '12.000' );
    checkResult( getTranslatedNumber( 12.89 ), '12.89' );
    checkResult( getTranslatedNumber( 12.89, minimumFractionalDigitCount: 3 ), '12.890' );
    checkResult( getTranslatedNumber( 12.89, maximumFractionalDigitCount: 0 ), '13' );
    checkResult( getTranslatedNumber( 1234567.89 ), '1234567.89' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true ), '1,234,567.89' );
    checkResult( getTranslatedNumber( 1234567.89, minimumFractionalDigitCount: 3 ), '1234567.890' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true, minimumFractionalDigitCount: 3 ), '1,234,567.890' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'USD' ), '$1234567.89' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'USD', usesGrouping: true ), '$1,234,567.89' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'USD', usesGrouping: true, minimumFractionalDigitCount: 3 ), '$1,234,567.890' );

    setLanguageCode( 'fr' );
    checkResult( getTranslatedNumber( 12 ), '12' );
    checkResult( getTranslatedNumber( 12, minimumIntegerDigitCount: 3 ), '012' );
    checkResult( getTranslatedNumber( 12, minimumFractionalDigitCount: 3 ), '12,000' );
    checkResult( getTranslatedNumber( 12.89 ), '12,89' );
    checkResult( getTranslatedNumber( 12.89, minimumFractionalDigitCount: 3 ), '12,890' );
    checkResult( getTranslatedNumber( 12.89, maximumFractionalDigitCount: 0 ), '13' );
    checkResult( getTranslatedNumber( 1234567.89 ), '1234567,89' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true ), '1 234 567,89' );
    checkResult( getTranslatedNumber( 1234567.89, minimumFractionalDigitCount: 3 ), '1234567,890' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true, minimumFractionalDigitCount: 3 ), '1 234 567,890' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'EUR' ), '1234567,89 €' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'EUR', usesGrouping: true ), '1 234 567,89 €' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'EUR', usesGrouping: true, minimumFractionalDigitCount: 3 ), '1 234 567,890 €' );

    setLanguageCode( 'pt' );
    checkResult( getTranslatedNumber( 12 ), '12' );
    checkResult( getTranslatedNumber( 12, minimumIntegerDigitCount: 3 ), '012' );
    checkResult( getTranslatedNumber( 12, minimumFractionalDigitCount: 3 ), '12,000' );
    checkResult( getTranslatedNumber( 12.89 ), '12,89' );
    checkResult( getTranslatedNumber( 12.89, minimumFractionalDigitCount: 3 ), '12,890' );
    checkResult( getTranslatedNumber( 12.89, maximumFractionalDigitCount: 0 ), '13' );
    checkResult( getTranslatedNumber( 1234567.89 ), '1234567,89' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true ), '1.234.567,89' );
    checkResult( getTranslatedNumber( 1234567.89, minimumFractionalDigitCount: 3 ), '1234567,890' );
    checkResult( getTranslatedNumber( 1234567.89, usesGrouping: true, minimumFractionalDigitCount: 3 ), '1.234.567,890' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'BRL' ), 'R\$ 1234567,89' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'BRL', usesGrouping: true ), 'R\$ 1.234.567,89' );
    //checkResult( getTranslatedNumber( 1234567.89, currency: 'BRL', usesGrouping: true, minimumFractionalDigitCount: 3 ), 'R\$ 1.234.567,890' );

    print( 'Testing : getTranslatedDate' );

    var date = DateTime.parse( '2024-08-02' );

    setLanguageCode( 'en' );
    checkResult( getTranslatedDate( date ), '8/2/2024' );
    checkResult( getTranslatedDate( date, timeZone: 'UTC' ), '8/2/2024' );
    //checkResult( getTranslatedDate( date, yearPattern: 'y', monthPattern: 'MM', dayPattern: 'dd' ), '8/02/2024' );
    //checkResult( getTranslatedDate( date, yearPattern: 'y', monthPattern: 'MM', dayPattern: 'dd', timeZone: 'UTC' ), '8/02/2024' );

    setLanguageCode( 'fr' );
    checkResult( getTranslatedDate( date ), '02/08/2024' );
    checkResult( getTranslatedDate( date, timeZone: 'UTC' ), '02/08/2024' );
    //checkResult( getTranslatedDate( date, yearPattern: 'y', monthPattern: 'MM', dayPattern: 'dd' ), '02/08/2024' );
    //checkResult( getTranslatedDate( date, yearPattern: 'y', monthPattern: 'MM', dayPattern: 'dd', timeZone: 'UTC' ), '02/08/2024' );

    print( 'Testing : getTranslatedTime' );

    var time = DateTime.parse( '2024-08-02T07:05:00Z' );

    setLanguageCode( 'en' );
    checkResult( getTranslatedTime( time ), '07:05:00' );
    checkResult( getTranslatedTime( time, timeZone: 'UTC' ), '07:05:00' );
    checkResult( getTranslatedTime( time, hourPattern: 'HH', minutePattern: 'mm', secondPattern: 'ss' ), '07:05:00' );
    checkResult( getTranslatedTime( time, hourPattern: 'HH', minutePattern: 'mm', secondPattern: 'ss', timeZone: 'UTC' ), '07:05:00' );

    setLanguageCode( 'fr' );
    checkResult( getTranslatedTime( time ), '07:05:00' );
    checkResult( getTranslatedTime( time, timeZone: 'UTC' ), '07:05:00' );
    checkResult( getTranslatedTime( time, hourPattern: 'HH', minutePattern: 'mm', secondPattern: 'ss' ), '07:05:00' );
    checkResult( getTranslatedTime( time, hourPattern: 'HH', minutePattern: 'mm', secondPattern: 'ss', timeZone: 'UTC' ), '07:05:00' );

    print( 'Testing : getBrowserLanguageCode' );

    var browserLanguageText = 'fr-FR,de;q=0.8,en-US;q=0.5,en-GB;q=0.3,es;q=0.2,pt-BR;q=0.1,ru;q=0.1,ja;q=0.1,it;q=0.1,nl-NL;q=0.1';

    var browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'en', 'fr', 'de' ], '-' );
    checkResult( browserLanguageCode, 'fr' );

    browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'de', 'fr' ], '-' );
    checkResult( browserLanguageCode, 'fr' );

    browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'da' ] );
    checkResult( browserLanguageCode, '' );

    print( 'Testing : getLocalizedText' );

    setLanguageSeparator( '¨' );
    setDefaultLanguageCode( 'en' );

    var multilingualText = 'trunk¨en-UK,en--OC:boot¨fr:coffre¨pt:mala¨pt-BR:porta-malas';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );
    var localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'trunk' );

    setLanguageCode( 'en' );
    setCountryCode( 'UK' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'boot' );

    setLanguageCode( 'en' );
    setCountryCode( 'AU' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'boot' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'coffre' );

    setLanguageCode( 'pt' );
    setCountryCode( 'PT' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'mala' );

    setLanguageCode( 'pt' );
    setCountryCode( 'BR' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'porta-malas' );

    multilingualText = 'US¨en-UK,en-AU:UKAU¨fr:FR¨fr-BE,fr-CA:BECA¨pt:PT¨pt-BR:BR';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'US' );

    setLanguageCode( 'en' );
    setCountryCode( 'UK' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'UKAU' );

    setLanguageCode( 'en' );
    setCountryCode( 'AU' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'UKAU' );

    setLanguageCode( 'en' );
    setCountryCode( 'CA' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'US' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'FR' );

    setLanguageCode( 'fr' );
    setCountryCode( 'BE' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'BECA' );

    setLanguageCode( 'fr' );
    setCountryCode( 'CA' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'BECA' );

    setLanguageCode( 'fr' );
    setCountryCode( 'CH' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'FR' );

    setLanguageCode( 'de' );
    setCountryCode( 'CH' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'US' );

    setLanguageCode( 'en' );
    setCountryCode( 'FR' );
    localizedText = getLocalizedText( multilingualText );
    checkResult( localizedText, 'US' );

    multilingualText = '{count} bathrooms¨en?count=1:{count} bathroom¨fr:{count} salles de bain¨fr?count<2:{count} salle de bain';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );

    localizedText = getLocalizedText( multilingualText, { 'count': 0 } );
    checkResult( localizedText, '0 bathrooms' );

    localizedText = getLocalizedText( multilingualText, { 'count': 1 } );
    checkResult( localizedText, '1 bathroom' );

    localizedText = getLocalizedText( multilingualText, { 'count': 2 } );
    checkResult( localizedText, '2 bathrooms' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );

    localizedText = getLocalizedText( multilingualText, { 'count': 0 } );
    checkResult( localizedText, '0 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { 'count': 1 } );
    checkResult( localizedText, '1 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { 'count': 2 } );
    checkResult( localizedText, '2 salles de bain' );

    multilingualText = '¨en?count=0,count>=2:{count} bathrooms¨en?count=1:{count} bathroom¨fr:{count} salles de bain¨fr?count=0,count=1:{count} salle de bain';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );

    localizedText = getLocalizedText( multilingualText, { 'count': 0 } );
    checkResult( localizedText, '0 bathrooms' );

    localizedText = getLocalizedText( multilingualText, { 'count': 1 } );
    checkResult( localizedText, '1 bathroom' );

    localizedText = getLocalizedText( multilingualText, { 'count': 2 } );
    checkResult( localizedText, '2 bathrooms' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );

    localizedText = getLocalizedText( multilingualText, { 'count': 0 } );
    checkResult( localizedText, '0 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { 'count': 1 } );
    checkResult( localizedText, '1 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { 'count': 2 } );
    checkResult( localizedText, '2 salles de bain' );

    print( 'Testing : getProcessedText' );
    defineLineTag( '! ', '<div class="paragraph title-1">', '</div>' );
    defineLineTag( '!! ', '<div class="paragraph title-2">', '</div>' );
    defineLineTag( '!!! ', '<div class="paragraph title-3">', '</div>' );
    defineLineTag( '!!!! ', '<div class="paragraph title-4">', '</div>' );
    defineLineTag( '- ', '<div class="paragraph dash-1">', '</div>' );
    defineLineTag( '  - ', '<div class="paragraph dash-2">', '</div>' );
    defineLineTag( '    - ', '<div class="paragraph dash-3">', '</div>' );
    defineLineTag( '      - ', '<div class="paragraph dash-4">', '</div>' );
    defineLineTag( '* ', '<div class="paragraph bullet-1">', '</div>' );
    defineLineTag( '  * ', '<div class="paragraph bullet-2">', '</div>' );
    defineLineTag( '    * ', '<div class="paragraph bullet-3">', '</div>' );
    defineLineTag( '      * ', '<div class="paragraph bullet-4">', '</div>' );
    defineLineTag( '# ', '<div class="paragraph numbered-bullet-1"><div>', '</div><div>', '</div></div>' );
    defineLineTag( '  # ', '<div class="paragraph numbered-bullet-2"><div>', '</div><div>', '</div></div>' );
    defineLineTag( '    # ', '<div class="paragraph numbered-bullet-3"><div>', '</div><div>', '</div></div>' );
    defineLineTag( '      # ', '<div class="paragraph numbered-bullet-4"><div>', '</div><div>', '</div></div>' );
    defineLineTag( '', '<div class="paragraph">', '</div>' );

    defineDualTag( '**', '<b>', '</b>' );
    defineDualTag( '%%', '<i>', '</i>' );
    defineDualTag( '__', '<u>', '</u>' );
    defineDualTag( ',,', '<sub>', '</sub>' );
    defineDualTag( '^^', '<sup>', '</sup>' );

    defineTag( '~', '&nbsp;' );
    defineTag( '¦', '<wbr/>' );
    defineTag( '§', '<br/>' );
    defineTag( '¶', '<br class="linebreak"/>' );
    defineTag( '((', '<a class="link" href="' );
    defineTag( ')(', '" target="_blank">' );
    defineTag( '))', '</a>' );
    defineTag( '¬', '' );

    defineColorTag( 'red' );
    defineColorTag( 'green', '#0F0' );

    var processedText = getProcessedText( '**bold** %%italics%% __underlined__ ~¦§¶ ((https://dailykitten.com)(Daily Kitten))' );
    print( processedText );
    checkResult( processedText, '<b>bold</b> <i>italics</i> <u>underlined</u> &nbsp;<wbr/><br/><br class="linebreak"/> <a class="link" href="https://dailykitten.com" target="_blank">Daily Kitten</a>' );

    processedText = getProcessedMultilineText( '! **bold**\n!! %%italics%%\n__underlined__' );
    print( processedText );
    checkResult( processedText, '<div class="paragraph title-1"><b>bold</b></div>\n<div class="paragraph title-2"><i>italics</i></div>\n<div class="paragraph"><u>underlined</u></div>' );

    processedText = getProcessedMultilineText( '- dash\n  - dash\n* bullet\n  * bullet\n# 1. numbered bullet\n  # a. numbered bullet' );
    print( processedText );
    checkResult( processedText, '<div class="paragraph dash-1">dash</div>\n<div class="paragraph dash-2">dash</div>\n<div class="paragraph bullet-1">bullet</div>\n<div class="paragraph bullet-2">bullet</div>\n<div class="paragraph numbered-bullet-1"><div>1.</div><div>numbered bullet</div></div>\n<div class="paragraph numbered-bullet-2"><div>a.</div><div>numbered bullet</div></div>' );

    print( 'All tests passed!' );
}

// -- STATEMENTS

void main() {
    runTests();
}

