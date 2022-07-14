import { useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { EDirection } from '../../settings/constants'




function useHeroMoviment(initialPosition) {


    const [PositionState , setPositionState]  = useState(initialPosition)
    const [direction , setDirection] = useState(EDirection.RIGHT)
    

 

    useEventListener('keydown' , (event: any) => {

        
        if(event.key === EDirection.UP) {
            
        setPositionState({x: PositionState.x , y: PositionState.y + 1})
        } else if (event.key === EDirection.DOWN) {
            
        setPositionState({x: PositionState.x , y: PositionState.y - 1})
        } else if (event.key === EDirection.LEFT) {
            
        setPositionState({x: PositionState.x - 1, y: PositionState.y })
        setDirection(EDirection.LEFT)
        }else if (event.key === EDirection.RIGHT) {
        
        setPositionState({x: PositionState.x + 1, y: PositionState.y })
        setDirection(EDirection.RIGHT)
        }

    })


    return {
        position: PositionState,
        direction: direction,
    }

}

export default useHeroMoviment;