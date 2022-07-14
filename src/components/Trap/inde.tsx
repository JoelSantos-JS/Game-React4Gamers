import chest from '../../../Assets/chest.png'
import './style.css'

import { file_size } from '../../settings/constants'

export const  Trap = () => {

    return (
        <div style={{
            
            width: file_size,
            
            height: 100,
            bottom: 48 *  10,
            left: file_size* 5,

             }}  className='Trap-img' > </div>
           
        
    )
}