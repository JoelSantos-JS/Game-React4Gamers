import demon from '../../../Assets/DEMON.png'
import './style.css'

import { file_size , Demon_file_size, EDirection } from '../../settings/constants'
import useEnemyMoviment from '../../hooks/useEnemyMoviment'

export const  Demon = () => {

    const moviment = useEnemyMoviment({x: 5 , y: 5})
 
    return (
        <div style={{
            
            width: file_size * 2 ,
            height: Demon_file_size ,
            left: file_size * moviment.position.x,
            
            bottom: file_size * moviment.position.y,
            zIndex: 1 ,
            transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            backgroundImage: `url(${demon})` }}  className='demon-img' > </div>
           
        
    )
}