
const bw_caseheaderFields = {
	id: { type: 'id', label: 'ID' },

    timebar: { type: 'date', label: 'Time Bar',

    },

    introducers: { type: 'relation_many', label: 'Introducers',

    },

    handlers: { type: 'relation_many', label: 'Handlers',

    },

    supervisors: { type: 'relation_many', label: 'Supervisors',

    },

    staffs: { type: 'relation_many', label: 'Staffs',

    },

    conflictcheck: { type: 'enum', label: 'Conflict Check',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    clientcheck: { type: 'enum', label: 'Client Check',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    moneylaundrycompliance: { type: 'enum', label: 'Money Laundry Compliance',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    caseprogress: { type: 'relation_one', label: 'Case Progress',

    },

    status: { type: 'relation_one', label: 'Status',

    },

    workaccident: { type: 'enum', label: 'Work Accident',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    liabilityadmitted: { type: 'enum', label: 'Liability Admitted',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    approvalstatus: { type: 'enum', label: 'Approval Status',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    dla: { type: 'enum', label: 'DLA',

    options: [

    { value: 'Yes', label: 'Yes' },

    { value: 'No', label: 'No' },

]

    },

    createby: { type: 'relation_one', label: 'Create By',

    },

    updateby: { type: 'relation_one', label: 'Update By',

    },

    createdate: { type: 'datetime', label: 'Create Date',

    },

    updatedate: { type: 'datetime', label: 'Update Date',

    },

    casetypesid: { type: 'relation_one', label: 'Case Types ID',

    },

    refno: { type: 'string', label: 'Ref No',

    },

    temprefno: { type: 'string', label: 'Temp Ref No',

    },

    relatedcases: { type: 'string', label: 'Related Cases',

    },

    dateofaccident: { type: 'date', label: 'Date Of Accident',

    },

    progressid: { type: 'relation_one', label: 'Progress ID',

    },

    yearofcreation: { type: 'string', label: 'Year Of Creation',

    },

    caseno: { type: 'string', label: 'Case No',

    },

    casefilelocationid: { type: 'relation_one', label: 'Case File Location ID',

    },

    clientid: { type: 'relation_one', label: 'Client ID',

    },

    remarks: { type: 'string', label: 'Remarks',

    },

    followuptasks: { type: 'string', label: 'Follow Up Tasks',

    },

}

export default bw_caseheaderFields;
