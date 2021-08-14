const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers);
};

// const toggleUserState = (allUsers, userName) => {
//   return new Promise(resolve => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
//     resolve(updatedUsers);
//   });
// };

const result = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', result);
// toggleUserState(users, 'Lux', result);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(result);
toggleUserState(users, 'Lux').then(result);