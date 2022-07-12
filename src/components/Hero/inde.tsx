import hero from '../../../Assets/HERO.png'
import './style.css'

import { file_size } from '../../settings/constants'

export const  Hero = () => {

    return (
        <div style={{
            
            width: file_size,
            height: 100,
            bottom: 48* 17,
            backgroundImage: `url(${hero})` }}  className='one-img' > </div>
           
        
    )
}