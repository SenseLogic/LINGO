
// -- VARIABLES

export let
    processedLineTagArray = [],
    processedDualTagArray = [],
    processedTagArray = [];

// -- FUNCTIONS

export function defineLineTag(
    name,
    openingDefinition,
    innerDefinition,
    closingDefinition = ''
    )
{
    if ( closingDefinition === '' )
    {
        closingDefinition = innerDefinition;
        innerDefinition = '';
    }

    processedLineTagArray.push(
        {
            name,
            openingDefinition,
            innerDefinition,
            closingDefinition
        }
        );
}

// ~~

export function defineDualTag(
    name,
    openingDefinition,
    closingDefinition
    )
{
    processedDualTagArray.push(
        {
            name,
            openingDefinition,
            closingDefinition
        }
        );
}

// ~~

export function defineTag(
    name,
    definition
    )
{
    processedTagArray.push(
        {
            name,
            definition
        }
        );
}

// ~~

export function defineColorTag(
    name,
    color = ''
    )
{
    if ( color === '' )
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

export function getProcessedText(
    text
    )
{
    for ( let processedDualTag of processedDualTagArray )
    {
        let partArray = text.split( processedDualTag.name );
        let partCount = partArray.length;

        for ( let partIndex = 0;
              partIndex + 1 < partCount;
              partIndex += 2 )
        {
            partArray[ partIndex ] += processedDualTag.openingDefinition;
            partArray[ partIndex + 1 ] += processedDualTag.closingDefinition;
        }

        text = partArray.join( '' );
    }

    for ( let processedTag of processedTagArray )
    {
        text = text.replaceAll( processedTag.name, processedTag.definition );
    }

    return text;
}

// ~~

export function getProcessedMultilineText(
    text
    )
{
    let processedLineTagCount = processedLineTagArray.length;

    if ( processedLineTagCount > 0 )
    {
        let lineArray = text.replaceAll( '\r', '' ).split( '\n' );
        let lineCount = lineArray.length;

        for ( let lineIndex = 0;
              lineIndex < lineCount;
              ++lineIndex )
        {
            let line = lineArray[ lineIndex ];

            while ( line.startsWith( '\n' ) )
            {
                line = line.slice( 1 );
            }

            for ( let processedLineTag of processedLineTagArray )
            {
                if ( line.startsWith( processedLineTag.name ) )
                {
                    if ( processedLineTag.innerDefinition === '' )
                    {
                        lineArray[ lineIndex ]
                            = processedLineTag.openingDefinition
                              + line.slice( processedLineTag.name.length )
                              + processedLineTag.closingDefinition;
                    }
                    else
                    {
                        let spaceCharacterIndex = line.indexOf( ' ', processedLineTag.name.length );

                        if ( spaceCharacterIndex >= 0 )
                        {
                            lineArray[ lineIndex ]
                                = processedLineTag.openingDefinition
                                  + line.slice( processedLineTag.name.length, spaceCharacterIndex )
                                  + processedLineTag.innerDefinition
                                  + line.slice( spaceCharacterIndex + 1 )
                                  + processedLineTag.closingDefinition;
                        }
                        else
                        {
                            lineArray[ lineIndex ]
                                = processedLineTag.openingDefinition
                                  + line.slice( processedLineTag.name.length )
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
