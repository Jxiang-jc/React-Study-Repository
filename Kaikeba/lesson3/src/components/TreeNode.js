import React, { Component, useState } from "react";

// export default class TreeNode extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             expanded: false
//         };
//     }

//     render() {
//         const { title, children } = this.props.data;
//         const { expanded } = this.state;
//         const hasChildren = children && children.length > 0;
//         return (
//             <div>
//                 <div className="nodesInner" onClick={() => this.setState({ expanded: !expanded })}>
//                     {hasChildren && (
//                         <i className={"tri " + (expanded ? "tri-open" : "tri-close")}></i>
//                     )}
//                     <span>{title}</span>
//                 </div>
//                 {hasChildren && expanded && (
//                     <div className="children">
//                         {children.map(item => {
//                             return <TreeNode data={item} key={item.key} />;
//                         })}
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

const TreeNode = props => {
    const [expanded, setExpanded] = useState(false);
    const { title, children } = props.data;
    const hasChildren = children && children.length > 0;
    return (
        <div>
            <div className="nodesInner" onClick={() => setExpanded(!expanded)}>
                {hasChildren && (
                    <i className={"tri " + (expanded ? "tri-open" : "tri-close")}></i>
                )}
                <span>{title}</span>
            </div>
            {hasChildren && expanded && (
                <div className="children">
                    {children.map(item => {
                        return <TreeNode key={item.key} data={item} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
