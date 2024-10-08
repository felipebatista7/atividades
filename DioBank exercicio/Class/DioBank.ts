export abstract class DioAccount{
  private name:string;
  private readonly accountNumber:number;
  private balance:number=0;
  private status: boolean = true;

  constructor(name:string, accountNumber:number){
    this.name= name;
    this.accountNumber = accountNumber;
  }

  setName= (name:string):void =>{
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName=():string =>{
    return this.name;
  }

  deposit= (value:number):void=>{
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Você depositou ${value}`);
    }else{
      console.log('Conta inativa!');
    }
  }

  withdraw=(value:number):void=>{
    if(this.validateStatus() && this.getBalance() > value){
      this.balance -= value; 
      console.log(`Você sacou ${value}`);
    }else{
      console.log('Você não pode sacar');
    }
  }

  getBalance= ():number =>{
    return this.balance;
  }

  protected setBalance=(value:number):void=>{
    this.balance = value;
  }

  protected validateStatus=():boolean =>{
    if(this.status){
      return this.status;
    } 

    throw new Error('Conta não está habilitada');
  }

}