import React from "react";
import { connect } from "react-redux";
// import api from "../api";
import fetchDevelopers from '../store/developers/actions'
import Developer from './Developer'

class DevelopersList extends React.Component {

    displayDevelopers(developersList) {
        if (developersList) {
            return developersList.map((developer) =>
                (<Developer key={developer.id} developer={developer} />)
            )
        }
    }

    render() {
        // check if the developers list is being loaded.`
        const isListLoading = !this.props.developers
        if (isListLoading) {
            return (<p>Loading...</p>)
        }
        else {
            // console.log('@DevelopersList developers: ', this.props.developers)
            return (
                <div>
                    <h2>Codaisseur Developers List</h2>
                    <p>We have {this.props.developers.count} developers!</p>
                    {this.displayDevelopers(this.props.developers.rows)}
                </div>
            )
        }
    }

    componentDidMount() {
        // fetch the data
        // api('/developers').then(
        //     (data) => {
        //         // Notify the Redux store that the data has been fetched
        //         this.props.dispatch(developersFetched(data))
        //     }
        // )
        console.log('@componentDidMount: dispatch a thunk function \'fetchDevelopers\'')
        /** 
         * Dispatch the thunk function itself (thunk action) to the store.
         * The redux-thunk middleware monitors the dispatched action and determines
         * that it is not a normal action object but a thunk function. So instead of 
         * passing it to the store's reducer, it calls the thunk function and passes
         * it with the store's dispatch and getState methods as arguments.
         */
        this.props.dispatch(fetchDevelopers)
    }
}

/** 
 * The wrapper component that connects to the Redux store and passes down
 * props derived from the store's state to the inner component.
 */
function mapStateToProps(reduxState) {
    console.log('@mapStateToProps: redux state ', reduxState)
    return {
        developers: reduxState.developers
    }
}

const ConnectedDevelopersList = connect(mapStateToProps)(DevelopersList)
export default ConnectedDevelopersList