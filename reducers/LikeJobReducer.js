import _ from 'lodash';

import { LIKE_JOB } from '../actions/types';


export default (state = [], action) => {
  switch(action.type) {

    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
      // This returns unique items from the list and also prev list combined

    default:
      return state;
  }
};
