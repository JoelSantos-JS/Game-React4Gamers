import miniDemon from '../../../Assets/MINI-DEMON.png'
import './style.css'

import { EDirection, file_size } from '../../settings/constants'
import useEnemyMoviment from '../../hooks/useEnemyMoviment'

export const  MiniDemon = () => {
    const moviment = useEnemyMoviment({x: 10 , y: 5})


    return (
        <div style={{
            
            width: file_size,
            height: file_size,
            left: file_size * moviment.position.x,
            bottom: file_size * moviment.position.y,
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            backgroundImage: `url(${miniDemon})` }}  className='Mini-img' > </div>
           
        
    )
}