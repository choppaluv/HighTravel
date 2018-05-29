import { initialState } from './selectors'

const schedules_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE_SCHEDULE': 
            sessionStorage.setItem('tripSchedules', JSON.stringify(action.schedules))
            return Object.assign({}, state, {
                schedules: action.schedules,
                updated:true
            })
        case 'POST_SCHEDULE_REQUEST':
            return Object.assign({},state,{
                updated:false
            })
        case 'POST_SCHEDULE_SUCCESS':
        return Object.assign({},state,{
            updated:true
        })
        case 'POST_SCHEDULE_FAIL':
        return Object.assign({},state,{
            updated:false
        })
        default:
            return state
    }
}

export default schedules_reducer
