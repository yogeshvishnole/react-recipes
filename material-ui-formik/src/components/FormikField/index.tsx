import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

interface FormikFieldProps {
   name: string;
   label: string;
}

const FormikField: React.FC<FormikFieldProps> = ({ label, name }) => {
   return (
      <div className="FormikField">
         <Field
            as={TextField}
            name={name}
            label={label}
            autoComplete="off"
            fullWidth
         />
      </div>
   );
};

export default FormikField;
