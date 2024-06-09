class Singleton {
      private static instance=null;
      private constructor(){

      }

      public static getInstance(){
            if(this.instance!==null) return this.instance;
            else return new Singleton();
      }

}

export class Client{
      constructor(){

      }

      main(){
            let singletonObj= Singleton.getInstance();
            console.log('SingleTon Obj is :',singletonObj);
      }
}