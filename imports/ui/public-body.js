import { Template } from 'meteor/templating';

import './public-body.html';

AccountsTemplates.configure({
    texts: {
        title: {
            changePwd: "",
            enrollAccount: "",
            forgotPwd: "",
            resetPwd: "",
            signIn: "",
            signUp: "",
            verifyEmail: "",
        }
    }
});