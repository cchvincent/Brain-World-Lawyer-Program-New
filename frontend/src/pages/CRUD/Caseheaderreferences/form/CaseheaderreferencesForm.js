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

import caseheaderreferencesFields from 'pages/CRUD/Caseheaderreferences/helpers/caseheaderreferencesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const CaseheaderreferencesForm = (props) => {

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
  return IniValues(caseheaderreferencesFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(caseheaderreferencesFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(caseheaderreferencesFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Caseheaderreferences'
  : 'Add Caseheaderreferences';
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
      schema={caseheaderreferencesFields}

        autoFocus

      />

      <InputFormItem
              name={'relatedcases'}
      schema={caseheaderreferencesFields}

      />

      <DatePickerFormItem
              name={'dateofaccident'}
      schema={caseheaderreferencesFields}
      />

      <InputFormItem
              name={'timebar'}
      schema={caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'caseprogressid'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'clientid'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'casefilelocationid'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'casetypesid'}
      schema={caseheaderreferencesFields}
      />

      <TextAreaFormItem
              name={'introducers'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'yearofcreation'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'caseno'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'handlers'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'supervisors'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'staffs'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'dla'}
      schema={caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'conflictcheck'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'clientcheck'}
      schema={caseheaderreferencesFields}
      />

      <InputFormItem
              name={'moneylaundrycompliance'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'temprefno'}
      schema={caseheaderreferencesFields}

      />

      <InputFormItem
              name={'status'}
      schema={caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'caseprogress'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'workaccident'}
      schema={caseheaderreferencesFields}
      />

      <InputNumberFormItem
              name={'liabilityadmitted'}
      schema={caseheaderreferencesFields}
      />

      <TextAreaFormItem
              name={'remarks'}
      schema={caseheaderreferencesFields}

      />

      <TextAreaFormItem
              name={'followuptasks'}
      schema={caseheaderreferencesFields}

      />

      <InputNumberFormItem
              name={'approvalstatus'}
      schema={caseheaderreferencesFields}
      />

      <DatePickerFormItem
              name={'createdate'}
      schema={caseheaderreferencesFields}
      showTimeInput
      />

      <InputFormItem
              name={'createby'}
      schema={caseheaderreferencesFields}

      />

      <DatePickerFormItem
              name={'updatedate'}
      schema={caseheaderreferencesFields}
      showTimeInput
      />

      <InputFormItem
              name={'updateby'}
      schema={caseheaderreferencesFields}

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

export default CaseheaderreferencesForm;
