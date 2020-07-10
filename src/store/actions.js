import axios from 'axios'

export function hitWebsiteContent() {
    return (dispatch) => {
        axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*')
            .then(({data}) => {
                dispatch({
                    type: 'HIT_API_WEBSITE_CONTENT_SUCCESS', 
                    data: data.data[0]
                })
            })
            .catch(err =>{
                dispatch({
                    type: 'HIT_API_WEBSITE_CONTENT_ERROR', 
                    err
                })
            })
    }
}

export function hitListofUniversity() {
    return (dispatch) => {
        axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*')
            .then(({data}) => {
                dispatch({
                    type: 'HIT_API_LIST_OF_UNIVERSITY_SUCCESS', 
                    data: data.data
                })
            })
            .catch(err =>{
                dispatch({
                    type: 'HIT_API_LIST_OF_UNIVERSITY_ERROR', 
                    err
                })
            })
    }
}

export function hitListofFaculty() {
    return (dispatch) => {
        axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan')
            .then(({data}) => {
                dispatch({
                    type: 'HIT_API_LIST_OF_FACULTY_SUCCESS', 
                    data: data.data
                })
            })
            .catch(err =>{
                dispatch({
                    type: 'HIT_API_LIST_OF_FACULTY_ERROR', 
                    err
                })
            })
    }
}

export function hitListofTestimony() {
    return (dispatch) => {
        axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.* ')
            .then(({data}) => {
                dispatch({
                    type: 'HIT_API_LIST_OF_TESTIMONY_SUCCESS', 
                    data: data.data
                })
            })
            .catch(err =>{
                dispatch({
                    type: 'HIT_API_LIST_OF_TESTIMONY_ERROR', 
                    err
                })
            })
    }
}