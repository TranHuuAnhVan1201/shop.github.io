import React from 'react';
import { CButton } from '@coreui/react';
function login(props) {
    return (
        <div>
            <h1>login</h1>
            <button type="button" className="btn btn-primary">
                Notifications <span className="badge bg-secondary">4</span>
            </button>
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    );
}

export default login;