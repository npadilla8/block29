import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



export default function PlayerListName ({ player }) {
    const navigate = useNavigate();
    return (
        <div>

            <h3>{player.name}</h3>
            <Button 
            variant="contained"
            color="secondary"
            onClick={() => {
                navigate(`/${player.id}`);
            }}

            >
                See Details
            </Button>
        </div>
    );
}