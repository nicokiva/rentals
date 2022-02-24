const HOST = 'http://localhost:3001';
export const getRentals = async (filters = {}) => {
    const queryString = Object.keys(filters).map(key => `${key}=${filters[key]}`).join('&');
    const response = await fetch(`${HOST}/rentals?${queryString}`);
    if (!response.ok) {
        throw new Error('Error');
    }

    const rentals = await response.json();
    return rentals;
};

export const addRental = async (rental) => {
    const response = await fetch(`${HOST}/rentals`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(rental)
    });

    if (!response.ok) {
        throw new Error('Error');
    }
};

export const deleteRental = async rental => {
    const response = await fetch(`${HOST}/rentals/${rental.id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error');
    }
};