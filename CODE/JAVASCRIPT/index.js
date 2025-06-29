// -- IMPORTS

import
    {
        getUnaccentedCharacter,
        getUnaccentedText
    } from './conversion.js';
import
    {
        getBrowserLanguageCode,
        getContinentCode,
        getContinentCodeFromCountryCode,
        getContinentSlugFromContinentCode,
        getCountryCode,
        getDefaultLanguageCode,
        getLanguageCode,
        getLanguageDecimalSeparator,
        getLanguageSeparator,
        getLanguageTag,
        getLocalizedText,
        getLocalizedTextBySlug,
        getMultilingualText,
        getNextLanguageTag,
        getSubstitutedText,
        getSubstitutionPrefix,
        getSubstitutionSuffix,
        getTextBySlug,
        getTranslatedCountryName,
        getTranslatedCurrencyName,
        getTranslatedDate,
        getTranslatedLanguageName,
        getTranslatedNumber,
        getTranslatedText,
        getTranslatedTime,
        getTranslationArray,
        getTrimmedLanguageTag,
        getUntranslatedText,
        isMultilingualText,
        matchesConditionSpecifier,
        matchesLanguageSpecifier,
        matchesTranslationSpecifier,
        matchesValueSpecifier,
        setContinentCode,
        setCountryCode,
        setDefaultLanguageCode,
        setLanguageCode,
        setLanguageSeparator,
        setLanguageTag,
        setSubstitutionPrefix,
        setSubstitutionSuffix,
        setTextBySlug,
        updateLanguageTag
    } from './localization.js';
import
    {
        defineLineTag,
        defineDualTag,
        defineTag,
        defineColorTag,
        getProcessedText,
        getProcessedMultilineText
    } from './processing.js';

// -- FUNCTIONS

export function getProcessedLocalizedText(
    text,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    text = getLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );

    return getProcessedText( text );
}

// ~~

export function getProcessedLocalizedMultilineText(
    text,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    text = getLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );

    return getProcessedMultilineText( text );
}
// ~~

export function getProcessedLocalizedTextBySlug(
    textSlug,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    if ( textBySlugMap.has( textSlug ) )
    {
        let text = textBySlugMap.get( textSlug );

        return getProcessedLocalizedText( text, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        console.warn( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}

// ~~

export function getProcessedLocalizedMultilineTextBySlug(
    textSlug,
    valueByNameMap,
    languageTag,
    defaultLanguageTag
    )
{
    if ( textBySlugMap.has( textSlug ) )
    {
        let text = textBySlugMap.get( textSlug );

        return getProcessedLocalizedMultilineText( text, valueByNameMap, languageTag, defaultLanguageTag );
    }
    else
    {
        console.warn( 'Missing text slug : ' + textSlug );

        return textSlug;
    }
}

// -- EXPORTS

export
    {
        getUnaccentedCharacter,
        getUnaccentedText,
        setTextBySlug,
        getTextBySlug,
        getContinentCodeFromCountryCode,
        getContinentSlugFromContinentCode,
        setLanguageSeparator,
        getLanguageSeparator,
        setLanguageTag,
        getLanguageTag,
        updateLanguageTag,
        setContinentCode,
        getContinentCode,
        setCountryCode,
        getCountryCode,
        setLanguageCode,
        getLanguageCode,
        setDefaultLanguageCode,
        getDefaultLanguageCode,
        setSubstitutionPrefix,
        getSubstitutionPrefix,
        setSubstitutionSuffix,
        getSubstitutionSuffix,
        getBrowserLanguageCode,
        getTrimmedLanguageTag,
        getUntranslatedText,
        matchesLanguageSpecifier,
        matchesValueSpecifier,
        matchesConditionSpecifier,
        matchesTranslationSpecifier,
        getSubstitutedText,
        getTranslatedCountryName,
        getTranslatedCurrencyName,
        getTranslatedDate,
        getTranslatedLanguageName,
        getTranslatedNumber,
        getTranslatedText,
        getTranslatedTime,
        getLanguageDecimalSeparator,
        isMultilingualText,
        getTranslationArray,
        getNextLanguageTag,
        getMultilingualText,
        getLocalizedText,
        getLocalizedTextBySlug,
        defineLineTag,
        defineDualTag,
        defineTag,
        defineColorTag,
        getProcessedText,
        getProcessedMultilineText
    };
