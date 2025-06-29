// -- FUNCTIONS

String getUnaccentedCharacter(
    String character,
    [String languageCode = '',
    bool nextCharacterIsLowerCase = false]
    )
{
    switch ( character )
    {
        case 'á':
        case 'à':
        case 'â':
        {
            return 'a';
        }
        case 'ä':
        {
            if ( languageCode == 'de' )
            {
                return 'ae';
            }
            else
            {
                return 'a';
            }
        }
        case 'é':
        case 'è':
        case 'ê':
        case 'ë':
        {
            return 'e';
        }
        case 'í':
        case 'ì':
        case 'î':
        case 'ï':
        {
            return 'i';
        }
        case 'ó':
        case 'ò':
        case 'ô':
        {
            return 'o';
        }
        case 'ö':
        {
            if ( languageCode == 'de' )
            {
                return 'oe';
            }
            else
            {
                return 'o';
            }
        }
        case 'œ' :
        {
            return 'oe';
        }
        case 'ú':
        case 'ù':
        case 'û':
        {
            return 'u';
        }
        case 'ü':
        {
            if ( languageCode == 'de' )
            {
                return 'ue';
            }
            else
            {
                return 'u';
            }
        }
        case 'ç':
        {
            return 'c';
        }
        case 'ñ':
        {
            return 'n';
        }
        case 'ß':
        {
            return 'ss';
        }
        case 'Á':
        case 'À':
        case 'Â':
        {
            return 'A';
        }
        case 'Ä':
        {
            if ( languageCode == 'de' )
            {
                if ( nextCharacterIsLowerCase )
                {
                    return 'Ae';
                }
                else
                {
                    return 'AE';
                }
            }
            else
            {
                return 'A';
            }
        }
        case 'É':
        case 'È':
        case 'Ê':
        case 'Ë':
        {
            return 'E';
        }
        case 'Í':
        case 'Ì':
        case 'Î':
        case 'Ï':
        {
            return 'I';
        }
        case 'Ó':
        case 'Ò':
        case 'Ô':
        {
            return 'O';
        }
        case 'Ö':
        {
            if ( languageCode == 'de' )
            {
                if ( nextCharacterIsLowerCase )
                {
                    return 'Oe';
                }
                else
                {
                    return 'OE';
                }
            }
            else
            {
                return 'O';
            }
        }
        case 'Œ' :
        {
            return 'Oe';
        }
        case 'Ú':
        case 'Ù':
        case 'Û':
        {
            return 'U';
        }
        case 'Ü':
        {
            if ( languageCode == 'de' )
            {
                if ( nextCharacterIsLowerCase )
                {
                    return 'Ue';
                }
                else
                {
                    return 'UE';
                }
            }
            else
            {
                return 'U';
            }
        }
        case 'Ç':
        {
            return 'C';
        }
        case 'Ñ':
        {
            return 'N';
        }
        case 'ẞ' :
        {
            if ( nextCharacterIsLowerCase )
            {
                return 'Ss';
            }
            else
            {
                return 'SS';
            }
        }
        default:
        {
            return character;
        }
    }
}

// ~~

String getUnaccentedText(
    String text,
    [String languageCode = '']
    )
{
    List<String> unaccentedTextArray = [];

    for ( int characterIndex = 0;
          characterIndex < text.length;
          ++characterIndex )
    {
        unaccentedTextArray.add( getUnaccentedCharacter( text[characterIndex], languageCode ) );
    }

    return unaccentedTextArray.join( '' );
}
