import 'bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveBar } from '@nivo/bar'

const Metrics = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const displayFooter = () => {
        return (
            <>
                <div className="footer-metrics-page">
                </div>
            </>
        )
    }

    const data = [
        {
            "country": "AD",
            "hot dog": 109,
            "hot dogColor": "hsl(55, 70%, 50%)",
            "burger": 42,
            "burgerColor": "hsl(358, 70%, 50%)",
            "sandwich": 2,
            "sandwichColor": "hsl(259, 70%, 50%)",
            "kebab": 20,
            "kebabColor": "hsl(77, 70%, 50%)",
            "fries": 196,
            "friesColor": "hsl(225, 70%, 50%)",
            "donut": 8,
            "donutColor": "hsl(134, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 125,
            "hot dogColor": "hsl(157, 70%, 50%)",
            "burger": 36,
            "burgerColor": "hsl(150, 70%, 50%)",
            "sandwich": 142,
            "sandwichColor": "hsl(2, 70%, 50%)",
            "kebab": 36,
            "kebabColor": "hsl(114, 70%, 50%)",
            "fries": 171,
            "friesColor": "hsl(137, 70%, 50%)",
            "donut": 40,
            "donutColor": "hsl(117, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 194,
            "hot dogColor": "hsl(253, 70%, 50%)",
            "burger": 111,
            "burgerColor": "hsl(177, 70%, 50%)",
            "sandwich": 164,
            "sandwichColor": "hsl(317, 70%, 50%)",
            "kebab": 190,
            "kebabColor": "hsl(91, 70%, 50%)",
            "fries": 3,
            "friesColor": "hsl(239, 70%, 50%)",
            "donut": 152,
            "donutColor": "hsl(262, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 84,
            "hot dogColor": "hsl(245, 70%, 50%)",
            "burger": 9,
            "burgerColor": "hsl(284, 70%, 50%)",
            "sandwich": 125,
            "sandwichColor": "hsl(97, 70%, 50%)",
            "kebab": 46,
            "kebabColor": "hsl(54, 70%, 50%)",
            "fries": 150,
            "friesColor": "hsl(112, 70%, 50%)",
            "donut": 87,
            "donutColor": "hsl(283, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 98,
            "hot dogColor": "hsl(280, 70%, 50%)",
            "burger": 157,
            "burgerColor": "hsl(335, 70%, 50%)",
            "sandwich": 166,
            "sandwichColor": "hsl(144, 70%, 50%)",
            "kebab": 91,
            "kebabColor": "hsl(254, 70%, 50%)",
            "fries": 1,
            "friesColor": "hsl(185, 70%, 50%)",
            "donut": 175,
            "donutColor": "hsl(352, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 82,
            "hot dogColor": "hsl(20, 70%, 50%)",
            "burger": 27,
            "burgerColor": "hsl(98, 70%, 50%)",
            "sandwich": 78,
            "sandwichColor": "hsl(184, 70%, 50%)",
            "kebab": 97,
            "kebabColor": "hsl(187, 70%, 50%)",
            "fries": 46,
            "friesColor": "hsl(234, 70%, 50%)",
            "donut": 102,
            "donutColor": "hsl(116, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 107,
            "hot dogColor": "hsl(339, 70%, 50%)",
            "burger": 90,
            "burgerColor": "hsl(132, 70%, 50%)",
            "sandwich": 135,
            "sandwichColor": "hsl(197, 70%, 50%)",
            "kebab": 149,
            "kebabColor": "hsl(49, 70%, 50%)",
            "fries": 98,
            "friesColor": "hsl(333, 70%, 50%)",
            "donut": 125,
            "donutColor": "hsl(114, 70%, 50%)"
        }
    ];

    return (
        <>
            <div className="content-metrics-page">
                <div className="bar-chart">
                    <ResponsiveBar
                        data={data}
                        keys={[
                            'hot dog',
                            'burger',
                            'sandwich',
                            'kebab',
                            'fries',
                            'donut'
                        ]}
                        indexBy="country"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 32,
                            truncateTickAt: 0
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'food',
                            legendPosition: 'middle',
                            legendOffset: -40,
                            truncateTickAt: 0
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                    />
                </div>
                {displayFooter()}
            </div>
        </>
    );
};

export default Metrics;