import { CompanyAccount } from './Class/CompanyAccount';
import { PeopleAccount } from './Class/PeopleAccount';
import { SpecialAccount } from './Class/SpecialAccout';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Felipe', 1001);
console.log(peopleAccount);
peopleAccount.deposit(200);
peopleAccount.getBalance();
peopleAccount.withdraw(300);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(100);
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getName());


const companyAccount: CompanyAccount = new CompanyAccount('Dio', 1002);
console.log(companyAccount);
companyAccount.deposit(200)
companyAccount.getBalance();
companyAccount.withdraw(300);
console.log(companyAccount.getBalance());
companyAccount.withdraw(100);
console.log(companyAccount.getBalance());
console.log(companyAccount.getName());
companyAccount.getLoan(3000);
console.log(companyAccount.getBalance());

const specialAccount : SpecialAccount = new SpecialAccount('Especial', 1003);
console.log(specialAccount);
specialAccount.deposit(200);
specialAccount.getBalance();
specialAccount.withdraw(300);
console.log(specialAccount.getBalance());
specialAccount.withdraw(100);
console.log(specialAccount.getBalance());
console.log(specialAccount.getName());