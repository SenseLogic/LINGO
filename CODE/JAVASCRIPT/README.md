![](https://github.com/senselogic/LINGO/blob/master/LOGO/lingo.png)

# Lingo

Text localization and processing.

## Localization

Any string can be internationalized by starting additional translations with a language separator followed by a **language specifier**.

Translations are tested from **right to left**, the first translation being used by **default**.

A language specifier can contain one or several **language tags** separated by commas.

A language tag can optionally combine a **language code**, a **country code** and a **continent code**, separated by dashes : en, en-UK, -UK, en-AU, en--OC, --OC.

The continent code can be automatically deduced from the country code.

```javascript
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
```

Translations can also include variables, and use them to define additional **conditions**.

```javascript
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
```

## Processing

By default, translations can of course contain tags and entities :

```javascript
setLanguageSeparator( '¨' );

multilingualText = 'A text<br>on two lines.¨fr:Un texte<br>sur deux lignes.';

setLanguageCode( 'en' );
checkResult( getLocalizedText( multilingualText ), 'A text<br>on two lines.' );

setLanguageCode( 'fr' );
checkResult( getLocalizedText( multilingualText ), 'Un texte<br>sur deux lignes.' );
```

But they can also contain custom tags, that can be freely defined :

```javascript
defineTag( '§', '<br/>' );
defineDualTag( '**', '<b>', '</b>' );

multilingualText = 'A **bold** text§on two lines.¨fr:Un texte en **gras**§sur deux lignes.';

setLanguageCode( 'en' );
checkResult( getProcessedLocalizedText( multilingualText ), 'A <b>bold</b> text<br/>on two lines.' );

setLanguageCode( 'fr' );
checkResult( getProcessedLocalizedText( multilingualText ), 'Un texte en <b>gras</b><br/>sur deux lignes.' );
```

## Version

0.1

## Author

Eric Pelzer (ecstatic.coder@gmail.com).

## License

This project is licensed under the GNU Lesser General Public License version 3.

See the [LICENSE.md](LICENSE.md) file for details.
