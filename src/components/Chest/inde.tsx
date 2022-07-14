import chest from '../../../Assets/chest.png'
import './style.css'

import { file_size } from '../../settings/constants'

export const  Chest = () => {

    return (
        <div style={{
            
            width: file_size,
            
            height: 100,
            bottom: 48 *  5,
            left: file_size* 3,

             }}  className='chest-img' > </div>
           
        
    )
}