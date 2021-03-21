import React from 'react';
import { Formik, Form } from 'formik';
import { Button, FormGroup } from 'react-bootstrap';
import validate from './validate';

interface FormikFormType {
  initialValues: Object,
  // validate: (values:any) => Object,
  handleSubmit: (values:any) => void
}

const FormikForm: React.FC<FormikFormType> = ({ initialValues, handleSubmit, children }) => (
  <Formik
    initialValues = { initialValues }
    validate = { validate }
    onSubmit = { (values: Object, { setSubmitting }) => {
      setSubmitting(true);
      handleSubmit(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        { children }

        <FormGroup className="text-center">
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Valider
          </Button>
        </FormGroup>
      </Form>
    )}
  </Formik>
)

export default FormikForm;
