import React from 'react';
import Input from "../Input";
import styles from "./styles.module.scss";
import Button from "../Button";
import {Icon} from "@iconify/react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {IUser} from "../../types/user.type";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import {userActions} from "../../redux/slices/userSlice";

type Props = {
  setActive: () => void;
};
const EditForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.user);
  const initialValues = user || {} as IUser;

  const onSubmit = (value: IUser, helpers: FormikHelpers<IUser>) => {
    dispatch(userActions.setUser(value));
    props.setActive();
    helpers.setSubmitting(false);
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
      {() => (
        <Form>
          <div className={styles.form}>
            <Field name="name">
              {({field, meta}: FieldProps) => (
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <Input type="text" placeholder="Name" {...field}/>
                </div>
              )}
            </Field>

            <Field name="bio">
              {({field, meta}: FieldProps) => (
                <div className={styles.formGroup}>
                  <label>Bio</label>
                  <Input type="text" placeholder="Bio" {...field}/>
                </div>
              )}
            </Field>

            {/*<div className={styles.formGroup}>*/}
            {/*  <label>Pronouns</label>*/}
            {/*  <Input type="text" placeholder="Pronouns"/>*/}
            {/*</div>*/}

            <Field name="location">
              {({field, meta}: FieldProps) => (
                <div className={styles.formGroupWithIcon}>
                  <Icon icon="iconamoon:location-pin"/>
                  <Input type="text" placeholder="Location" {...field}/>
                </div>
              )}
            </Field>

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            <div className={styles.formGroup}>
              <label>Social Accounts</label>
            </div>

            <Field name="twitter_username">
              {({field, meta}: FieldProps) => (
                <div className={styles.formGroupWithIcon}>
                  <Icon icon="iconamoon:location-pin"/>
                  <Input type="text" placeholder="Location" {...field}/>
                </div>
              )}
            </Field>

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            {/*<div className={styles.formGroupWithIcon}>*/}
            {/*  <Icon icon="iconamoon:location-pin"/>*/}
            {/*  <Input type="text" placeholder="Location"/>*/}
            {/*</div>*/}

            <div className={styles.formGroup}>
              <Button type="submit" primary>Save</Button> {" "}
              <Button type="button" onClick={props.setActive}>Cancel</Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;