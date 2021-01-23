import React from 'react';
import { CButton } from '@coreui/react';
function login(props) {
    return (
        <div>
            <h1>login</h1>
            <button type="button" class="btn btn-primary">
                Notifications <span class="badge bg-secondary">4</span>
            </button>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    );
}

export default login;