import * as types from './types';

export const updateSearch = term => ({
    type: types.UPDATE_SEARCH,
    payload: {
        value: term
    }
});