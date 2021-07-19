// import * as CategoryApiUtil from "../util/category_api_util"
export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

export const updateBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds
    }
}