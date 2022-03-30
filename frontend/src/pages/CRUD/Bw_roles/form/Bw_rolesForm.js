import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';
// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
// eslint-disable-next-line no-unused-vars
import InputNumberFormItem from 'components/FormItems/items/InputNumberFormItem';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars
import TextAreaFormItem from 'components/FormItems/items/TextAreaFormItem';
// eslint-disable-next-line no-unused-vars

import bw_rolesFields from 'pages/CRUD/Bw_roles/helpers/bw_rolesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Bw_rolesForm = (props) => {

  const {
  isEditing,
  isProfile,
  findLoading,
  saveLoading,
  record,
  onSubmit,
  onCancel,
  modal
  } = props;

  const iniValues = () => {
  return IniValues(bw_rolesFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(bw_rolesFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(bw_rolesFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Bw_roles'
  : 'Add Bw_roles';
  };

  const renderForm = () => (
  <Widget title={<h4>{title()}</h4>} collapse close>
  <Formik
          onSubmit={handleSubmit}
  initialValues={iniValues()}
  validationSchema={formValidations()}
  >
  {(form) => (
  <form onSubmit={form.handleSubmit}>

      <InputFormItem
              name={'name_en'}
      schema={bw_rolesFields}

        autoFocus

      />

      <InputFormItem
              name={'name_ch'}
      schema={bw_rolesFields}

      />

      <InputFormItem
              name={'status'}
      schema={bw_rolesFields}

      />

      <DatePickerFormItem
              name={'createdate'}
      schema={bw_rolesFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={bw_rolesFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={bw_rolesFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={bw_rolesFields}

      />

  <div className="form-buttons">
    <button
            className="btn btn-primary"
            disabled={saveLoading}
    type="button"
    onClick={form.handleSubmit}
    >
    Save
  </button>{' '}{' '}

  <button
          className="btn btn-light"
          type="button"
          disabled={saveLoading}
  onClick={form.handleReset}
  >
  Reset
</button>{' '}{' '}

  <button
          className="btn btn-light"
          type="button"
          disabled={saveLoading}
  onClick={() => onCancel()}
  >
  Cancel
</button>
        </div>
        </form>
        )
        }
        </Formik>
        </Widget>
        );

        if (findLoading) {
        return <Loader />;
        }

        if (isEditing && !record) {
        return <Loader />;
        }

        return renderForm();
        }

export default Bw_rolesForm;
