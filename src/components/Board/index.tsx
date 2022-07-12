import { game_size } from "../../settings/constants"
import { Hero } from "../Hero/inde"




export const  Board = () => {

    return (
        <div>

            <Hero/>
        <img src="./Assets/tileset.gif" alt="" width={game_size} height={game_size}/>

        </div>
    )
}