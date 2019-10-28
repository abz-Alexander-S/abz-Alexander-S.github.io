import React from "react";

import './Form.css';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import Validators from "../Shared/Validators";
import Masks from "../Shared/Masks";

function Form() {

    const [values, setValues] = React.useState({
        name: {
            value: '',
            validator: null,
            error: false,
            errorValue: null,
        },
        email: {
            value: '',
            error: false,
            errorValue: null,
        },
        emailRFC: {
            value: '',
            error: false,
            errorValue: null,
        },
        id: {
            value: '',
            error: false,
            errorValue: null,
        },
        idMasked: {
            value: '',
            error: false,
            errorValue: null,
        },
        phone: {
            value: '',
            error: false,
            errorValue: null,
        },
        additionalPhones: {
            value: '',
            error: false,
            errorValue: null,
        },
        pin: {
            value: '',
            error: false,
            errorValue: null,
        },
        multiline: {
            value: '',
            error: false,
            errorValue: null,
        },
    });

    const handleChange = name => event => {
        const newValue = {
            value: event.target.value,
            validator: values[name].validator,
            error: values[name].error,
            errorValue: values[name].errorValue
        };

        setValues({ ...values, [name]: newValue });
    };

    const onBlurCheck = name => event => {
        const validatorResponse = Validators[name + 'Validator'](event.target.value);
        let isInvalid = false;
        if (validatorResponse) {
            if (name !== 'multiline') isInvalid = true;
        }

        console.log(isInvalid);

        const newValue = {
            value: name === 'multiline' ? validatorResponse : event.target.value,
            validator: values[name].validator,
            error: isInvalid,
            errorValue: name === 'multiline' ? values[name].error : validatorResponse,
        };

        setValues({ ...values, [name]: newValue });
    };

    const validateButtonOnClick = () => {
        for (let name in values) {
            const validatorResponse = Validators[name + 'Validator'](values[name].value);
            let isInvalid = false;
            if (validatorResponse) {
                if (name !== 'multiline') isInvalid = true;
            }

            console.log(isInvalid);

            const newValue = {
                value: name === 'multiline' ? validatorResponse : values[name].value,
                validator: values[name].validator,
                error: isInvalid,
                errorValue: name === 'multiline' ? values[name].error : validatorResponse,
            };

            setValues({ ...values, [name]: newValue });
        }
    };

    return (
        <form className="Form">
            <TextField
                id="outlined-name"
                label="Name"
                className="textField"
                value={values.name.value}
                error={values.name.error}
                onChange={handleChange('name')}
                onBlur={onBlurCheck('name')}
                margin="normal"
                variant="outlined"
                helperText={values.name.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Email"
                className="textField"
                value={values.email.value}
                error={values.email.error}
                onChange={handleChange('email')}
                onBlur={onBlurCheck('email')}
                margin="normal"
                variant="outlined"
                helperText={values.email.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Email RFC"
                className="textField"
                value={values.emailRFC.value}
                error={values.emailRFC.error}
                onChange={handleChange('emailRFC')}
                onBlur={onBlurCheck('emailRFC')}
                margin="normal"
                variant="outlined"
                helperText={values.emailRFC.errorValue}
            />
            <TextField
                id="outlined-name"
                label="ID"
                className="textField"
                value={values.id.value}
                error={values.id.error}
                onChange={handleChange('id')}
                onBlur={onBlurCheck('id')}
                margin="normal"
                variant="outlined"
                helperText={values.id.errorValue}
            />
            <TextField
                id="outlined-name"
                label="ID Masked"
                className="textField"
                value={values.idMasked.value}
                error={values.idMasked.error}
                onChange={handleChange('idMasked')}
                InputProps={{
                    inputComponent: Masks.idMaskedMask,
                }}
                margin="normal"
                variant="outlined"
                helperText={values.idMasked.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Phone Number"
                className="textField"
                value={values.phone.value}
                error={values.phone.error}
                onChange={handleChange('phone')}
                onBlur={onBlurCheck('phone')}
                InputProps={{
                    inputComponent: Masks.phoneMask,
                }}
                margin="normal"
                variant="outlined"
                helperText={values.phone.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Additional Phones"
                className="textField"
                value={values.additionalPhones.value}
                error={values.additionalPhones.error}
                onChange={handleChange('additionalPhones')}
                onBlur={onBlurCheck('additionalPhones')}
                margin="normal"
                variant="outlined"
                helperText={values.additionalPhones.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Pin"
                className="textField"
                value={values.pin.value}
                error={values.pin.error}
                onChange={handleChange('pin')}
                onBlur={onBlurCheck('pin')}
                InputProps={{
                    inputComponent: Masks.pinMask,
                }}
                margin="normal"
                variant="outlined"
                helperText={values.pin.errorValue}
            />
            <TextField
                id="outlined-name"
                label="Multiline"
                className="textField"
                rows="3"
                value={values.multiline.value}
                error={values.multiline.error}
                onChange={handleChange('multiline')}
                onBlur={onBlurCheck('multiline')}
                margin="normal"
                variant="outlined"
                multiline
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Visibility />}
                className="button"
                onClick={validateButtonOnClick}
            >
                Validate
            </Button>
        </form>
    )
}

export default Form;