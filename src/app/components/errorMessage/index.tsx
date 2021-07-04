import React from 'react';
import { IErrorMessage } from '../../../interfaces/IErrorMessage';
import ErrorMessageContainer from './errorMessage';

const ErrorMessage = ({ children }: IErrorMessage) => (
  <ErrorMessageContainer>
    {children}
  </ErrorMessageContainer>
);

export default ErrorMessage;
