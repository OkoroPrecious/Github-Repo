import React from 'react';
import {Icon} from "@iconify/react";
import styles from "./styles.module.scss";
import Container from "../../components/container";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import isEmpty from "is-empty";

type Props = {};
const HomePage = (props: Props) => {
  const navigate = useNavigate();

  interface IFormValue {
    username: string;
  }

  const initialValue: IFormValue = {
    username: "",
  }

  const onSubmit = (values: IFormValue, helpers: FormikHelpers<IFormValue>) => {
    if (!isEmpty(values.username)) {
      navigate(`/${values.username}`)
    }
    helpers.setSubmitting(false);
  }
  return (
    <Container>
      <div className={styles.wrapper}>
        <Icon width={48} height={48} icon="mdi:github"/>
        <h1>Homepage</h1>
        <div>
          <Formik initialValues={initialValue} onSubmit={onSubmit}>
            {() => (
              <Form>
                <div className={styles.username}>
                  <Field name="username">
                    {({field, meta}: FieldProps) => (
                      <Input type="text" placeholder="Username" {...field}/>
                    )}
                  </Field>
                </div>

                <div className={styles.button}>
                  <Button>See repos</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;