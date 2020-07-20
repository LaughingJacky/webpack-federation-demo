/**
 * @author 4264332(@qq.com)
 * @email 4264332(@qq.com)
 * @create date 2020-07-08 21:24:14
 * @modify date 2020-07-08 21:24:14
 * @desc [description]
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SayHelloFromB from 'application_b/SayHelloFromB';
import App from './app';

ReactDOM.render(
    <>
        <App />
        <SayHelloFromB />
    </>, document.getElementById('root'));
