import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
    
export class FirstComponents extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 5,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		const datad= this.state.offset + this.state.perPage
		const slice = data.slice(this.state.offset, datad)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`https://api.coincap.io/v2/assets`)
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }

    render() {
        return (
            <div>
                  <h1>Welcome to GKTechy!</h1>
                  <h1>welcome again</h1>

                  <table border="1">
                     <thead>
                     <tr>
                    <th scope="col">id</th>
                    <th scope="col">rank</th>
                    <th scope="col">symbol</th>
                    <th scope="col">name</th>
                    <th scope="col">supply</th>
                    <th scope="col">maxSupply</th>
                    <th scope="col">marketCapUsd</th>
                    <th scope="col">volumeUsd24Hr</th>
                    <th scope="col">priceUsd</th>
                  </tr>

                     </thead>
                     <tbody>
                        {
                          this.state.tableData.map((details, i) => (
                            <tr>
                            <td scope="col"><img className="cur__logo" src="https://assets.coincap.io/assets/icons/btc@2x.png" alt="helo"/>{details.id}</td>
                            <td>{details.rank}</td>
                            <td>{details.symbol}</td>
                            <td>{details.name}</td>
                            <td>{Math.floor(details.supply)}</td>
                            <td>{Math.round(details.maxSupply)}</td>
                            <td>{Math.round(details.marketCapUsd)}</td>
                            <td>{Math.round(details.volumeUsd24Hr)}</td>
                            <td>{Math.round(details.priceUsd)}</td></tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
        )
    }
}

export default FirstComponents