(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isFruitColorRed( fruit: string ): boolean {
        
        const redFruits = ['manzana', 'cereza', 'ciruela'];
            return redFruits.includes(fruit);
        
            
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        const fruitsByColor: Record<string, string[]> = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas'],
    };
        if ( !fruitsByColor[color] ) {
        throw Error('the color must be: red, yellow, purple');
    }

    return fruitsByColor[color];
}

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function getWorkingSteps(): string {
        if( isFirstStepWorking ) return 'First step broken.';

        if( isSecondStepWorking ) return 'Second step broken.';

        if( isThirdStepWorking  ) return 'Third step broken.';

        if( isFourthStepWorking  ) return 'Fourth step broken.';

        return 'Working properly!';
    }

    // isRedFruit
    console.log({ isRedFruit: isFruitColorRed('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isFruitColorRed('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: getWorkingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();