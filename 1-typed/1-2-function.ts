{
    // JavaScript
    function jsAdd(num1, num2){
        return num1 + num2;
    }

    //TypeScript
    function add(num1:number, num2:number): number{
        return num1 + num2;
    }

    //JavaScript
    function jsFunction(id){
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    //TypeScript
    function tsFunction(id:string): Promise<number>{
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // JavaScript => TypeScript
    // Optional parameter: lastName?:string
    function printName(firstName: string, lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter, message:string = 'default message'
    function printMessage(message:string = 'default message'){
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumbers(...numbers:number[]):number{
        return numbers.reduce((a,b) => a+b)
    }
    console.log(addNumbers(1,2))
    console.log(addNumbers(1,2,3))
    console.log(addNumbers(1,2,3,4))
}