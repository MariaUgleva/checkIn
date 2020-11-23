import { Reducer } from 'redux';
import {ProfileType} from '../type';

const initialvalue: ProfileType = require('../components/Profile/profile.json')[0];
const profileReducer: Reducer = (state: ProfileType = initialvalue) => {
	return state;
};

export default profileReducer;
