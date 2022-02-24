const rentals = [];

const addRental = rental => {
    const id = Date.now();

    rentals.push({ ...rental, id });
};

const getRentals = filters => rentals.filter(rental => {
    if (!filters) {
        return false;
    }

    if (filters.address && filters.address.length > 0 && !rental.address.toLowerCase().includes(filters.address.toLowerCase())) {
        return false;
    }

    if (filters.city && filters.city.length > 0 && !rental.city.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
    }
    
    if (filters.roomsRange) {
        const roomsFilter = filters.roomsRange.split(',');
        if (rental.rooms < Number(roomsFilter[0]) || rental.rooms > Number(roomsFilter[1])) {
            return false;
        }
    }
    
    if (filters.priceRange) {
        const priceFilter = filters.priceRange.split(',');
        if (rental.price < Number(priceFilter[0]) || rental.price > Number(priceFilter[1])) {
            return false;
        }
    }

    return true;
});

const deleteRentalById = id => {
    const i = rentals.findIndex(({ id: rentalId }) => rentalId === id );
    rentals.splice(i - 1, 1);
};

module.exports = {
    addRental,
    getRentals,
    deleteRentalById
}