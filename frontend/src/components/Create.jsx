import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addRental } from '../services/rental.services';

const CreateUpdate = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [rooms, setRooms] = useState(0);
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    
    const handleCancel = () => {
        navigate('/list');
    };

    const handleAdd = async () => {
        try {
            await addRental({ address, city, rooms, price });
            navigate('/list');
        } catch (e) {
            alert('Error inserting!');
        }
    };

    return (
        <form>
            <section style={{ display: 'flex', justifyContent: 'space-between',  marginBottom: '50px' }}>
                <TextField
                    label="Address"
                    type="text"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value) }}
                />

                <TextField
                    label="City"
                    type="text"
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />

                <TextField
                    label="Rooms"
                    type="number"
                    value={rooms}
                    onChange={(e) => { setRooms(Number(e.target.value)) }}
                />

                <TextField
                    label="Price"
                    type="number"
                    value={price}
                    onChange={(e) => { setPrice(Number(e.target.value)) }}
                />
            </section>

            <section style={{ display: 'flex', justifyContent: 'end' }}>
                <Button variant="outlined" aria-label="Add" onClick={handleCancel} style={{ width: '100px', heigh: '50px', marginRight: '20px' }}>
                    Cancel
                </Button>

                <Button variant="contained" aria-label="Add" onClick={handleAdd} style={{ width: '100px', heigh: '50px' }}>
                    Add
                </Button>
            </section>
        </form>
    )
};

export default CreateUpdate;