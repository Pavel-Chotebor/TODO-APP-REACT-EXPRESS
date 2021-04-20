import React,{useState} from 'react';
import Form from './components/Form'
import Input from './components/Input'
import {
    checkIfInputIsEmpty,
    checkLengthOfInput,
} from './validationService'
import apiService from '../services/apiService'

const Registration = () => {
    const [inputStates, setInputStates] = useState({
        username: false,
        password: false,
        kingdom: true,
    });
    const [inputs, setInputs] = useState({});
    const [backendError, setBackendError] = useState('');
    const [isSubmited, setSubmited] = useState(false);

    const inputChange = (inputName, inputValue, isValid) => {
        const newInputStates = { ...inputStates };
        const newInputs = { ...inputs };
        newInputStates[inputName] = isValid;
        newInputs[inputName] = inputValue;
        setInputStates(newInputStates);
        setInputs(newInputs);
    };

    const handleSubmit = async event => {
        if (backendError) {
            setBackendError('');
        }
        event.preventDefault();
        setSubmited(true);
        if (Object.values(inputStates).every(input => input)) {
            const response = await apiService.post('/register', inputs, false);
            if (response && response.status === 'error') {
                setBackendError(response.message);
            } else if (response) {
                window.location.href = '/login';
            }
        }
    };

    return (

        <div>

            <Form formName={'SIGN UP'} handleSubmit={handleSubmit} method={'post'}>
                <Input
                    isSubmited={isSubmited}
                    name="username"
                    type="text"
                    onChange={inputChange}
                    validator={checkIfInputIsEmpty}
                    errorMessage="Username required."
                />
                <Input
                    isSubmited={isSubmited}
                    name="password"
                    type="password"
                    onChange={inputChange}
                    validator={checkLengthOfInput(8)}
                    errorMessage="Password must be 8 characters or more.."
                />
                <Input
                    isSubmited={isSubmited}
                    name="email"
                    type="email"
                    onChange={inputChange}
                    validator={checkIfInputIsEmpty}
                    errorMessage="Email required."
                />
                <Input
                    isSubmited=""
                    name="kingdom"
                    type="text"
                    onChange={inputChange}
                />
                <p className="message">{backendError}</p>
            </Form>
        </div>
    );
};
export default Registration;