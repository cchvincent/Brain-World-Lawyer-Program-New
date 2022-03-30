
const bw_caseheaderFields = {
	id: { type: 'id', label: 'ID' },

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

    timebar: { type: 'string', label: 'Time Bar',

    },

    progressid: { type: 'relation_one', label: 'Progress ID',

    },

    introducers: { type: 'string', label: 'Introducers',

    },

    yearofcreation: { type: 'string', label: 'Year Of Creation',

    },

    caseno: { type: 'string', label: 'Case No',

    },

    handlers: { type: 'string', label: 'Handlers',

    },

    supervisors: { type: 'string', label: 'Supervisors',

    },

    staffs: { type: 'string', label: 'Staffs',

    },

    dla: { type: 'string', label: 'DLA',

    },

    casefilelocationid: { type: 'relation_one', label: 'Case File Location ID',

    },

    clientid: { type: 'relation_one', label: 'Client ID',

    },

    conflictcheck: { type: 'int', label: 'Conflict Check',

    },

    clientcheck: { type: 'int', label: 'Client Check',

    },

    moneylaundrycompliance: { type: 'string', label: 'Money Laundry Compliance',

    },

    status: { type: 'string', label: 'Status',

    },

    caseprogress: { type: 'int', label: 'Progress',

    },

    workaccident: { type: 'int', label: 'Work Accident',

    },

    liabilityadmitted: { type: 'int', label: 'Liability Admitted',

    },

    remarks: { type: 'string', label: 'Remarks',

    },

    followuptasks: { type: 'string', label: 'Follow Up Tasks',

    },

    approvalstatus: { type: 'int', label: 'Approval Status',

    },

    createdate: { type: 'datetime', label: 'Create Date',

    },

    createby: { type: 'string', label: 'Create By',

    },

    updatedate: { type: 'datetime', label: 'Update Date',

    },

    updateby: { type: 'string', label: 'Update By',

    },

}

export default bw_caseheaderFields;
