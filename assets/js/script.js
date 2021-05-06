//CHIFFRES
        const numbersButtons = document.querySelectorAll('button[data-type="numbers"]');
        let myOperation;

        numbersButtons.forEach(element => {
            element.addEventListener('click', function () {
                result.value += this.dataset.number
            })
        })

        //OPERATEURS/RESULTAT
        const operatorsButtons = document.querySelectorAll('button[data-type="operator"]');
        console.log(operatorsButtons);

        operatorsButtons.forEach(element => {
            element.addEventListener('click', function () {
                //result.value va stacker la valeur de nb1, result.value='' la supprime de l'input
                myOperation = parseFloat(result.value) + this.dataset.operator
                result.value = ''
                console.log(myOperation)
            })
        })


        egal.addEventListener('click', function () {

            myOperation = myOperation + result.value;
            myResult = eval(myOperation);
            result.value = myResult
        })


        //EFFACER
        effacer.addEventListener('click', function () {
            result.value = ''
        })

        //