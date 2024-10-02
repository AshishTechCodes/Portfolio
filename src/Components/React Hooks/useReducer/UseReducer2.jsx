import React from 'react'
import { useReducer } from 'react'
// Initial form state
const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
  };
  
  // Reducer function to handle form state
  function formReducer(state, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'SET_ERRORS':
        return {
          ...state,
          errors: action.errors,
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }
  
  // Validator function to handle form validation
  function validateForm(state) {
    const errors = {};
    if (!state.username) {
      errors.username = 'Username is required';
    }
    if (!state.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = 'Email is invalid';
    }
    if (state.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (state.password !== state.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  }
const UseReducer2 = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleInputChange = (e) => {
      dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateForm(state);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: 'SET_ERRORS', errors });
      } else {
        // Submit form data
        console.log('Form submitted successfully:', state);
        dispatch({ type: 'RESET' });
      }
    };
  return (
    <fieldset className='border-violet-700 border-4'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleInputChange}
        />
        {state.errors.username && <span>{state.errors.username}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"

          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
        {state.errors.email && <span>{state.errors.email}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
        {state.errors.password && <span>{state.errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleInputChange}
        />
        {state.errors.confirmPassword && <span>{state.errors.confirmPassword}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </fieldset>
  )
}
export default UseReducer2