import awilix from "./god portraits/t_GodPortrait_Awilix.avif"
import gilgamesh from "./god portraits/t_GodPortrait_Gilgamesh.avif"
import ganesha from "./god portraits/t_GodPortrait_Ganesha.avif"


function Icons() {
    return(
        <div className="icons">
            <h3>
            When trying to explain my take on MOBAs to those who don't know what they are I relate them to 
            sports in how every position has a role to play to help the team succeed.Below are a few of my 
            favorite characters to play as especially as a front liner role.
            </h3>
            <img id="icon" alt="Awilix" src={awilix}></img>
            <p>Awilix is a newer release, she was one of my favorite Gods to play in Smite 1. She's good at chasing other characters down and has a mount of her own named Suku.</p>
            <img id="icon" alt="Gilgamesh" src={gilgamesh}></img>
            <p>Gilgamesh is another new release to Smite 2 returning from Smite 1. His kit involves slowing enemies and rewarding himself and teammates for landing abilities from his kit. Lore wise he's probably one of my favorites.</p>
            <img id="icon" alt="Ganesha" src={ganesha}></img>
            <p>Ganesha has been in the game for some time now and is all about helping his teammates succede. He cannot receive credit for killing an enemy if a teammate is around the teammate will receive that credit.</p>
        </div>

    )
}

export default Icons