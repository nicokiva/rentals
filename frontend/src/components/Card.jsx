import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ rental, onDelete }) => (
    <article style={{ display: 'flex', paddingBottom: '20px', paddingTop: '20px', borderBottom: 'solid 1px' }}>
        <div style={{ width: '300px'}}>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>Address: </span>
                {rental.address}
            </div>

            <div>
                <span style={{ fontWeight: 'bold' }}>City: </span>
                {rental.city}
            </div>
        </div>

        <div style={{ width: '300px'}}>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>Rooms: </span>
                {rental.rooms}
            </div>

            <div>
                <span style={{ fontWeight: 'bold' }}>Price: </span>
                {rental.price}
            </div>
        </div>

        <IconButton onClick={onDelete}>
            <DeleteIcon />
        </IconButton>
    </article>
);

export default Card;