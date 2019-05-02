/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const remove = (item) => {
    let pics = getState();

    let index = pics.findIndex(e => {
        return e === item;
    });

    pics.splice(index, 1);
    setState(pics);
};

export default remove;
