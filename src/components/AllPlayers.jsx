import { useState, useEffect } from "react";
import { fetchAllPlayers } from '../api';
import CreatePlayerForm from "./CreatePlayerForm";
import PlayerListName from './PlayerListName';

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';



export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllPLayers() {
            const APIResponse = await fetchAllPlayers();
            if (APIResponse.success) {
                setPlayers(APIResponse.data.players);
            } else {
                setError(APIResponse.error.message);
            }
        }

        getAllPLayers();
        
    }, []); 

        const playersToDisplay = searchParam
            ? players.filter((player) =>
                player.name.toLowerCase().includes(searchParam)
            )
                : players;
                
    return (
       <div>
            <div>
                <Paper>
                <label>
                    search:{" "}
                
                    < TextField id="filled-basic" label="Search" variant="filled"
                        type="text"
                        placeholder="search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
                </Paper>
            </div>
            <CreatePlayerForm players={players} setPlayers={setPlayers} />
            {error && <p>{error}</p>}
            {playersToDisplay.map((player) => {
                return <PlayerListName key={player.id} player={player} />;
            })}
       </div>
    );
}