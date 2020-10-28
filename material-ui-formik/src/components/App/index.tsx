import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import FormikField from "../FormikField";
import "./app.css";

interface FormValues {
   name: string;
   position: string;
}

const initialValues: FormValues = {
   name: "",
   position: "",
};

const signupSchema = Yup.object().shape({
   name: Yup.string().min(2, "Too short").required("Required"),
   position: Yup.string().required(),
});

const App: React.FC = () => {
   const handleSubmit = (values: FormValues) => {
      alert(JSON.stringify(values));
   };

   return (
      <div className="app">
         <h1>Sign Up</h1>
         <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
         >
            {({ dirty, isValid }) => {
               return (
                  <Form>
                     <div>
                        <label>Name:</label>
                        <Field name="name" as="input" />
                        <ErrorMessage name="name" />
                     </div>
                     <FormikField label="Name" name="name" />
                     <div>
                        <label>Position:</label>
                        <Field
                           name="position"
                           as="select"
                           placeholder="Choose your position"
                        >
                           <option value=""></option>
                           <option value="frontend">Frontend</option>
                           <option value="backend">Backend</option>
                           <option value="devops">DevOps</option>
                           <option value="qa">QA</option>
                        </Field>
                        <ErrorMessage name="position" />
                     </div>
                     <button disabled={!dirty || !isValid} type="submit">
                        Submit
                     </button>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

export default App;
