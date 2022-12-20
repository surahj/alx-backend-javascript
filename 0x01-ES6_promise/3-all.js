import { uploadPhoto, createUser} from './utils.js';

function handleProfileSignup() {
	let body, firstName, lastName;
	uploadPhoto()
	.then(
		(res) => body = res.body);

	createUser()
	.then(
		(res) => {
			firstName = res.firstName;
			lastName = res.lastName;
		}
	)
}
