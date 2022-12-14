import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedItems = () => async (dispatch, getState) => {
    try {
        const response = await AsyncStorage.getItem('saved_items');
        const savedItems = JSON.parse(response);
        let payload = [];
        if(savedItems){
            payload = [...savedItems];
        }
        dispatch({
            type: 'GET_SAVED_ITEMS',
            payload,
        });
    } catch (error) {
        
    }
}

export const onSaveItem = (item) => async (dispatch, getState) => {
    try {
        const response = await AsyncStorage.getItem('saved_items');
        const savedItems = JSON.parse(response);
        let wishList = []
        if(savedItems){
            wishList = [...savedItems]
        }
        const newItems = [...wishList, item]
        // console.log(newItems)
        await AsyncStorage.setItem('saved_items', JSON.stringify(newItems));
        dispatch({
            type: 'SAVE_ITEM',
            payload: newItems,
        });
    } catch (error) {
        
    }
}

export const showLoading = () => (dispatch, getState) => {
    dispatch({
        type: "SHOW_LOADING",
        payload: null
    })
}

export const clearLoading = () => (dispatch, getState) => {
    dispatch({
        type: "CLEAR_LOADING",
        payload: null
    })
}