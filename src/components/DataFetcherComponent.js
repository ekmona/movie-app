import React, { Component } from "react";

class DataFecherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const data = await(await fetch('https://api.coinpaprika.com/v1/tickers')
            ).json();
            
            this.setState({ data, loading: false});
        } catch (error) {
            this.setState({ error, loading:false});
        }
    }

    render() {
        const { data, loading, error} = this.state;

        if (loading) {
            return <div>Loading...</div>
        } 
        if (error) {
            return <div>Error: {error.message}</div>
        }
        return (
            <div>
                {data.map(item => (
                    <div >{item.name}</div>
                ))}
            </div>
        )
    }
}
export default DataFecherComponent;