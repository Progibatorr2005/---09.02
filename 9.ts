type User = {
    name: string;
    age: number;
  };
  
  function getOlderUser(user1: User, user2: User): User | null {
    if (user1.age > user2.age) {
      return user1;
    } else if (user2.age > user1.age) {
      return user2;
    }
    return null;
  }
  
  const user1 = { name: 'Petr', age: 8 };
  const user2 = { name: 'Ivan', age: 12 };
  
  console.log(getOlderUser(user1, user2)); 
  
  const user3 = { name: 'Alex', age: 8 };
  
  console.log(getOlderUser(user1, user3));
  