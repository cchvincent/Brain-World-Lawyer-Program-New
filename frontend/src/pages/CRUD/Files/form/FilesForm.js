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

import filesFields from 'pages/CRUD/Files/helpers/filesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const FilesForm = (props) => {

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
  return IniValues(filesFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(filesFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(filesFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Files'
  : 'Add Files';
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

      <InputNumberFormItem
              name={'documentboxid'}
      schema={filesFields}
      />

      <InputFormItem
              name={'documentboxname'}
      schema={filesFields}

      />

      <InputFormItem
              name={'refno'}
      schema={filesFields}

      />

      <InputFormItem
              name={'filename'}
      schema={filesFields}

      />

      <InputNumberFormItem
              name={'year'}
      schema={filesFields}
      />

      <InputFormItem
              name={'caseno'}
      schema={filesFields}

      />

      <InputFormItem
              name={'letterheading'}
      schema={filesFields}

      />

      <InputFormItem
              name={'filedate'}
      schema={filesFields}

      />

      <InputFormItem
              name={'fileformat'}
      schema={filesFields}

      />

      <TextAreaFormItem
              name={'filefreetext'}
      schema={filesFields}

      />

      <InputNumberFormItem
              name={'fileseq'}
      schema={filesFields}
      />

      <InputFormItem
              name={'status'}
      schema={filesFields}

      />

      <DatePickerFormItem
              name={'createdate'}
      schema={filesFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={filesFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={filesFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={filesFields}

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

export default FilesForm;
