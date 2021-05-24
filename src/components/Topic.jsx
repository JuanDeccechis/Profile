import React, { Component } from "react";

class Topic extends Component {
    render() {
        const { title, since, until, employer, rol, moreInfo } = this.props;
        return (
            <div>
                {title &&
                    <h2>{title}</h2>
                }
                <div className="topic-information">
                    {since && until &&
                        <div className="short-column">{since} - {until}</div>
                    }
                    {employer ?
                        <div className="long-column"> 
                            <p className="outstanding">{employer}</p>
                            <p>{rol}</p>
                        </div>
                    :
                        <span>{rol}</span>
                    }
                </div>
            </div>
        );
    };
}

export default Topic;