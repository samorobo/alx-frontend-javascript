import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const res = Object.assign({}, ...data);
    console.log(`${res.body} ${res.firstName} ${res.lastName}`);
    // console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
