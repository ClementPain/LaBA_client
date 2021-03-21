import React from 'react';
import { Formik, Form } from 'formik';
import { Button, FormGroup } from 'react-bootstrap';
import validate from './validate';

interface FormikFormType {
  initial_values: Object,
  handleSubmit: (values:any) => void
}

const FormikForm: React.FC<FormikFormType> = ({ initial_values, handleSubmit, children }) => (
  <Formik
    initialValues = { initial_values }
    validate = { (values) => validate(values, initial_values) }
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
