import axios from 'axios';

import {
  FETCH_JOBS
} from './types';


export const fetchJobs = (region) => async (dispatch) => {
  let { data } = await axios.get('http://192.168.0.16:3000/jobs');

  dispatch({ type: FETCH_JOBS, payload: data });

};



