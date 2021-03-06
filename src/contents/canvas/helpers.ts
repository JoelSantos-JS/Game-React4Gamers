import { EDirection } from "../../settings/constants"


export const HandleNextMoviment = (direction, position) => {

    switch(direction) {
            case EDirection.LEFT:
            return  {x: position.x - 1, y: position.y }

            case EDirection.RIGHT:
                return {x: position.x + 1, y: position.y }
                


            case EDirection.UP:
                return {x: position.x , y: position.y + 1}

            case EDirection.DOWN:
                return {x: position.x , y: position.y - 1}

    }
    
    
}