import hero from '../../../Assets/HERO.png'
import './style.css'


import { EDirection, file_size, Hero_Helmt } from '../../settings/constants'
 
import useHeroMoviment from '../../hooks/useHeroMoviment'




const initialPosition = {
    x: 15, 
    y: 10
}

export const  Hero = () => {


   const {position , direction} =  useHeroMoviment(initialPosition)
   


    
   

    return (
        <div style={{
            
            width: file_size,
            
            height: file_size  + Hero_Helmt,
            bottom: file_size * position.y,
            left: file_size*  position.x,
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            zIndex: 1 ,
            backgroundImage: `url(${hero})` }}  className='hero-img' > </div>
           
        
    )
}