const hiredPeople = (fullName) => {
    const emailPeople = fullName.toLowerCase().split(' ').join('_');
    return { name: fullName, email: `${emailPeople}@trybe.com`}
}

const newEmployees = (generator) => {
    const employees = {
      id1: generator('Pedro Gurra'),
      id2: generator('Luisa Drummond'),
      id3: generator('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(hiredPeople));