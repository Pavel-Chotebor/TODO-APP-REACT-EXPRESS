import React from 'react';
import apiService from '../../services/apiService'

export const backendValidation = async (setBackendError, path) => {
    const api = await apiService.post(path, {});
    setBackendError(api.message);
  };
  

function Form({ children, method, handleSubmit }) {
    return (
        <div>
            <form method={method}>
                <div className="formInputs">
                    {children}
                </div>
                <button type="submit" onClick={e => handleSubmit(e)}></button>
            </form>
        </div>
    );
}

export default Form;