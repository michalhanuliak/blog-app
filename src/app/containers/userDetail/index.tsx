import React, { useEffect, useState } from 'react';
import { createSelector, Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { setSelectedUser } from '../../pages/user/slice';
import { makeSelectSelectedUser } from '../../pages/user/selectors';
import { IUser } from '../../../interfaces/IUser';
import { UserDetailContainer } from './userDetail';
import UserProfile from '../../components/userProfile';
import InfoCard from '../../components/infoCard';
import Loader from '../../components/loader';
import ErrorMessage from '../../components/errorMessage';

const actionDispatch = (dispatch: Dispatch) => ({
  setSelectedUser:
  (user: IUser) => dispatch(setSelectedUser(user)),
});

const stateSelector = createSelector(makeSelectSelectedUser, (userInfo) => (userInfo));

const UserDetail = () => {
  const { userId }: any = useParams();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const {
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
  } = useSelector(stateSelector);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setSelectedUser } = actionDispatch(useDispatch());

  const fetchUserData = async () => {
    setLoading(true);
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userData.json().catch(() => {
      setError(true);
    });

    if (user) setSelectedUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const constructUserInfo = (userInfoObject: any) => {
    const allUserInfo: any = Object.entries(userInfoObject).map((info) => {
      const [key, value] = info;
      if (key === 'id' || key === 'geo') return [];
      return typeof value === 'object'
        ? <InfoCard key={key} categoryTitle={key}>{constructUserInfo(value)}</InfoCard>
        : <InfoCard key={key} categoryTitle={key} categoryText={value} />;
    });
    return allUserInfo;
  };

  return (
    <UserDetailContainer>
      {isError && !isLoading && (
      <ErrorMessage>
        Failed to fetch user. Please try reload website or try again later.
      </ErrorMessage>
      )}
      {isLoading
        ? <Loader />
        : (
          <>
            <UserProfile name={name} username={username} email={email} />
            <InfoCard cardTitle="Contact">
              <InfoCard categoryTitle="Phone" categoryText={phone} />
              <InfoCard categoryTitle="E-mail" categoryText={email} />
              <InfoCard categoryTitle="Website" categoryText={website} />
            </InfoCard>
            <InfoCard cardTitle="Address">
              {constructUserInfo(address)}
            </InfoCard>
            <InfoCard cardTitle="Company">
              {constructUserInfo(company)}
            </InfoCard>
          </>
        ) }
    </UserDetailContainer>
  );
};

export default UserDetail;
