


import style from "./Style.module.css";

export default function Faq(){

    return (
        <div>
            <div className={style.box10}>
                <img src="https://cdn.shopify.com/s/files/1/2404/6643/files/tentree-tokens.jpg?v=1573170267" alt="" />
            </div>
            <div className={style.box11}>
                <h1>How it works</h1>
                <p>Every piece of apparel comes with a unique tag, each with it’s own tree code specific to your ten trees.</p>
                <p>Once your tree code is registered you can track your trees and see where they will be planted.</p>
                <p>Watch your impact grow the more codes you register. PS you'll also earn 25  rewards seeds for each code registered.*</p>
            </div>
            <div className={style.box12}>
                <h1>Frequently asked questions</h1>
                <div className={style.ques}>
                   Can I pick where my trees are planted?
                </div>
                <div className={style.ques}>
                  How do you pick where your trees are planted?
                </div>
                <div className={style.ques}>
                If I don’t register my code, will the trees still be planted?
                </div>
                <div className={style.ques}>
                Is there a dollar value per tree?
                </div>
                <div className={style.ques}>
                How do I know the trees won’t be cut down?
                </div>
                <div className={style.ques}>
                Do you plant only indigenous species?
                </div>
                <div className={style.ques}>
                What can ten trees do?
                </div>
                <div className={style.ques}>
                What happens to the trees if I return my shirt?
                </div>
                <div className={style.ques}>
                Can we come plant with you?
                </div>
                <div>
                  *Rewards seeds for tree registries will be awarded starting <br /> December 2020. Seeds will not be awarded retroactively.
                </div>
            </div>
        </div>
    )
}