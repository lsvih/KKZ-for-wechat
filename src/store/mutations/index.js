// mutations/index.js

import {
    OPENTIP,
    OFFTIP,
    ONCALCULATE,
    OFFCALCULATE
} from '../constants';

export default {
    [ONCALCULATE](state) {
        state.onCalculate = true
    },
    [OFFCALCULATE](state) {
        state.onCalculate = false
    },
    [OPENTIP](state) {
        state.isOnTip = true
    },
    [OFFTIP](state) {
        state.isOnTip = false
    }
}
