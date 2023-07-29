import React from "react";
import { Formik, Form } from "formik";
import { TextInput } from "./Index";
import { Button } from "../Elements/Index";
const HomeForm = () => {
  return (
    <div className="mt-6">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="space-y-4">
          <TextInput
            label="Ime"
            name="firstName"
            type="text"
            placeholder="Ime"
          />
          <TextInput
            label="Prezime"
            name="lastName"
            type="text"
            placeholder="Prezime"
          />

          <TextInput
            label="Telefon"
            name="phone"
            type="text"
            placeholder="Telefon"
          />
          <TextInput
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <div className="pt-1">
            <Button
              variant="rounded"
              color="gradPurple"
              type="submit"
              className="w-full"
            >
              Kontaktiraj
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default HomeForm;
