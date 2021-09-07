import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "./directory.selectors";
import { createStructuredSelector } from "reselect";

export const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      //  this.state.sections.map(({title,imageUrl,id,size,linkUrl}) =>(
      //      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
      //  ))
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
