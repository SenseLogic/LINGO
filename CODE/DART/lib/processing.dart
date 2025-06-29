// -- CLASSES

class _ProcessedLineTag {
    final String name;
    final String openingDefinition;
    final String innerDefinition;
    final String closingDefinition;

    _ProcessedLineTag(this.name, this.openingDefinition, this.innerDefinition, this.closingDefinition);
}

class _ProcessedDualTag {
    final String name;
    final String openingDefinition;
    final String closingDefinition;

    _ProcessedDualTag(this.name, this.openingDefinition, this.closingDefinition);
}

class _ProcessedTag {
    final String name;
    final String definition;

    _ProcessedTag(this.name, this.definition);
}

// -- VARIABLES

List<_ProcessedLineTag> processedLineTagArray = [];
List<_ProcessedDualTag> processedDualTagArray = [];
List<_ProcessedTag> processedTagArray = [];

// -- FUNCTIONS

void defineLineTag(
    String name,
    String openingDefinition,
    String innerDefinition,
    [String closingDefinition = '']
    )
{
    if ( closingDefinition == '' )
    {
        closingDefinition = innerDefinition;
        innerDefinition = '';
    }

    processedLineTagArray.add(
        _ProcessedLineTag(
            name,
            openingDefinition,
            innerDefinition,
            closingDefinition
        )
    );
}

// ~~

void defineDualTag(
    String name,
    String openingDefinition,
    String closingDefinition
    )
{
    processedDualTagArray.add(
        _ProcessedDualTag(
            name,
            openingDefinition,
            closingDefinition
        )
    );
}

// ~~

void defineTag(
    String name,
    String definition
    )
{
    processedTagArray.add(
        _ProcessedTag(
            name,
            definition
        )
    );
}

// ~~

void defineColorTag(
    String name,
    [String color = '']
    )
{
    if ( color == '' )
    {
        defineTag( '<' + name + '>', '<span class="color-' + name + '">' );
    }
    else
    {
        defineTag( '<' + name + '>', '<span style="color:' + color + '">' );
    }

    defineTag( '</' + name + '>', '</span>' );
}

// ~~

String getProcessedText(
    String text
    )
{
    for ( var processedDualTag in processedDualTagArray )
    {
        List<String> partArray = text.split( processedDualTag.name );
        int partCount = partArray.length;

        for ( int partIndex = 0;
              partIndex + 1 < partCount;
              partIndex += 2 )
        {
            partArray[ partIndex ] += processedDualTag.openingDefinition;
            partArray[ partIndex + 1 ] += processedDualTag.closingDefinition;
        }

        text = partArray.join( '' );
    }

    for ( var processedTag in processedTagArray )
    {
        text = text.replaceAll( processedTag.name, processedTag.definition );
    }

    return text;
}

// ~~

String getProcessedLineText(
    String text
    )
{
    List<String> lineArray = text.split( '\n' );
    int lineCount = lineArray.length;

    for ( int lineIndex = 0;
          lineIndex < lineCount;
          ++lineIndex )
    {
        String line = lineArray[ lineIndex ];

        for ( var processedLineTag in processedLineTagArray )
        {
            if ( line.startsWith( processedLineTag.name ) )
            {
                if ( processedLineTag.innerDefinition == '' )
                {
                    lineArray[ lineIndex ]
                        = processedLineTag.openingDefinition
                          + line.substring( processedLineTag.name.length )
                          + processedLineTag.closingDefinition;
                }
                else
                {
                    int spaceCharacterIndex = line.indexOf( ' ', processedLineTag.name.length );

                    if ( spaceCharacterIndex >= 0 )
                    {
                        lineArray[ lineIndex ]
                            = processedLineTag.openingDefinition
                              + line.substring( processedLineTag.name.length, spaceCharacterIndex )
                              + processedLineTag.innerDefinition
                              + line.substring( spaceCharacterIndex + 1 )
                              + processedLineTag.closingDefinition;
                    }
                    else
                    {
                        lineArray[ lineIndex ]
                            = processedLineTag.openingDefinition
                              + line.substring( processedLineTag.name.length )
                              + processedLineTag.innerDefinition
                              + processedLineTag.closingDefinition;
                    }
                }
            }
        }
    }

    return lineArray.join( '\n' );
}

// ~~

String getProcessedMultilineText(
    String text
    )
{
    int processedLineTagCount = processedLineTagArray.length;

    if ( processedLineTagCount > 0 )
    {
        List<String> lineArray = text.replaceAll( '\r', '' ).split( '\n' );
        int lineCount = lineArray.length;

        for ( int lineIndex = 0;
              lineIndex < lineCount;
              ++lineIndex )
        {
            String line = lineArray[ lineIndex ];

            while ( line.startsWith( '\n' ) )
            {
                line = line.substring( 1 );
            }

            for ( var processedLineTag in processedLineTagArray )
            {
                if ( line.startsWith( processedLineTag.name ) )
                {
                    if ( processedLineTag.innerDefinition == '' )
                    {
                        lineArray[ lineIndex ]
                            = processedLineTag.openingDefinition
                              + line.substring( processedLineTag.name.length )
                              + processedLineTag.closingDefinition;
                    }
                    else
                    {
                        int spaceCharacterIndex = line.indexOf( ' ', processedLineTag.name.length );

                        if ( spaceCharacterIndex >= 0 )
                        {
                            lineArray[ lineIndex ]
                                = processedLineTag.openingDefinition
                                  + line.substring( processedLineTag.name.length, spaceCharacterIndex )
                                  + processedLineTag.innerDefinition
                                  + line.substring( spaceCharacterIndex + 1 )
                                  + processedLineTag.closingDefinition;
                        }
                        else
                        {
                            lineArray[ lineIndex ]
                                = processedLineTag.openingDefinition
                                  + line.substring( processedLineTag.name.length )
                                  + processedLineTag.innerDefinition
                                  + processedLineTag.closingDefinition;
                        }
                    }

                    break;
                }
            }
        }

        text = lineArray.join( '\n' );
    }

    return getProcessedText( text );
}
