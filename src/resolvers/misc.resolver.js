// vendor
// import axios from 'axios';

const roles = async () => {
  // const response = await axios.get('http://localhost:8080/roles');

  return [
    {
      code: 'ADMIN',
      value: 'ADMINISTRADOR',
    },
    {
      code: 'LEADER',
      value: 'LIDER',
    },
    {
      code: 'STUDENT',
      value: 'ESTUDIANTE',
    }
  ];
};

export default {
  miscQueries: {
    roles,
  }
}