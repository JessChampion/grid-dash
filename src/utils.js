/* eslint-disable import/prefer-default-export */

import { has } from 'ramda';

import { TYPES } from './config';

// Validates that a provided value is a valid type
export const validType = has(TYPES);

