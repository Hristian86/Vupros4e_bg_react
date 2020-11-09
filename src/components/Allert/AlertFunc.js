import React from 'react';
import { useAlert } from 'react-alert';
import AlertProductComponent from './AlertProductcomponent';

const AlertFunc = (message) => {
    const alert = useAlert();
    alert.show(<AlertProductComponent message={message} />);
}

export default AlertFunc;