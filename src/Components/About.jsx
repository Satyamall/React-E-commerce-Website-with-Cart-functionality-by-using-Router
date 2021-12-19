
import style from "./Style.module.css";

export default function About(){

    return (
        <div>
            <div className={style.box6}>
                <h1>About Us</h1>
            </div>
            <div className={style.box7}>
                <p>We make Earth-First essentials using the most sustainable (and comfortable) materials in the world. Every time you purchase an item, we <br /> plant 10 trees. By planting trees for every purchase, we’re making big change accessible to everybody and showing the lasting impact that <br /> one small choice can have.</p>
                <img src="https://cdn.shopify.com/s/files/1/2404/6643/files/tree.svg?51562" alt="" />
                <h1>67,252,145</h1>
                <p>Trees Planted to Date</p>
            </div>
            <div className={style.box8}>
                <h1>Our Mission</h1>
                <p>Everything we do stems from how to do better by our planet—like planting trees. We plant trees because it’s one of the best ways to create a more sustainable future. But over the years, we’ve realized that our journey doesn’t start and end with planting trees. We’re constantly looking at innovative ways to make apparel with the smallest possible footprint and create more circular supply chains. To give you some context, a tentree sweatshirt uses on average 75% less water to make than the other sweatshirts in your closet.</p>
                <h1>Earth-First </h1>
                <p>Earth-First is our commitment to making choices in a world where the planet and its people come first, always.</p>
            </div>
            <div className={style.box9}>
                <h1>1 Billion Trees by 2030</h1>
                <p>Together, we’ve planted over 50 million trees. That’s huge. Those trees have removed millions of tonnes of CO2 from the atmosphere, lifted <br /> entire communities out of poverty, and reforested over 5,000 hectares of land (that’s equal to 12,000 football fields). We’re on a mission to <br /> plant 1 billion trees by 2030, and we can’t do it without you. So let’s keep planting.</p>
            </div>
        </div>
    )
}