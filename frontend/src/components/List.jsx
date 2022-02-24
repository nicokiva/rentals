import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { getRentals, deleteRental } from '../services/rental.services';

const List = () => {
    const [rentals, setRentals] = useState([]);
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [roomsRange, setRoomsRange] = useState([0, 8])
    const [priceRange, setPriceRange] = useState([0, 10000000])
    const navigate = useNavigate();

    const getList = async filters => {
        const existingRentals = await getRentals(filters);

        setRentals(existingRentals);
    }

    useEffect(getList, [])

    const handleAddRentalClick = () => {
        navigate('/new');
    };

    const handlePriceRangeChange = (e, newValue) => {
        setPriceRange(newValue);
    }

    const handleRoomsRangeChange = (e, newValue) => {
        setRoomsRange(newValue);
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    };

    const handleDelete = async rental => {
        await deleteRental(rental)
        getList({ address, city, roomsRange, priceRange })
    }

    const handleFilter = () => {
        getList({ address, city, roomsRange, priceRange })
    };

    return (
        <>
            <section style={{ display: 'flex', flexFlow: 'column' }}>
                <section className="filter" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <TextField
                        label="Search address"
                        type="text"
                        value={address}
                        onChange={handleChangeAddress}
                    />

                    <TextField
                        label="Search city"
                        type="text"
                        value={city}
                        onChange={handleChangeCity}
                    />

                    <div>
                        <Typography gutterBottom>
                            Room Range
                        </Typography>
                        <Slider
                            value={roomsRange}
                            onChange={handleRoomsRangeChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={8}
                        />
                    </div>

                    <div>
                        <Typography gutterBottom>
                            Price Range
                        </Typography>

                        <Slider
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={10000000}
                            step={100}
                        />
                    </div>

                    <IconButton onClick={handleFilter}>
                        <SearchIcon />
                    </IconButton>
                </section>

                <Button variant="contained" aria-label="Add" style={{ width: '100px', heigh: '50px' }} onClick={handleAddRentalClick}>
                    <AddIcon />
                </Button>
            </section>


            <section style={{ marginTop: '20px' }}>
            {rentals && rentals.length > 0 ?
                <>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Matches: </span>{rentals.length}
                    </div>
                    {rentals.map(rental => <Card rental={rental} onDelete={() => handleDelete(rental)} key={rental.id} />)}
                </>
            : <>No data to Display</>}
            </section>
        </>
    )
};

export default List;