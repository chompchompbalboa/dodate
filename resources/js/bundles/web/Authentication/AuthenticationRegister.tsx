//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import isEmail from 'validator/lib/isEmail'

import { action } from '@/api'

import AuthenticationButton from '@web/Authentication/AuthenticationButton'
import AuthenticationCheckbox from '@web/Authentication/AuthenticationCheckbox'
import AuthenticationInput from '@web/Authentication/AuthenticationInput'
import AuthenticationStatus from '@web/Authentication/AuthenticationStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const AuthenticationRegister = () => {
  
  // State
  const [ emailInputValue, setEmailInputValue ] = useState('')
  const [ passwordInputValue, setPasswordInputValue ] = useState('')
  const [ startTrialCheckboxValue, setStartTrialCheckboxValue ] = useState(false)
  const [ registerStatus, setRegisterStatus ] = useState('READY' as IRegisterStatus)
  
  // Handle Register Attempt
  const handleRegisterAttempt = (e: FormEvent) => {
    e.preventDefault()
    setRegisterStatus('REGISTERING')
    if(emailInputValue === '' || passwordInputValue === '') {
      setTimeout(() => {
        setRegisterStatus('NOT_ALL_FIELDS_ARE_COMPLETE')
      }, 500)
    }
    else if(!isEmail(emailInputValue)) {
      setTimeout(() => {
        setRegisterStatus('NOT_VALID_EMAIL')
      }, 500)
    }
    else if(!startTrialCheckboxValue) {
      setTimeout(() => {
        setRegisterStatus('START_TRIAL_CHECKBOX_NOT_CHECKED')
      }, 500)
    }
    else {
      action.userRegister(emailInputValue, passwordInputValue)
        .then(() => {
          window.location.reload()
        })
        .catch(error => {
          if(error.response.status === 409) {
            setTimeout(() => {
              setRegisterStatus('EMAIL_ALREADY_IN_USE')
            }, 500)
          }
          else {
            setTimeout(() => {
              setRegisterStatus('ERROR_DURING_REGISTRATION')
            }, 500)
          }
        })
    }
  }
  
  return (
    <RegisterForm onSubmit={e => handleRegisterAttempt(e)}>
      <AuthenticationInput
        label="Email"
        type="email"
        placeholder="Email"
        value={emailInputValue}
        onChange={nextValue => setEmailInputValue(nextValue)}
        isInputValueValid={emailInputValue === '' || isEmail(emailInputValue)}/>
      <AuthenticationInput
        label="Password"
        type="password"
        placeholder="Password"
        value={passwordInputValue}
        onChange={nextValue => setPasswordInputValue(nextValue)}
        isInputValueValid={true}/>
      <AuthenticationCheckbox
        label="I agree to start a 7-day free trial"
        onChange={nextValue => setStartTrialCheckboxValue(nextValue)}
        checked={startTrialCheckboxValue} />
      <AuthenticationButton
        text={!['REGISTERING'].includes(registerStatus) ? 'Sign Up' : 'Signing Up...'} />
      <AuthenticationStatus
        status={authenticationStatusMessages[registerStatus]}/> 
    </RegisterForm>
  )
}

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------
type IRegisterStatus = 
  'READY' | 
  'REGISTERING' | 
  'NOT_ALL_FIELDS_ARE_COMPLETE' |
  'NOT_VALID_EMAIL' |
  'START_TRIAL_CHECKBOX_NOT_CHECKED' | 
  'EMAIL_ALREADY_IN_USE' |
  'ERROR_DURING_REGISTRATION'
  
// Status Messages
export const authenticationStatusMessages = {
  READY: "",
  REGISTERING: "",
  NOT_ALL_FIELDS_ARE_COMPLETE: "Please enter your email and password to start your free trial",
  NOT_VALID_EMAIL: "Please enter a valid email address",
  START_TRIAL_CHECKBOX_NOT_CHECKED: "Please click the checkbox above to start your free trial",
  EMAIL_ALREADY_IN_USE: "That email address is already in use",
  ERROR_DURING_REGISTRATION: "We were unable to sign you up for an account. Please make sure you have entered all of your information correctly and try again."
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const RegisterForm = styled.form`
  width: 100%;
`

export default AuthenticationRegister
