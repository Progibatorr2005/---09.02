namespace Company {
    export function isEmployeeEmail(email: string, domain: string): boolean {
      return email.endsWith(`@${domain}`);
    }
  }
  
  console.log(Company.isEmployeeEmail('john.doe@example.com', 'example.com')); // true
  console.log(Company.isEmployeeEmail('jane.doe@another.com', 'example.com')); // false
  