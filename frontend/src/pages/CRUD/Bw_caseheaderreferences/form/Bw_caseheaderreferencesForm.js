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

import bw_caseheaderreferencesFields from 'pages/CRUD/Bw_caseheaderreferences/helpers/bw_caseheaderreferencesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const Bw_caseheaderreferencesForm = (props) => {

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
  return IniValues(bw_caseheaderreferencesFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(bw_caseheaderreferencesFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(bw_caseheaderreferencesFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Bw_caseheaderreferences'
  : 'Add Bw_caseheaderreferences';
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
              name={'refno'}
      schema={bw_caseheaderreferencesFields}

        autoFocus

      />

      <InputFormItem
              name={'relatedcases'}
      schema={bw_caseheaderreferencesFields}

      />

      <DatePickerFormItem
              name={'dateofaccident'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputFormItem
              name={'timebar'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'caseprogressid'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'clientid'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'casefilelocationid'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'casetypesid'}
      schema={bw_caseheaderreferencesFields}
      />

      <TextAreaFormItem
              name={'introducers'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'yearofcreation'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'caseno'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'handlers'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'supervisors'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'staffs'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'dla'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'conflictcheck'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'clientcheck'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputFormItem
              name={'moneylaundrycompliance'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'temprefno'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputFormItem
              name={'status'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'caseprogress'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'workaccident'}
      schema={bw_caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'liabilityadmitted'}
      schema={bw_caseheaderreferencesFields}
      />

      <TextAreaFormItem
              name={'remarks'}
      schema={bw_caseheaderreferencesFields}

      />

      <TextAreaFormItem
              name={'followuptasks'}
      schema={bw_caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'approvalstatus'}
      schema={bw_caseheaderreferencesFields}
      />

      <DatePickerFormItem
              name={'createdate'}
      schema={bw_caseheaderreferencesFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={bw_caseheaderreferencesFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={bw_caseheaderreferencesFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={bw_caseheaderreferencesFields}

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

export default Bw_caseheaderreferencesForm;
