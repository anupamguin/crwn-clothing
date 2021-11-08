import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  // componentDidUpdate() {
  //   this.setState({ loading: false });
  // }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          // )}
          component={CollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={(Props) => (
          //   <CollectionPageWithSpinner isLoading={loading} {...Props} />
          // )}

          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
