import React from "react";
import Shop_Data from './shop.data'


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: Shop_Data
        };
    }

    render() {
        return (
            <div>
                SHOP PAGE
            </div>
        );
    }
}

export default ShopPage;