import { DioAccount } from "./DioBank";

export class CompanyAccount extends DioAccount{
  constructor(name:string, accountNumber:number){
    super(name, accountNumber);
  }

  getLoan=(value:number):void=>{
    let newBalance:number;

    if(this.validateStatus()){
      newBalance = this.getBalance() + value;
      this.setBalance(newBalance);
      console.log(`Voce pegou um emprestimo ${newBalance}`);
    }else{
      console.log('Voce não pode fazer o emprestimo')
    }
  }
}