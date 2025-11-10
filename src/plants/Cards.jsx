import Card from "./Card";
import "./plants.css";


export default function Cards({ Plants, addToCart }) {
    console.log(Plants);
    return (
        <section className="plants-for-sale">
            <h2>Plants For Sale</h2>
            <ul>
                {Plants.map((plant) => (
                    <li key={plant.id}> <Card plant={plant} addToCart={addToCart} />
                    </li>
                ))}
            </ul>
        </section>
    );
}