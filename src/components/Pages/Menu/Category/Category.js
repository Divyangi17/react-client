import React from 'react'

import Item from './Item.js/Item'
import SectionTitle from '../../../UI/SectionTitle/SectionTitle'

function Category(props) {
    const { name, items } = props

    const itemsDisplay = items.map(item => <Item
        key={item.id}
        name={item.name}
        desc={item.desc}
        price={item.price}
        img_link={item.img_link}
        id={item.id}
    />)

    return (
        <div className="my-4">
            <SectionTitle>
                {name}
            </SectionTitle>
            {itemsDisplay}
        </div>
    )
}

export default Category