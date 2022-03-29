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

import bw_clientsFields from 'pages/CRUD/Bw_clients/helpers/bw_clientsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Bw_clientsForm = (props) => {

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
  return IniValues(bw_clientsFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(bw_clientsFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(bw_clientsFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Bw_clients'
  : 'Add Bw_clients';
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
      schema={bw_clientsFields}

        autoFocus

      />

      <InputFormItem
              name={'name_ch'}
      schema={bw_clientsFields}

      />

      <TextAreaFormItem
              name={'address_en'}
      schema={bw_clientsFields}

      />

      <TextAreaFormItem
              name={'address_ch'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'contactno'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'contactperson_en'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'contactperson_ch'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'mobile'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'hkic'}
      schema={bw_clientsFields}

      />

      <InputFormItem
              name={'status'}
      schema={bw_clientsFields}

      />

      <DatePickerFormItem
              name={'createdate'}
      schema={bw_clientsFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={bw_clientsFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={bw_clientsFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={bw_clientsFields}

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

export default Bw_clientsForm;
