import React from "react";
import Shop_Data from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data
        };
    }


    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page" >
                {collections.map(({ id, ...otherCollectionprops }) => (
                    <CollectionPreview key={id} {...otherCollectionprops} />
                ))}
            </div>
        );
    }
}

export default ShopPage;