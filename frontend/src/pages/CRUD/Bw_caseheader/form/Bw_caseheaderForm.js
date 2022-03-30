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

import bw_caseheaderFields from 'pages/CRUD/Bw_caseheader/helpers/bw_caseheaderFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import Bw_introducersSelectItem from 'pages/CRUD/Bw_introducers/helpers/Bw_introducersSelectItem';

import Bw_handlersSelectItem from 'pages/CRUD/Bw_handlers/helpers/Bw_handlersSelectItem';

import Bw_supervisorsSelectItem from 'pages/CRUD/Bw_supervisors/helpers/Bw_supervisorsSelectItem';

import Bw_staffsSelectItem from 'pages/CRUD/Bw_staffs/helpers/Bw_staffsSelectItem';

import Bw_progressSelectItem from 'pages/CRUD/Bw_progress/helpers/Bw_progressSelectItem';

import Bw_casestatusSelectItem from 'pages/CRUD/Bw_casestatus/helpers/Bw_casestatusSelectItem';

import UsersSelectItem from 'pages/CRUD/Users/helpers/UsersSelectItem';

import Bw_casetypesSelectItem from 'pages/CRUD/Bw_casetypes/helpers/Bw_casetypesSelectItem';

import Bw_officesSelectItem from 'pages/CRUD/Bw_offices/helpers/Bw_officesSelectItem';

import Bw_clientsSelectItem from 'pages/CRUD/Bw_clients/helpers/Bw_clientsSelectItem';

const Bw_caseheaderForm = (props) => {

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
  return IniValues(bw_caseheaderFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(bw_caseheaderFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(bw_caseheaderFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Bw_caseheader'
  : 'Add Bw_caseheader';
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

      <DatePickerFormItem
              name={'timebar'}
      schema={bw_caseheaderFields}
      />

      <Bw_introducersSelectItem
      name={'introducers'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      mode="multiple"
      form={form}
      />

      <Bw_handlersSelectItem
      name={'handlers'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      mode="multiple"
      form={form}
      />

      <Bw_supervisorsSelectItem
      name={'supervisors'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      mode="multiple"
      form={form}
      />

      <Bw_staffsSelectItem
      name={'staffs'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      mode="multiple"
      form={form}
      />

      <RadioFormItem
      name={'conflictcheck'}
      schema={bw_caseheaderFields}
      />

      <Bw_progressSelectItem
      name={'caseprogress'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <Bw_casestatusSelectItem
      name={'status'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <RadioFormItem
      name={'workaccident'}
      schema={bw_caseheaderFields}
      />

      <RadioFormItem
      name={'liabilityadmitted'}
      schema={bw_caseheaderFields}
      />

      <RadioFormItem
      name={'dla'}
      schema={bw_caseheaderFields}
      />

      <UsersSelectItem
      name={'createby'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <UsersSelectItem
      name={'updateby'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <Bw_casetypesSelectItem
      name={'casetypesid'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <InputFormItem
              name={'refno'}
      schema={bw_caseheaderFields}

      />

      <InputFormItem
              name={'temprefno'}
      schema={bw_caseheaderFields}

      />

      <InputFormItem
              name={'relatedcases'}
      schema={bw_caseheaderFields}

      />

      <DatePickerFormItem
              name={'dateofaccident'}
      schema={bw_caseheaderFields}
      />

      <Bw_progressSelectItem
      name={'progressid'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <InputFormItem
              name={'yearofcreation'}
      schema={bw_caseheaderFields}

      />

      <InputFormItem
              name={'caseno'}
      schema={bw_caseheaderFields}

      />

      <Bw_officesSelectItem
      name={'casefilelocationid'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <Bw_clientsSelectItem
      name={'clientid'}
      schema={bw_caseheaderFields}
      showCreate={!modal}
      form={form}
      />

      <TextAreaFormItem
              name={'remarks'}
      schema={bw_caseheaderFields}

      />

      <TextAreaFormItem
              name={'followuptasks'}
      schema={bw_caseheaderFields}

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

export default Bw_caseheaderForm;
