// -- IMPORTS

import
    {
        defineColorTag,
        defineDualTag,
        defineLineTag,
        defineTag,
        getBrowserLanguageCode,
        getFormattedArrayText,
        getFormattedCountryName,
        getFormattedCurrencyName,
        getFormattedDateText,
        getFormattedNumberText,
        getFormattedLanguageName,
        getFormattedTimeText,
        getLocalizedText,
        getProcessedMultilineText,
        getProcessedText,
        setDefaultLanguageCode,
        setCountryCode,
        setLanguageCode,
        setLanguageSeparator
    }
    from './index.js';

// -- FUNCTIONS

function checkResult(
    value,
    expectedValue
    )
{
    console.log( 'Value :', JSON.stringify( value ) );
    console.log( 'Expected value :', JSON.stringify( expectedValue ) );

    if ( value !== expectedValue )
    {
        throw new Error( 'Invalid value : ' + JSON.stringify( value ) );
    }
}

// ~~

function runTests(
    )
{
    console.log( 'Testing : getFormattedNumberText' );

    setLanguageCode( 'en' );
    checkResult( getFormattedNumberText( 1234567.89 ), '1,234,567.89' );
    checkResult( getFormattedNumberText( 1234567.89, 'currency', 'USD' ), '$1,234,567.89' );
    checkResult( getFormattedNumberText( 1234567.89, 'percent' ), '123,456,789%' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedNumberText( 1234567.89 ), '1 234 567,89' );
    checkResult( getFormattedNumberText( 1234567.89, 'currency', 'EUR' ), '1 234 567,89 €' );
    checkResult( getFormattedNumberText( 0.89, 'percent' ), '89 %' );

    console.log( 'Testing : getFormattedDateText' );

    let date = new Date( '2024-08-08' );

    setLanguageCode( 'en' );
    checkResult( getFormattedDateText( date, undefined, 'GMT' ), '8/8/2024' );
    checkResult( getFormattedDateText( date, undefined, 'UTC' ), '8/8/2024' );
    checkResult( getFormattedDateText( date, 'full', 'GMT' ), 'Thursday, August 8, 2024' );
    checkResult( getFormattedDateText( date, 'full', 'UTC' ), 'Thursday, August 8, 2024' );
    checkResult( getFormattedDateText( date, undefined, 'GMT', 'numeric', 'long', 'numeric', 'long' ), 'Thursday, August 8, 2024' );
    checkResult( getFormattedDateText( date, undefined, 'UTC', 'numeric', 'long', 'numeric', 'long' ), 'Thursday, August 8, 2024' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedDateText( date, undefined, 'GMT' ), '08/08/2024' );
    checkResult( getFormattedDateText( date, undefined, 'UTC' ), '08/08/2024' );
    checkResult( getFormattedDateText( date, 'full', 'GMT' ), 'jeudi 8 août 2024' );
    checkResult( getFormattedDateText( date, 'full', 'UTC' ), 'jeudi 8 août 2024' );
    checkResult( getFormattedDateText( date, undefined, 'GMT', 'numeric', 'long', 'numeric', 'long' ), 'jeudi 8 août 2024' );
    checkResult( getFormattedDateText( date, undefined, 'UTC', 'numeric', 'long', 'numeric', 'long' ), 'jeudi 8 août 2024' );

    console.log( 'Testing : getFormattedTimeText' );

    let time = new Date( '2024-08-08T14:30:00Z' );

    setLanguageCode( 'en' );
    checkResult( getFormattedTimeText( time, 'short', 'GMT' ), '2:30 PM' );
    checkResult( getFormattedTimeText( time, 'short', 'UTC' ), '2:30 PM' );
    checkResult( getFormattedTimeText( time, 'medium', 'GMT' ), '2:30:00 PM' );
    checkResult( getFormattedTimeText( time, 'medium', 'UTC' ), '2:30:00 PM' );
    checkResult( getFormattedTimeText( time, 'long', 'GMT' ), '2:30:00 PM UTC' );
    checkResult( getFormattedTimeText( time, 'long', 'UTC' ), '2:30:00 PM UTC' );
    checkResult( getFormattedTimeText( time, 'full', 'GMT' ), '2:30:00 PM Coordinated Universal Time' );
    checkResult( getFormattedTimeText( time, 'full', 'UTC' ), '2:30:00 PM Coordinated Universal Time' );
    checkResult( getFormattedTimeText( time, undefined, 'UTC', '2-digit', '2-digit', '2-digit' ), '02:30:00 PM' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedTimeText( time, 'short', 'GMT' ), '14:30' );
    checkResult( getFormattedTimeText( time, 'short', 'UTC' ), '14:30' );
    checkResult( getFormattedTimeText( time, 'medium', 'GMT' ), '14:30:00' );
    checkResult( getFormattedTimeText( time, 'medium', 'UTC' ), '14:30:00' );
    checkResult( getFormattedTimeText( time, 'long', 'GMT' ), '14:30:00 UTC' );
    checkResult( getFormattedTimeText( time, 'long', 'UTC' ), '14:30:00 UTC' );
    checkResult( getFormattedTimeText( time, 'full', 'GMT' ), '14:30:00 temps universel coordonné' );
    checkResult( getFormattedTimeText( time, 'full', 'UTC' ), '14:30:00 temps universel coordonné' );
    checkResult( getFormattedTimeText( time, undefined, 'GMT', '2-digit', '2-digit', '2-digit' ), '14:30:00' );
    checkResult( getFormattedTimeText( time, undefined, 'UTC', '2-digit', '2-digit', '2-digit' ), '14:30:00' );

    console.log( 'Testing : getFormattedCountryName' );

    setLanguageCode( 'en' );
    checkResult( getFormattedCountryName( 'US' ), 'United States' );
    checkResult( getFormattedCountryName( 'FR' ), 'France' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedCountryName( 'US' ), 'États-Unis' );
    checkResult( getFormattedCountryName( 'FR' ), 'France' );

    console.log( 'Testing : getFormattedLanguageName' );

    setLanguageCode( 'en' );
    checkResult( getFormattedLanguageName( 'en' ), 'English' );
    checkResult( getFormattedLanguageName( 'fr' ), 'French' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedLanguageName( 'en' ), 'anglais' );
    checkResult( getFormattedLanguageName( 'fr' ), 'français' );

    console.log( 'Testing : getFormattedCurrencyName' );

    setLanguageCode( 'en' );
    checkResult( getFormattedCurrencyName( 'USD' ), 'US Dollar' );
    checkResult( getFormattedCurrencyName( 'EUR' ), 'Euro' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedCurrencyName( 'USD' ), 'dollar des États-Unis' );
    checkResult( getFormattedCurrencyName( 'EUR' ), 'euro' );

    console.log( 'Testing : getFormattedArrayText' );

    let array = [ 'apple', 'banana', 'cherry' ];

    setLanguageCode( 'en' );
    checkResult( getFormattedArrayText( array ), 'apple, banana, and cherry' );
    checkResult( getFormattedArrayText( array, 'narrow' ), 'apple, banana, cherry' );
    checkResult( getFormattedArrayText( array, 'long', 'disjunction' ), 'apple, banana, or cherry' );

    setLanguageCode( 'fr' );
    checkResult( getFormattedArrayText( array ), 'apple, banana et cherry' );
    checkResult( getFormattedArrayText( array, 'narrow' ), 'apple, banana, cherry' );
    checkResult( getFormattedArrayText( array, 'long', 'disjunction' ), 'apple, banana ou cherry' );

    console.log( 'Testing : getBrowserLanguageCode' );

    let browserLanguageText = 'fr-FR,de;q=0.8,en-US;q=0.5,en-GB;q=0.3,es;q=0.2,pt-BR;q=0.1,ru;q=0.1,ja;q=0.1,it;q=0.1,nl-NL;q=0.1';

    let browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'en', 'fr', 'de' ], '-' );
    checkResult( browserLanguageCode, 'fr' );

    browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'de', 'fr' ], '-' );
    checkResult( browserLanguageCode, 'fr' );

    browserLanguageCode = getBrowserLanguageCode( browserLanguageText, [ 'da' ] );
    checkResult( browserLanguageCode, '' );

    console.log( 'Testing : getLocalizedText' );

    setLanguageSeparator( '¨' );
    setDefaultLanguageCode( 'en' );

    let multilingualText = 'trunk¨en-UK,en--OC:boot¨fr:coffre¨pt:mala¨pt-BR:porta-malas';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );
    let localizedText = getLocalizedText( multilingualText );
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

    localizedText = getLocalizedText( multilingualText, { count: 0 } );
    checkResult( localizedText, '0 bathrooms' );

    localizedText = getLocalizedText( multilingualText, { count: 1 } );
    checkResult( localizedText, '1 bathroom' );

    localizedText = getLocalizedText( multilingualText, { count: 2 } );
    checkResult( localizedText, '2 bathrooms' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );

    localizedText = getLocalizedText( multilingualText, { count: 0 } );
    checkResult( localizedText, '0 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { count: 1 } );
    checkResult( localizedText, '1 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { count: 2 } );
    checkResult( localizedText, '2 salles de bain' );

    multilingualText = '¨en?count=0,count>=2:{count} bathrooms¨en?count=1:{count} bathroom¨fr:{count} salles de bain¨fr?count=0,count=1:{count} salle de bain';

    setLanguageCode( 'en' );
    setCountryCode( 'US' );

    localizedText = getLocalizedText( multilingualText, { count: 0 } );
    checkResult( localizedText, '0 bathrooms' );

    localizedText = getLocalizedText( multilingualText, { count: 1 } );
    checkResult( localizedText, '1 bathroom' );

    localizedText = getLocalizedText( multilingualText, { count: 2 } );
    checkResult( localizedText, '2 bathrooms' );

    setLanguageCode( 'fr' );
    setCountryCode( 'FR' );

    localizedText = getLocalizedText( multilingualText, { count: 0 } );
    checkResult( localizedText, '0 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { count: 1 } );
    checkResult( localizedText, '1 salle de bain' );

    localizedText = getLocalizedText( multilingualText, { count: 2 } );
    checkResult( localizedText, '2 salles de bain' );

    console.log( 'Testing : getProcessedText' );
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

    let processedText = getProcessedText( '**bold** %%italics%% __underlined__ ~¦§¶ ((https://dailykitten.com)(Daily Kitten))' );
    console.log( processedText );
    checkResult( processedText, '<b>bold</b> <i>italics</i> <u>underlined</u> &nbsp;<wbr/><br/><br class="linebreak"/> <a class="link" href="https://dailykitten.com" target="_blank">Daily Kitten</a>' );

    processedText = getProcessedMultilineText( '! **bold**\n!! %%italics%%\n__underlined__' );
    console.log( processedText );
    checkResult( processedText, '<div class="paragraph title-1"><b>bold</b></div>\n<div class="paragraph title-2"><i>italics</i></div>\n<div class="paragraph"><u>underlined</u></div>' );

    processedText = getProcessedMultilineText( '- dash\n  - dash\n* bullet\n  * bullet\n# 1. numbered bullet\n  # a. numbered bullet' );
    console.log( processedText );
    checkResult( processedText, '<div class="paragraph dash-1">dash</div>\n<div class="paragraph dash-2">dash</div>\n<div class="paragraph bullet-1">bullet</div>\n<div class="paragraph bullet-2">bullet</div>\n<div class="paragraph numbered-bullet-1"><div>1.</div><div>numbered bullet</div></div>\n<div class="paragraph numbered-bullet-2"><div>a.</div><div>numbered bullet</div></div>' );

    console.log( 'All tests passed!' );
}

// -- STATEMENTS

runTests();

