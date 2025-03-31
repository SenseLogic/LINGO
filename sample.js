// -- IMPORTS

import
    {
        defineTag,
        defineDualTag,
        getLocalizedText,
        getProcessedLocalizedText,
        setCountryCode,
        setLanguageCode,
        setLanguageSeparator
    } from './index.js';

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

// -- STATEMENTS

setLanguageSeparator( '\n¨' );

let multilingualText =
    'trunk\n'
    + '¨en-UK,en--OC:boot\n'
    + '¨fr:coffre\n'
    + '¨pt:mala\n'
    + '¨pt-BR:porta-malas';

setLanguageCode( 'en' );
setCountryCode( 'US' );
checkResult( getLocalizedText( multilingualText ), 'trunk' );

setLanguageCode( 'en' );
setCountryCode( 'UK' );
checkResult( getLocalizedText( multilingualText ), 'boot' );

setLanguageCode( 'en' );
setCountryCode( 'AU' );
checkResult( getLocalizedText( multilingualText ), 'boot' );

setLanguageCode( 'fr' );
setCountryCode( 'FR' );
checkResult( getLocalizedText( multilingualText ), 'coffre' );

setLanguageCode( 'pt' );
setCountryCode( 'PT' );
checkResult( getLocalizedText( multilingualText ), 'mala' );

setLanguageCode( 'pt' );
setCountryCode( 'BR' );
checkResult( getLocalizedText( multilingualText ), 'porta-malas' );

let conditionalMultilingualText =
    '{count} bathrooms\n'
    + '¨en?count=1:{count} bathroom\n'
    + '¨fr:{count} salles de bain\n'
    + '¨fr?count<2:{count} salle de bain';

setLanguageCode( 'en' );
setCountryCode( 'US' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 0 } ), '0 bathrooms' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 1 } ), '1 bathroom' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 2 } ), '2 bathrooms' );

setLanguageCode( 'fr' );
setCountryCode( 'FR' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 0 } ), '0 salle de bain' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 1 } ), '1 salle de bain' );
checkResult( getLocalizedText( conditionalMultilingualText, { count: 2 } ), '2 salles de bain' );

setLanguageSeparator( '¨' );

multilingualText = 'A text<br>on two lines.¨fr:Un texte<br>sur deux lignes.';

setLanguageCode( 'en' );
checkResult( getLocalizedText( multilingualText ), 'A text<br>on two lines.' );

setLanguageCode( 'fr' );
checkResult( getLocalizedText( multilingualText ), 'Un texte<br>sur deux lignes.' );

defineTag( '§', '<br/>' );
defineDualTag( '**', '<b>', '</b>' );

multilingualText = 'A **bold** text§on two lines.¨fr:Un texte en **gras**§sur deux lignes.';

setLanguageCode( 'en' );
checkResult( getProcessedLocalizedText( multilingualText ), 'A <b>bold</b> text<br/>on two lines.' );

setLanguageCode( 'fr' );
checkResult( getProcessedLocalizedText( multilingualText ), 'Un texte en <b>gras</b><br/>sur deux lignes.' );
