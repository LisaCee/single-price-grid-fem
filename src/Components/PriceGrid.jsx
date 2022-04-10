export default function PriceGrid() {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Join our community</h1>
                <h2>30-day, hassle-free money back guarantee</h2>
                <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
            </div>
            <div className='price'>
                <h2>Monthly Subscription</h2>
                <p><span>$29</span> per month</p>
                <p>Full access for less than $1 a day</p>
                <button>Sign Up</button>
            </div>
            <div className='why'>
                <h2>Why Us</h2>
                <ul>
                    <li>Tutorials by industry experts</li>
                    <li>Peer & expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </div>
        </div>
    )
}