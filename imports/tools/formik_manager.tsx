import React from 'react';
import { useField, FieldAttributes } from 'formik';
import { FormGroup, Form } from 'react-bootstrap';

type MyTextInputType = {
  label: string,
  type: string,
  name: string,
  placeholder?: string,
  maxlength?: number | undefined,
  alert?: JSON
} & FieldAttributes<any>

const MyTextInput: React.FC<MyTextInputType> = (props) => {
  const [field, meta] = useField(props);

  const {
    label,
    type,
    name,
    placeholder,
    maxlength,
    alert
  } = props;

  return (
    <FormGroup>
      {label && <Form.Label htmlFor = { name }>{ label }</Form.Label>}
      <Form.Control
        className = "text-input"
        type = { type } 
        placeholder = { placeholder }
        maxLength = { maxlength }
        {...field}
      />
      {
        meta.touched && meta.error
          ? (<div className="text-danger">{meta.error}</div>)
          : null
      }
      {
        alert && alert[name] && (
          <div className="text-danger">{ alert[name].join(', ') }</div>
        )
      }
    </FormGroup>
  );
};

// const MyTextArea = (props) => {
//   const [field, meta] = useField(props);

//   const {
//     label,
//     row,
//     name,
//     placeholder,
//     alert,
//   } = props;

//   return (
//     <FormGroup>
//       {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
//       <Form.Control as="textarea" row={row} className="text-input" {...field} name={name} placeholder={placeholder} />
//       {
//         meta.touched && meta.error
//           ? (<div className="text-danger">{meta.error}</div>)
//           : null
//       }
//       {
//         alert && alert[name]
//         && (<div className="text-danger">{alert[name].join(', ')}</div>)
//       }
//     </FormGroup>
//   );
// };

// const MyNumberInput = (props) => {
//   const [field, meta] = useField(props);

//   const {
//     type,
//     label,
//     min,
//     max,
//     step,
//     name,
//     alert,
//   } = props;

//   return (
//     <FormGroup>
//       {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
//       <Form.Control type={type} min={min} max={max} step={step} className="text-input" {...field} name={name} />
//       {
//         meta.touched && meta.error
//           ? (<div className="text-danger">{meta.error}</div>)
//           : null
//       }
//       {
//         alert && alert[name]
//         && (<div className="text-danger">{alert[name].join(', ')}</div>)
//       }
//     </FormGroup>
//   );
// };

// const MySelect = (props) => {
//   const {
//     label,
//     name,
//     alert,
//   } = props;

//   const [field, meta] = useField(props);
//   return (
//     <FormGroup>
//       <Form.Label htmlFor={name}>{label}</Form.Label>
//       <Form.Control as="select" {...field} {...props} />
//       {
//         meta.touched && meta.error
//           ? (<div className="text-danger">{meta.error}</div>)
//           : null
//       }
//       {
//         alert && alert[name]
//         && (<div className="text-danger">{alert[name].join(', ')}</div>)
//       }
//     </FormGroup>
//   );
// };

// const MyCheckbox = (props) => {
//   const [field, meta] = useField(props);

//   const {
//     type,
//     label,
//     name,
//     alert,
//   } = props;

//   return (
//     <FormGroup>
//       <Form.Check type={type} label={label} className="text-input" {...field} name={name} />
//       {
//         meta.touched && meta.error
//           ? (<div className="text-danger">{meta.error}</div>)
//           : null
//       }
//       {
//         alert && alert[name]
//         && (<div className="text-danger">{alert[name].join(', ')}</div>)
//       }
//     </FormGroup>
//   );
// };

// const MyFileUploader = (props) => {
//   const [field, meta] = useField(props);

//   const {
//     type,
//     name,
//     label,
//     alert,
//   } = props;

//   return (
//     <FormGroup>
//       {label && <Form.Label htmlFor={name}>{label}</Form.Label>}
//       <Form.Control type={type} {...field} name={name} />
//       {
//         meta.touched && meta.error
//           ? (<div className="text-danger">{meta.error}</div>)
//           : null
//       }
//       {
//         alert && alert[name]
//         && (<div className="text-danger">{alert[name].join(', ')}</div>)
//       }
//     </FormGroup>
//   );
// };

export {
  MyTextInput
};