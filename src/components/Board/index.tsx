import { game_size } from "../../settings/constants"
import { Chest } from "../Chest/inde"
import { Demon } from "../Demon/inde"
import { Hero } from "../Hero/inde"
import { MiniDemon } from "../Mini Demon/inde"
import { Trap } from "../Trap/inde"




export const  Board = () => {

    return (
        <div>
            
            <Demon />
            <MiniDemon/>
            <Hero/>
            <Chest/>
            <Trap/>
        <img src="./Assets/tileset.gif" alt="" width={game_size} height={game_size}/>

        </div>
    )
}