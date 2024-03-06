
let initalState={inc:1,dec:0}
export function Counter(state=initalState,action){
    switch(action.type)
    {
        case "INC":{
            return{...state,inc:state.inc+1}
        }
        case "DEC":{
            return{...state,dec:state.dec-1}
        }
        default:
            return state
    }
    
    

}