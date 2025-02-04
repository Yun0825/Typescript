{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
    */
    
    //number
    const num:number = 123

    // string
    const str:string = "hello World"
    
    // boolean
    const boal:boolean = false;

    // undefined(값이 비어 있는지, 비어있지 않은지 결정되지 않은 상태)
    let name: undefined
    
    /* name = "hello"*/ // error
    let age: number | undefined; // 보통 이런식으로 많이 사용
    age = undefined;
    age = 1;

    function find(): number | undefined{
        return undefined;
    }
    
    // null(값이 비어 있는 상태)
    let person: null;
    let person2: string | null;

    // unknown, 가능하면 쓰지 않는게 좋음(Javascript에서 return하는 타입이 모를때 사용)
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any, 가능하면 쓰지 않는게 좋음
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(){
        console.log('hello')
        return; // return 뒤에 void가 생략됨
    }

    let unusable: void = undefined // void는 undefine 밖에 할당이 안되는데 굳이 이렇게 쓰지 않음

    // never
    function throwError(message:string): never{
        // message -> server(log), error message를 server에 로그로 남김
        throw new Error(message);
        //return; // never는 절대 return 할 수 없음을 의미
    }

    // objet: object;
    let obj:object;
    function acceoptSomeObject(obj: object){}
    acceoptSomeObject({name: 'ellie'});
    acceoptSomeObject({name: 'dog'});
}