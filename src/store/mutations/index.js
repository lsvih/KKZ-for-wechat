// mutations/index.js

import { ONCALCULATE, OFFCALCULATE } from '../constants';

export default {
    [ONCALCULATE] (state) {
        state.onCalculate = true
    },
    [OFFCALCULATE] (state) {
        state.onCalculate = false
    }
}
