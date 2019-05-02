/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import {getState, setState} from "../store";

const update = (oldPic, newPic) => {
    let pics = getState();
    let index = pics.findIndex(e => {
        return e === oldPic;
    });

    pics.splice(index, 1, newPic);

    setState(pics);
};

export default update;
