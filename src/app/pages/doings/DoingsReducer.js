import { DOINGS } from '../../store/AppActions';

export function doingsCategory(state = DOINGS.CATEGORY_VAL.DAY, action) {
    switch (action.type) {
        case DOINGS.SET_CATEGORY:
            return action.newValue;
        default:
            return state;
    }
}