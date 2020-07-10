const defaultValue = {
    websiteContent: [],
    websiteContentError: null,
    universityList: [],
    universityListError: null,
    facultyList: null,
    facultyListError: null,
    testimonyList: null,
    testimonyListError: null
}
export default function reducer(state = defaultValue, action) {
    switch (action.type) {
        case 'HIT_API_WEBSITE_CONTENT_SUCCESS':
            return {
                ...state,
                websiteContent: action.data
            }
        case 'HIT_API_WEBSITE_CONTENT_ERROR':
            return {
                ...state,
                websiteContentError: action.err
            }
        case 'HIT_API_LIST_OF_UNIVERSITY_SUCCESS':
            return {
                ...state,
                universityList: action.data
            }
        case 'HIT_API_LIST_OF_UNIVERSITY_ERROR':
            return {
                ...state,
                universityListError: action.err
            }
        case 'HIT_API_LIST_OF_FACULTY_SUCCESS':
            let groupingData = {}
            action.data.forEach(el => {
                if(!groupingData[el.univ_id]){
                    groupingData[el.univ_id] = []
                }
                groupingData[el.univ_id].push(el.name)
            })
            return {
                ...state,
                facultyList: groupingData
            }
        case 'HIT_API_LIST_OF_FACULTY_ERROR':
            return {
                ...state,
                facultyListError: action.err
            }
        case 'HIT_API_LIST_OF_TESTIMONY_SUCCESS':
            return {
                ...state,
                testimonyList: action.data
            }
        case 'HIT_API_LIST_OF_TESTIMONY_ERROR':
            return {
                ...state,
                testimonyListError: action.err
            }
        default:
            return state;
    }
}