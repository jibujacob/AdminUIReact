import React from 'react'

import "./Homepage.scss";
import { userData } from '../../dummydata';
import WidgetSmall from '../../components/Widgets/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../components/Widgets/WidgetLarge/WidgetLarge';

import FeaturedInfo from '../../components/FeatureInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';

function Homepage() {


    return (
        <div className="homepage">
            <FeaturedInfo />
            <Chart data={userData}
                title="User Analytics"
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />

            </div>
        </div>
    )
}

export default Homepage
