import { DioAccount } from "./DioBank";

export class SpecialAccount extends DioAccount{
  constructor(name:string, accountNumber:number){
    super(name, accountNumber);
  }

  deposit= (value: number):void =>{
    let newBalance:number;
    if(this.validateStatus()){
       newBalance= value + this.getBalance() + 10;
       this.setBalance(newBalance);
    }
  }
}