// -- IMPORTS

import 'conversion.dart';
import 'localization.dart';
import 'processing.dart';

// -- EXPORTS

export 'conversion.dart';
export 'localization.dart';
export 'processing.dart';

// -- FUNCTIONS

String getProcessedLocalizedText(
    String text,
    [Map<String, dynamic>? valueByNameMap,
    String? languageTag,
    String? defaultLanguageTag]
    )
{
    text = getLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );

    return getProcessedText( text );
}

// ~~

String getProcessedLocalizedMultilineText(
    String text,
    [Map<String, dynamic>? valueByNameMap,
    String? languageTag,
    String? defaultLanguageTag]
    )
{
    text = getLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );

    return getProcessedMultilineText( text );
}

// ~~

String getProcessedLocalizedTextBySlug(
    String textSlug,
    [Map<String, dynamic>? valueByNameMap,
    String? languageTag,
    String? defaultLanguageTag]
    )
{
    if ( textBySlugMap.containsKey( textSlug ) )
    {
        String text = textBySlugMap[textSlug]!;

        return getProcessedLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        print( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}

// ~~

String getProcessedLocalizedMultilineTextBySlug(
    String textSlug,
    [Map<String, dynamic>? valueByNameMap,
    String? languageTag,
    String? defaultLanguageTag]
    )
{
    if ( textBySlugMap.containsKey( textSlug ) )
    {
        String text = textBySlugMap[textSlug]!;

        return getProcessedLocalizedMultilineText( text, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        print( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}
