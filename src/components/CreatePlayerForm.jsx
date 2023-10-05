import React, { useState } from 'react';
import { createPlayer } from "../api"
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CreatePlayerForm({ players, setPlayers }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const APIData = await createPlayer(name, breed);
        if(APIData.success) {
            console.log("New Player ", APIData.data.newPlayer);

            const newPlayersList = [...players, APIData.data.newPlayer];
            setPlayers(newPlayersList);

            setName("Romeo");
            setBreed("Coton De Tulear");
        } else {
            setError(APIData.error.message);
        }
    }

    return (
        <Paper elevation={16} >
            <form onSubmit={handleSubmit} sx={{width: 800}}>
            <Grid>
        
            {error && <p>{error}</p>}
            <input
                value={name}
                type="text"
                name="name"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                />
                <input
                value={breed}
                type="text"
                name="breed"
                placeholder="breed"
                onChange={(e) => setBreed(e.target.value)}
                />
                <Button 
                variant="contained"
                color="secondary"
                >Submit</Button>
        
            </Grid>
            </form>
        </Paper>
    );
}