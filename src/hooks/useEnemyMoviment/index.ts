import { useState } from 'react'
import {  useInterval} from 'usehooks-ts'
import { HandleNextMoviment } from '../../contents/canvas/helpers'
import { EDirection } from '../../settings/constants'




function useEnemyMoviment(initialPosition) {


    const [PositionState , setPositionState]  = useState(initialPosition)
    const [direction , setDirection] = useState(EDirection.RIGHT)
    

    

    useInterval(function Move() {
            const random = Math.floor(Math.random() * 4) 
            const directions = Object.values(EDirection)

           const randomDirections=  directions[random]


    const NextMoviment =  HandleNextMoviment(randomDirections,PositionState )
    setDirection(randomDirections)
    setPositionState(NextMoviment)

        console.log('executou')
    }, 900)


    return {
        position: PositionState,
        direction: direction,
    }

}

export default useEnemyMoviment;