import React from 'react'
import '../menu.css'
export default function Menu() {
    return(
        <div className='menu-page'>
          <div className='menu-container'>
            <section className="menu-section">
              <h2 className='sub-title'>Appetizers</h2>
              <ul>
                <li className='menu-li'>Bruchetta</li>
                Grilled bread with garlic spread, seasoned with sald and olive oil
                <li className='menu-li'>Hummus Trio</li>
                A trio of classic, roasted red pepper, and spinach hummus served with warm pita bread
                <li className='menu-li'>Baba Ghanoush</li>
                Smoky roasted eggplant dip, garnished with olive oil and pomegranate seeds, with fresh vegetables
                <li className='menu-li'>Falafel Platter</li>
                Crispy chickpea fritters, with tahini sauce and a side of tabbouleh salad
                <li className='menu-li'>Spanakopita</li>
                Flaky phyllo pastry filled with spinach, feta, and herbs, served with tzatziki
              </ul>
            </section>
            <section className="menu-section">
              <h2 className='sub-title'>Entrees</h2>
              <ul>
                <li className='menu-li'>Mediterranean Grill Platter</li>
                Marinated chicken, beef, lamb skewers, served with rice pilaf,
                grilled vegetables, and tzatziki.
                <li className='menu-li'>Lemon Herb Roasted Chicken</li>
                Roasted chicken seasoned with Mediterranean herbs,
                lemon couscous, garlic green beans
                <li className='menu-li'>Shawarma Wrap</li>
                Thinly sliced marinated beef or chicken,
                in pita with fresh veggies and tahini sauce,
                side of Greek salad.
                <li className='menu-li'>Seafood Paella</li>
                Shrimp, mussels, calamari cooked with saffron-infused rice and served with garlic aioli.
                <li className='menu-li'>Vegetable Moussaka</li>
                Roasted eggplant, zucchini, potatoes, spiced lentils with creamy béchamel sauce,
                and Greek salad
              </ul>
            </section>
            <section className="menu-section">
              <h2 className='sub-title'>Sides</h2>
              <ul>
                <li className='menu-li'>Greek Salad</li>
                Lettuce, peppers, olives, feta cheese, garlic, rosemary croutons.
                <li className='menu-li'>Tabbouleh Salad</li>
                Parsley, tomatoes, mint, onions, and bulgur wheat, lemon vinaigrette dressing
                <li className='menu-li'>Mediterranean Roasted Vegetables</li>
                Seasonal vegetables roasted in olive oil, herbs, with crumbled feta cheese
              </ul>
            </section>
            <section className="menu-section">
              <h2 className='sub-title'>Drinks</h2>
              <ul>
                <li className='menu-li'>Mediterranean Lemonade</li>
                Fresh lemon juice, mint, and a hint of rosewater
                <li className='menu-li'>Pomegranate Mojito</li>
                Pomegranate juice, fresh mint, and rum
                <li className='menu-li'>Greek Iced Coffee</li>
                Creamy and aromatic iced coffee, with honey, and a sprinkle of cinnamon
                <li className='menu-li'>Mediterranean Sangria</li>
                Fruity red wine, citrus, and a hint of brandy, served with a selection of fresh fruit
              </ul>
            </section>
            <section className="menu-section">
              <h2 className='sub-title'>Desserts</h2>
              <ul>
                <li className='menu-li'>Lemon Dessert</li>
                Moist lemon cake, garnished with lemon zest, and with a dusting of powdered sugar
                <li className='menu-li'>Mediterranean Sorbet Trio</li>
                Trio of fruit sorbets, mango, lemon, and raspberry, served with fresh berries
                <li className='menu-li'>Baklava</li>
                Layers of flaky pastry, honey, and crushed nuts, topped with a drizzle of rosewater syrup
              </ul>
            </section>
          </div>
        </div>
    )
}