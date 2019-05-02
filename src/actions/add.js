/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import {getState, setState} from "../store";

const add = (items) => {
    let pics = getState();

    if (typeof items === "string")
        pics.push(items);
    else {
        items.map(i => {
            return pics.push(i);
        })
    }

    setState(pics);
};

export default add;
