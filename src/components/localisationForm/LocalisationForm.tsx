import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';
import { ILocalisationForm } from '../../type';
import "./style.css";



const LocalisationForm: React.FC<ILocalisationForm>= ({setLocalisationAuto, setLocalisationManual, isLoading}) => {

    // Coordinates for Stockholm
    const [latitude, setLatitude] = useState("59.334591")
    const [longitude, setLongitude] = useState("18.063240")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        
        setLocalisationManual({lat: Number(latitude), lng: Number(longitude)});

      };


    return (
        <div className="form">
            <div className='form-text'>
                <div className='form-titleLoader'>
                    <h3>Get Localisation</h3>
                    {isLoading && <CircularProgress size={25}/>}
                </div>
                <p>You can click on the following button to set your localisation.</p>
            </div>
            <div className='form-button'>
                <Button onClick={() => setLocalisationAuto()} variant="contained" startIcon={<SearchIcon />}>
                            Set Your Localisation
                </Button>
            </div>
            


            <div className='form-text'>
                <div className='form-titleLoader'>
                    <h3>Manual Input</h3>
                    {isLoading && <CircularProgress size={25}/>}
                </div>
                <p>You can fill the following form if you want to specify another location.</p>
                {isLoading && <CircularProgress />}
            </div>
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch', color: 'white' }
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            noValidate
            autoComplete="off"
            paddingBottom={"50px"}
            >
                    <TextField
                    id="layout-text-latitude"
                    value={latitude}
                    onInput={e=>setLatitude((e.target as HTMLInputElement).value)}
                    label="Latitude"
                    sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                    variant="filled"
                    />
                    <TextField
                    id="layout-text-longitude"
                    value={longitude}
                    onInput={e=>setLongitude((e.target as HTMLInputElement).value)}
                    label="Longitude"
                    sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                    variant="filled"
                    />
                    <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
                        Search
                    </Button>
            </Box>
        </div>
    )
}

export default LocalisationForm;
      
