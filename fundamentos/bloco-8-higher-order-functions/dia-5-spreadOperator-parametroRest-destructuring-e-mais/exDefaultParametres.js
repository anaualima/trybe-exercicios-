// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting(); // Welcome usuário!

// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting('João'); // // Welcome usuário!

const multiply = (number, value = 2) => {
    return number * value
  };
  
  console.log(multiply(8));