function fillStruct(prefix, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "string")
                obj[key] = prefix + "__" + key;
            else fillStruct(prefix + "__" + key, obj[key])
        }
    }
    return obj;
}

export let CFG = fillStruct("CFG", {
    SERVER_ADDRESS: "",
});

export let LOGIN = fillStruct("LOGIN", {
    USER_SET_LOGIN: "",
    USER_SET_PASSWORD: "",

    SET_USERNAME: "",
    SET_USERROLES: "",

    SET_ERROR_TEXT: "",

    SET_STATUS: "",
    STATUS: {
        NONAME: "",
        LOADING: "",
        SUCCESS: ""
    },
});

export let TREE = fillStruct("TREE", {
    SET_DATA: "",
    SET_SELECTED_ITEM: "",
    SET_EXPANDED_ITEM: "",
    SET_STATUS: "",
    ERROR_TEXT: "",
    STATUS: {
        NONAME: "",
        LOADING: "",
        SUCCESS: "",
        ERROR: ""
    },
    SET_MODE: "",
    MODE: {
        NORMAL: "",
        ADD: "",
        EDIT: "",
        MOVE: "",
    },
    NEW_ITEM_TITLE: "",
    EDIT_RECORD_ID: ""
});

export let DIALOG = fillStruct("DIALOG", {
    IS_OPEN: ""
});

export let PGINFO = fillStruct("PGINFO", {
    ID: "",
    DATA: "",
    DATA_TEMP: "",
    SET_STATUS: "",
    STATUS: {
        NONAME: "",
        LOADING: "",
        SUCCESS: "",
        ERROR: ""
    },
    SET_MODE: "",
    MODE: {
        PAGE: "",
        TEXT: "",
    }
});
export let DOINGS = fillStruct("DOINGS", {
    SET_CATEGORY : "",
    CATEGORY_VAL : {
        GLOBAL : '',
        YEAR : '',
        MONTH : '',
        DAY : '',
    },
    DAY: {
        SET_CURSOR : "",
        DATA : {
            SET_START_DATE : "",
            SET_ITEMS : "",
            TASK : ""
        },
        SHOW_TASK_DETAILS_DIALOG : "",
        CURRENT_TASK_ID : "",
        TASK_STATUS_VAL : {
            PLAY : "",
            PAUSE : "",
            COMPLETED : "",
        }
    }
});
export let IMG_LISTER = fillStruct("IMG_LISTER", {
    IMAGES : "",
    CURSOR : "",
    SHOW : "",
});