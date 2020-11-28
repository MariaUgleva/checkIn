import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { ProfileType } from '../../type';

const Profile: React.FC = (): JSX.Element  => {
	const authorizaton: boolean = useSelector((state: AppState) => state.authorization);
    const profile: ProfileType = useSelector((state: AppState) => state.profile);
    
	if (!authorizaton) return <Redirect to="/login" />;
	return (
		<div className="container">
			<div className="profile">
				<img src={profile.url} alt="" className="profile__img" />
				<ul className="profile__info">
					<li className="profile__status">{profile.status}</li>
					<li className="profile__name">
						{profile.name} {profile.surname}, {profile.age}
					</li>
					<li className="profile__city">{profile.city}</li>
					<li className="prodile__contacts email">{profile.email}</li>
					<li className="prodile__contacts phone">{profile.phone}</li>
				</ul>
			</div>
		</div>
	);
};
export default Profile;