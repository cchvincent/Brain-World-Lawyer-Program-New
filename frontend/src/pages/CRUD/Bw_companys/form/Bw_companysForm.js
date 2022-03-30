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

import bw_companysFields from 'pages/CRUD/Bw_companys/helpers/bw_companysFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Bw_companysForm = (props) => {

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
  return IniValues(bw_companysFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(bw_companysFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(bw_companysFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Bw_companys'
  : 'Add Bw_companys';
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
      schema={bw_companysFields}

        autoFocus

      />

      <InputFormItem
              name={'name_ch'}
      schema={bw_companysFields}

      />

      <TextAreaFormItem
              name={'address_en'}
      schema={bw_companysFields}

      />

      <TextAreaFormItem
              name={'address_ch'}
      schema={bw_companysFields}

      />

      <TextAreaFormItem
              name={'slogan_en'}
      schema={bw_companysFields}

      />

      <TextAreaFormItem
              name={'slogan_ch'}
      schema={bw_companysFields}

      />

      <InputFormItem
              name={'status'}
      schema={bw_companysFields}

      />

      <DatePickerFormItem
              name={'createdate'}
      schema={bw_companysFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={bw_companysFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={bw_companysFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={bw_companysFields}

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

export default Bw_companysForm;
