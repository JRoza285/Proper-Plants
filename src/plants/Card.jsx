


export default function Card({ plant, addToCart }) {
    return (
        <div>
    
            <div style={{ fontSize: `4rem` }}>{plant.image}</div>
            <h2>{plant.name}</h2>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
    );
}